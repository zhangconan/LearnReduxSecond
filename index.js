var koa = require('koa');
var router = require('koa-router')();
var handlebars = require("koa-handlebars");
var app = koa();
var port = 3000;

// ʹ��handlerbars��Ϊģ���ļ�
app.use(handlebars({
  defaultLayout: "index"
}));

// ����·��
router.get("/", function *(next) {
  yield this.render('index',{
    title:'Reduxʾ��-��ͨ��',
    name:'��ͨ��ʾ��'
  });
});

// ����Ӧ��·��
router.get('app','/app/:name',function*(next){
  this.appName = this.params.name || 'index'; // Ӧ������

  yield this.render('app/'+this.appName,{
    title:'Ӧ��',
    filename:this.appName
  });

})

// ����demo·��
router.get('demo','/:name/:type', function *(next) {
  this.demoName = this.params.name || 'demo'; // ��ȡdemo����
  this.demoType = this.params.type; // ��ȡ�ļ����ͣ�'demo' ���� 'redux'
  yield this.render(this.demoName + '/index',{
    title:'ʾ��',
    filename:this.demoType
  });
});

// ����·��
app
  .use(router.routes())
  .use(router.allowedMethods());

// �����˿�
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==>   �����˿� %s. ������������ http://localhost:%s/.", port, port)
  }
})