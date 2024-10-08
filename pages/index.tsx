"use client";
import { version, ver_min } from "../src/_config";


function HomePage() {
  return (
    <>
      <div className="content">
        <div className="content-fluid">
        <h1>BiliRoaming Service (TS)</h1>
        <h2>信息展示</h2>
        当前后端版本: {version}(请以 [] 中 Git Hash 为准)
        <br />
        ⚠️当前推荐的漫游版本: 1.7.0 <br />
        哔哩漫游最低版本限制: {ver_min} 
        <h2>功能区</h2>
        <a target="_blank" href="/api/server_info">
          服务器网络信息
        </a>
        (当前位于:{process.env.VERCEL_REGION || "请点击左侧实时查询"})
        <br />
        <a
          target="_blank"
          href="https://github.com/yujincheng08/BiliRoaming/wiki/"
        >
          使用教程
        </a>
        <br />
        捐赠: <a target="_blank" href="https://afdian.com/a/JIXIEJIDIGUAN">爱发电</a>
        <br />
        <h2>小工具</h2>
        填写以下内容时，请使用你自己的信息，且将<code>&#123;&#125;</code>
        中的内容(包括花括号)替换为要求的内容。
        <br />
        <h3>Cookies转Access_key</h3>
        (详情自行搜索)在<code>bilibili.com</code>打开 console(控制台) ,输入{" "}
        <code>document.cookie</code> 即可获取当前的Cookies。
        <br />
        访问{" "}
        <code>/api/tools/cookies2accesskey?cookies=&#123;cookies&#125;</code>
        即可生成<code>access_key</code>。
        <br />
        若您需解决WEB(网页)端无法授权大会员的问题，请在 console 输入{" "}
        <code>localStorage.access_key = '&#123;access_key&#125;'</code>
        <br />
        <h3>Access_key获取账户信息</h3>
        访问 <code>/api/tools/my_info?access_key=&#123;access_key&#125;</code>
        即可
        <br />
        <h3>使用BBDown下载</h3>
        获取<code>accesskey</code>(手机客户端),手动在BBDown的登录数据
        <code>BBDown.data</code>文件后加上
        <code>;access_key=&#123;accesskey&#125;</code>,此后即可正常使用该服务。
        <br />
        <h3>支持黑/白名单查询</h3>
        访问 <code>/api/users/&#123;uid&#125;</code> 即可查询
      </div>
        </div>
    </>
  );
}

export default HomePage;
