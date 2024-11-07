import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* 使用 Helmet 设置分享所需的 meta 标签 */}
      <Helmet>
        <title>React 分享 Demo</title>
        <meta name="description" content="这是一个用于测试分享卡片的React项目" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="React 分享 Demo" />
        <meta property="og:description" content="这是一个用于测试分享卡片的React项目" />
        <meta
          property="og:image"
          content="https://via.placeholder.com/1200x630.png?text=Share+Card+Image"
        />
        <meta property="og:url" content="http://localhost:3000" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="React 分享 Demo" />
        <meta name="twitter:description" content="这是一个用于测试分享卡片的React项目" />
        <meta
          name="twitter:image"
          content="https://via.placeholder.com/1200x630.png?text=Share+Card+Image"
        />

        {/* 微信额外支持的标签 */}
        <meta itemProp="name" content="你的分享标题" />
        <meta itemProp="description" content="你的分享描述内容" />
        <meta
          itemProp="image"
          content="https://ameng2020.github.io/react-share-demo/public/images/xiaoxin.jpg"
        />
      </Helmet>

      <header className="App-header">
        <h1>React 分享卡片 Demo</h1>
        <p>打开社交平台（如微信、Twitter等）并尝试分享此页面查看效果。</p>
      </header>
    </div>
  );
};

export default App;
