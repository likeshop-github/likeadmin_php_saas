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
namespace app\platformapi\logic\tenant;

use app\common\enum\user\UserTerminalEnum;
use app\common\logic\BaseLogic;
use app\common\model\auth\TenantAdmin;
use app\common\model\tenant\Tenant;
use app\platformapi\validate\tenant\TenantAdminValidate;
use think\facade\Config;

/**
 * 用户逻辑层
 * Class TenantLogic
 * @package app\platformapi\logic\user
 */
class TenantAdminLogic extends BaseLogic
{
    /**
     * @notes 新增租户管理员
     * @param array $params
     * @return void
     * @author yfdong
     * @date 2024/09/04 22:43
     */
    public static function add(array $params)
    {
        TenantAdmin::create([
            'tenant_id' => $params['tenant_id'],
            'account' => $params['account'],
            'name' => $params['name'],
            'password' => self::createPassword($params['password']),
            'avatar' => $params['avatar'] ?? '',
            'disable' => $params['disable'] ?? '0',
            'root' => $params['root'] ?? '0'
        ]);
    }

    /**
     * @notes 租户管理员详情
     * @param int $userId
     * @return array
     * @author yfdong
     * @date 2024/09/04 22:44
     */
    public static function detail(int $userId): array
    {
        $field = "id,root,name,avatar,account,multipoint_login,disable,create_time";

        $user = TenantAdmin::where(['id' => $userId])->field($field)
            ->findOrEmpty();

        return $user->toArray();
    }


    /**
     * @notes 修改租户管理员
     * @param array $params
     * @return bool
     * @author yfdong
     * @date 2024/09/04 22:44
     */
    public static function edit(array $params)
    {
        try {
            TenantAdmin::update([
                'tenant_id' => $params['tenant_id'],
                'account' => $params['account'],
                'name' => $params['name'],
                'avatar' => $params['avatar'],
                'disable' => $params['disable'],
                'root' => $params['root']
            ]);
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 详情场景
     * @param array $params
     * @return void
     * @author yfdong
     * @date 2024/09/04 22:58
     */
    public static function delete(array $params)
    {
        TenantAdmin::destroy($params['id']);
    }

    /**
     * @notes 根据加密规则创建密码
     * @param $password
     * @return string
     * @author yfdong
     * @date 2024/09/04 22:53
     */
    public static function createPassword($password)
    {
        // 密码盐
        $passwordSalt = Config::get('project.unique_identification');
        return create_password($password, $passwordSalt);
    }

    /**
     * @notes 修改密码
     * @param array $params
     * @param int $userId
     * @return bool
     * @author yfdong
     * @date 2024/09/04 23:19
     */
    public static function changePassword(array $params, int $userId)
    {
        try {
            $tenantAdmin = TenantAdmin::where(['id' => $userId])->findOrEmpty();
            if ($tenantAdmin->isEmpty()) {
                throw new \Exception('租户管理员不存在');
            }

            // 密码盐
            $passwordSalt = Config::get('project.unique_identification');
            if (!empty($tenantAdmin['password'])) {
                if (empty($params['old_password'])) {
                    throw new \Exception('请填写旧密码');
                }
                $oldPassword = create_password($params['old_password'], $passwordSalt);
                if ($oldPassword != $tenantAdmin['password']) {
                    throw new \Exception('原密码不正确');
                }
            }

            // 保存密码
            $password = create_password($params['password'], $passwordSalt);
            $tenantAdmin->password = $password;
            $tenantAdmin->save();
            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }

    /**
     * @notes 重置密码
     * @param $id
     * @return bool
     * @author yfdong
     * @date 2024/09/04 23:24
     */
    public static function resetPassword($id)
    {
        try {
            // 重置密码
            $passwordSalt = Config::get('project.unique_identification');
            $password = create_password('123456', $passwordSalt);

            // 更新
            TenantAdmin::where('id', $id)->update([
                'password' => $password
            ]);

            return true;
        } catch (\Exception $e) {
            self::setError($e->getMessage());
            return false;
        }
    }
}