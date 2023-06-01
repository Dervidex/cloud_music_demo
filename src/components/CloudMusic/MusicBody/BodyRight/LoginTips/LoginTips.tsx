import React from 'react';
import Style from './LoginTips.module.css'

const LoginTips = () => {
  return (
    <div className={Style.loginTips}>
      <p>
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href={'/#'} className={Style.loginBtn}>用户登录</a>
    </div>
  );
};

export default LoginTips;