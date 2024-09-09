<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\platformapi\logic\setting\pay;


use app\common\enum\PayEnum;
use app\common\logic\BaseLogic;
use app\common\model\pay\PayConfig;
use app\common\model\pay\TenantPayConfig;
use app\common\service\FileService;

/**
 * 支付配置
 * Class PayConfigLogic
 * @package app\platformapi\logic\setting\pay
 */
class PayConfigLogic extends BaseLogic
{

    /**
     * @notes 设置配置
     * @param $params
     * @return bool
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/2/23 16:16
     */
    public static function setConfig($params)
    {
        $payConfig = PayConfig::find($params['id']);

        $config = '';
        if ($payConfig['pay_way'] == PayEnum::WECHAT_PAY) {
            $config = [
                'interface_version' => $params['config']['interface_version'],
                'merchant_type' => $params['config']['merchant_type'],
                'mch_id' => $params['config']['mch_id'],
                'pay_sign_key' => $params['config']['pay_sign_key'],
                'apiclient_cert' => $params['config']['apiclient_cert'],
                'apiclient_key' => $params['config']['apiclient_key'],
            ];
        }
        if ($payConfig['pay_way'] == PayEnum::ALI_PAY) {
            $config = [
                'mode' => $params['config']['mode'],
                'merchant_type' => $params['config']['merchant_type'],
                'app_id' => $params['config']['app_id'],
                'private_key' => $params['config']['private_key'],
                'ali_public_key' => $params['config']['mode'] == 'normal_mode' ? $params['config']['ali_public_key'] : '',
                'public_cert' => $params['config']['mode'] == 'certificate' ? $params['config']['public_cert'] : '',
                'ali_public_cert' => $params['config']['mode'] == 'certificate' ? $params['config']['ali_public_cert'] : '',
                'ali_root_cert' => $params['config']['mode'] == 'certificate' ? $params['config']['ali_root_cert'] : '',
            ];
        }

        $payConfig->name = $params['name'];
        $payConfig->icon = FileService::setFileUrl($params['icon']);
        $payConfig->sort = $params['sort'];
        $payConfig->config = $config;
        $payConfig->remark = $params['remark'] ?? '';
        return $payConfig->save();
    }


    /**
     * @notes 获取配置
     * @param $params
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author 段誉
     * @date 2023/2/23 16:16
     */
    public static function getConfig($params)
    {
        $payConfig = PayConfig::find($params['id'])->toArray();
        $payConfig['icon'] = FileService::getFileUrl($payConfig['icon']);
        $payConfig['domain'] = request()->domain();
        return $payConfig;
    }

    /**
     * @notes 初始化支付配置是否开启
     * @param mixed $tenant_id
     * @return void
     * @author yfdong
     * @date 2024/09/05 23:01
     */
    public static function initialization(mixed $tenant_id)
    {
        //支付方式配置
        $field = "name,pay_way,config,icon,sort,remark,tenant_id";
        //查询支付方式配置 此处默认为租户号为0的模板数据
        $payConfigList = TenantPayConfig::where(['tenant_id' => '0'])->field($field)->select();
        foreach ($payConfigList as $item) {
            $item['tenant_id'] = $tenant_id;
            TenantPayConfig::create(self::toArray($item));
        }
    }

    /**
     * @notes 对象转数组
     * @param mixed $payConfig
     * @return array
     * @author yfdong
     * @date 2024/09/07 13:05
     */
    private static function toArray(mixed $payConfig): array
    {
        return [
            'id'=>$payConfig['id'],
            'tenant_id'=>$payConfig['tenant_id'],
            'name' => $payConfig['name'],
            'pay_way' => $payConfig['pay_way'],
            'config' => $payConfig['config'],
            'icon' => $payConfig['icon'],
            'sort' => $payConfig['sort'],
            'remark' => $payConfig['remark']
        ];
    }

}
