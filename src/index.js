/**
 * function: 主js文件
 * author: giserliang@hotmail.com
 * date: 2019/3/21
 */
var Cesium = require('cesium/Cesium');
require('./css/index.css');
require('cesium/Widgets/widgets.css');

//viewer初始化
var viewer = new Cesium.Viewer('cesiumContainer', {
    animation: true,//是否创建动画部件，左下角仪表
    baseLayerPicker: true,//是否显示图层选择器
    fullscreenButton: true,//是否显示全屏按钮
    vrButton: true, //是否显示VR按钮
    geocoder: true,//是否显示从地址到经纬度坐标或者从经纬度坐标到地址的转换服务部件，右上角查询按钮
    homeButton: true,//是否显示Home按钮，如果找不到初始位置可点击此按钮返回
    infoBox: true,//是否显示信息框
    sceneModePicker: true,//是否显示3D/2D选择器
    selectionIndicator: false,//是否显示选取指示器组件
    timeline: true,//是否显示时间轴
    navigationHelpButton: true,//是否显示右上角的帮助按钮
    navigationInstructionsInitiallyVisible: true, //是否显示导航操作的说明
    // scene3DOnly: true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
    shouldAnimate: true, //如果为true，则动画部件会提前模拟时间
    // clockViewModel: new Cesium.ClockViewModel(),//用于控制当前时间的时钟对象
    selectedImageryProviderViewModel: undefined,//当前图像图层的显示模型，仅baseLayerPicker设为true有意义
    // imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(),//可供BaseLayerPicker选择的图像图层ProviderViewModel数组
    selectedTerrainProviderViewModel: undefined,//当前地形图层的显示模型，仅baseLayerPicker设为true有意义
    // terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(),//可供BaseLayerPicker选择的地形图层ProviderViewModel数组
    // imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    //     credit: '',
    //     url: '//192.168.0.89:5539/planet-satellite/'
    // }),//图像图层提供者，仅baseLayerPicker设为false有意义
    // terrainProvider: new Cesium.EllipsoidTerrainProvider(),//地形图层提供者，仅baseLayerPicker设为false有意义
    // skyBox: new Cesium.SkyBox({
    //     sources: {
    //         positiveX: 'stars/TychoSkymapII.t3_08192x04096_80_px.jpg',
    //         negativeX: 'stars/TychoSkymapII.t3_08192x04096_80_mx.jpg',
    //         positiveY: 'stars/TychoSkymapII.t3_08192x04096_80_py.jpg',
    //         negativeY: 'stars/TychoSkymapII.t3_08192x04096_80_my.jpg',
    //         positiveZ: 'stars/TychoSkymapII.t3_08192x04096_80_pz.jpg',
    //         negativeZ: 'stars/TychoSkymapII.t3_08192x04096_80_mz.jpg'
    //     }
    // }),//用于渲染星空的SkyBox对象
    fullscreenElement: document.body,//全屏时渲染的HTML元素,
    useDefaultRenderLoop: true,//如果需要控制渲染循环，则设为true
    targetFrameRate: undefined,//使用默认render loop时的帧率
    showRenderLoopErrors: false,//如果设为true，将在一个HTML面板中显示错误信息
    automaticallyTrackDataSourceClocks: true,//自动追踪最近添加的数据源的时钟设置
    contextOptions: undefined,//传递给Scene对象的上下文参数（scene.options）
    // sceneMode: Cesium.SceneMode.SCENE3D,//初始场景模式
    // mapProjection: new Cesium.WebMercatorProjection(),//地图投影
    // globe: new Globe(mapProjection.ellipsoid), //地图场景中用到的椭球
    orderIndependentTranslucency: true, //如果为true且配置支持，使用与顺序无关的半透明度
    // creditContainer: "", //商标版权容器
    // creditViewport: "", //商标版权弹出框
    // dataSources: new Cesium.DataSourceCollection(), //需要进行可视化的数据源的集合
    terrainExaggeration: 1.0, // 用来夸张地形的标量。地形夸张不会修改任何其他基元, 因为它们相对于椭球体的定位
    shadows: false, //确定阴影是否由太阳投射
    // terrainShadows: Cesium.ShadowMode.RECEIVE_ONLY, // 确定地形是否投射或接收来自太阳的阴影
    // mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL, // 确定二维地图是否可以在水平方向上旋转或无限滚动
    maximumRenderTimeChange: 1.0 //如果requestRenderMode为true, 则此值定义请求呈现之前允许的模拟时间的最大变化
});