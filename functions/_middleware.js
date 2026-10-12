// 统一规范主机名与协议：www → 非 www、http → https（301）
// 说明：Cloudflare Pages 的 _redirects 只支持路径级规则，域名级重定向须经 Functions 中间件处理。
// 若部署形态改为 Workers Static Assets 且无 Functions 支持，请在 Cloudflare 控制台用 Redirect Rules 配置同等规则。
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'www.buddhaparkvientiane.com' || url.protocol === 'http:') {
    url.protocol = 'https:';
    url.hostname = 'buddhaparkvientiane.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
