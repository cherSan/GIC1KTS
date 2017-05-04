import * as React from 'react'

import Input from 'material-ui/svg-icons/action/input'
import Build from 'material-ui/svg-icons/action/build'
import GroupAdd from 'material-ui/svg-icons/social/group-add'
import Home from 'material-ui/svg-icons/action/home'
import Exit from 'material-ui/svg-icons/action/exit-to-app'
/**
 * Created by achernushevich on 03.05.17.
 */
export module menu {
    export const NonAuthUser = () => {
        return [
            {
                type: 'title',
                key: 'titleMyAccount',
                primaryText: 'My Account'
            },
            {
                type: 'link',
                key: 'linkLogin',
                primaryText: 'Login',
                leftIcon: <Input />,
                to: '/public/sign-in'
            },
            {
                type: 'link',
                key: 'linkSignUp',
                primaryText: 'SignUp',
                leftIcon: <GroupAdd />,
                to: '/public/sign-up'
            },
            {
                type: 'separator',
                key: 'separator1',
            },
            {
                type: 'title',
                key: 'titleTutorial',
                primaryText: 'Tutorial'
            },
            {
                type: 'link',
                key: 'linkShowTutorial',
                primaryText: 'ShowTutorial',
                leftIcon: <Build />,
                to: '/'
            },
        ];
    }
    export const AuthUser = (exitAction: any) => {
        return [
            {
                type: 'title',
                key: 'titleMyKnowledge',
                primaryText: 'My Knowledge'
            },
            {
                type: 'link',
                key: 'linkHome',
                primaryText: 'Home',
                leftIcon: <Home />,
                to: '/dashboard'
            },
            {
                type: 'separator',
                key: 'separator1',
            },
            {
                type: 'title',
                key: 'titleMyAccount',
                primaryText: 'My Account'
            },
            {
                type: 'action',
                key: 'actionExit',
                primaryText: 'LogOut',
                leftIcon: <Exit />,
                action: exitAction,
                to: '/'
            },
        ]
    }
}