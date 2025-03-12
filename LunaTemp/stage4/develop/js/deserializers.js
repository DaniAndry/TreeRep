var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointSpring' )
  var i249 = data
  i248.spring = i249[0]
  i248.damper = i249[1]
  i248.targetPosition = i249[2]
  return i248
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointMotor' )
  var i251 = data
  i250.m_TargetVelocity = i251[0]
  i250.m_Force = i251[1]
  i250.m_FreeSpin = i251[2]
  return i250
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointLimits' )
  var i253 = data
  i252.m_Min = i253[0]
  i252.m_Max = i253[1]
  i252.m_Bounciness = i253[2]
  i252.m_BounceMinVelocity = i253[3]
  i252.m_ContactDistance = i253[4]
  i252.minBounce = i253[5]
  i252.maxBounce = i253[6]
  return i252
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointDrive' )
  var i255 = data
  i254.m_PositionSpring = i255[0]
  i254.m_PositionDamper = i255[1]
  i254.m_MaximumForce = i255[2]
  i254.m_UseAcceleration = i255[3]
  return i254
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i257 = data
  i256.m_Spring = i257[0]
  i256.m_Damper = i257[1]
  return i256
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i259 = data
  i258.m_Limit = i259[0]
  i258.m_Bounciness = i259[1]
  i258.m_ContactDistance = i259[2]
  return i258
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i261 = data
  i260.m_ExtremumSlip = i261[0]
  i260.m_ExtremumValue = i261[1]
  i260.m_AsymptoteSlip = i261[2]
  i260.m_AsymptoteValue = i261[3]
  i260.m_Stiffness = i261[4]
  return i260
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i263 = data
  i262.m_LowerAngle = i263[0]
  i262.m_UpperAngle = i263[1]
  return i262
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i265 = data
  i264.m_MotorSpeed = i265[0]
  i264.m_MaximumMotorTorque = i265[1]
  return i264
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i267 = data
  i266.m_DampingRatio = i267[0]
  i266.m_Frequency = i267[1]
  i266.m_Angle = i267[2]
  return i266
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i269 = data
  i268.m_LowerTranslation = i269[0]
  i268.m_UpperTranslation = i269[1]
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i271 = data
  i270.name = i271[0]
  i270.halfPrecision = !!i271[1]
  i270.useUInt32IndexFormat = !!i271[2]
  i270.vertexCount = i271[3]
  i270.aabb = i271[4]
  var i273 = i271[5]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( !!i273[i + 0] );
  }
  i270.streams = i272
  i270.vertices = i271[6]
  var i275 = i271[7]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i275[i + 0]) );
  }
  i270.subMeshes = i274
  var i277 = i271[8]
  var i276 = []
  for(var i = 0; i < i277.length; i += 16) {
    i276.push( new pc.Mat4().setData(i277[i + 0], i277[i + 1], i277[i + 2], i277[i + 3],  i277[i + 4], i277[i + 5], i277[i + 6], i277[i + 7],  i277[i + 8], i277[i + 9], i277[i + 10], i277[i + 11],  i277[i + 12], i277[i + 13], i277[i + 14], i277[i + 15]) );
  }
  i270.bindposes = i276
  var i279 = i271[9]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i279[i + 0]) );
  }
  i270.blendShapes = i278
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i285 = data
  i284.triangles = i285[0]
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i291 = data
  i290.name = i291[0]
  var i293 = i291[1]
  var i292 = []
  for(var i = 0; i < i293.length; i += 1) {
    i292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i293[i + 0]) );
  }
  i290.frames = i292
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i294 = root || new pc.UnityMaterial()
  var i295 = data
  i294.name = i295[0]
  request.r(i295[1], i295[2], 0, i294, 'shader')
  i294.renderQueue = i295[3]
  i294.enableInstancing = !!i295[4]
  var i297 = i295[5]
  var i296 = []
  for(var i = 0; i < i297.length; i += 1) {
    i296.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i297[i + 0]) );
  }
  i294.floatParameters = i296
  var i299 = i295[6]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i299[i + 0]) );
  }
  i294.colorParameters = i298
  var i301 = i295[7]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i301[i + 0]) );
  }
  i294.vectorParameters = i300
  var i303 = i295[8]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i303[i + 0]) );
  }
  i294.textureParameters = i302
  var i305 = i295[9]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i305[i + 0]) );
  }
  i294.materialFlags = i304
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i309 = data
  i308.name = i309[0]
  i308.value = i309[1]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i313 = data
  i312.name = i313[0]
  i312.value = new pc.Color(i313[1], i313[2], i313[3], i313[4])
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i317 = data
  i316.name = i317[0]
  i316.value = new pc.Vec4( i317[1], i317[2], i317[3], i317[4] )
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i321 = data
  i320.name = i321[0]
  request.r(i321[1], i321[2], 0, i320, 'value')
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i325 = data
  i324.name = i325[0]
  i324.enabled = !!i325[1]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i327 = data
  i326.name = i327[0]
  i326.width = i327[1]
  i326.height = i327[2]
  i326.mipmapCount = i327[3]
  i326.anisoLevel = i327[4]
  i326.filterMode = i327[5]
  i326.hdr = !!i327[6]
  i326.format = i327[7]
  i326.wrapMode = i327[8]
  i326.alphaIsTransparency = !!i327[9]
  i326.alphaSource = i327[10]
  i326.graphicsFormat = i327[11]
  i326.sRGBTexture = !!i327[12]
  i326.desiredColorSpace = i327[13]
  i326.wrapU = i327[14]
  i326.wrapV = i327[15]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i329 = data
  i328.name = i329[0]
  i328.atlasId = i329[1]
  i328.mipmapCount = i329[2]
  i328.hdr = !!i329[3]
  i328.size = i329[4]
  i328.anisoLevel = i329[5]
  i328.filterMode = i329[6]
  var i331 = i329[7]
  var i330 = []
  for(var i = 0; i < i331.length; i += 4) {
    i330.push( UnityEngine.Rect.MinMaxRect(i331[i + 0], i331[i + 1], i331[i + 2], i331[i + 3]) );
  }
  i328.rects = i330
  i328.wrapU = i329[8]
  i328.wrapV = i329[9]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i335 = data
  i334.name = i335[0]
  i334.index = i335[1]
  i334.startup = !!i335[2]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i337 = data
  i336.position = new pc.Vec3( i337[0], i337[1], i337[2] )
  i336.scale = new pc.Vec3( i337[3], i337[4], i337[5] )
  i336.rotation = new pc.Quat(i337[6], i337[7], i337[8], i337[9])
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i339 = data
  i338.enabled = !!i339[0]
  i338.aspect = i339[1]
  i338.orthographic = !!i339[2]
  i338.orthographicSize = i339[3]
  i338.backgroundColor = new pc.Color(i339[4], i339[5], i339[6], i339[7])
  i338.nearClipPlane = i339[8]
  i338.farClipPlane = i339[9]
  i338.fieldOfView = i339[10]
  i338.depth = i339[11]
  i338.clearFlags = i339[12]
  i338.cullingMask = i339[13]
  i338.rect = i339[14]
  request.r(i339[15], i339[16], 0, i338, 'targetTexture')
  i338.usePhysicalProperties = !!i339[17]
  i338.focalLength = i339[18]
  i338.sensorSize = new pc.Vec2( i339[19], i339[20] )
  i338.lensShift = new pc.Vec2( i339[21], i339[22] )
  i338.gateFit = i339[23]
  i338.commandBufferCount = i339[24]
  i338.cameraType = i339[25]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i341 = data
  i340.name = i341[0]
  i340.tagId = i341[1]
  i340.enabled = !!i341[2]
  i340.isStatic = !!i341[3]
  i340.layer = i341[4]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i343 = data
  i342.enabled = !!i343[0]
  i342.type = i343[1]
  i342.color = new pc.Color(i343[2], i343[3], i343[4], i343[5])
  i342.cullingMask = i343[6]
  i342.intensity = i343[7]
  i342.range = i343[8]
  i342.spotAngle = i343[9]
  i342.shadows = i343[10]
  i342.shadowNormalBias = i343[11]
  i342.shadowBias = i343[12]
  i342.shadowStrength = i343[13]
  i342.shadowResolution = i343[14]
  i342.lightmapBakeType = i343[15]
  i342.renderMode = i343[16]
  request.r(i343[17], i343[18], 0, i342, 'cookie')
  i342.cookieSize = i343[19]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i345 = data
  request.r(i345[0], i345[1], 0, i344, 'sharedMesh')
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i347 = data
  request.r(i347[0], i347[1], 0, i346, 'additionalVertexStreams')
  i346.enabled = !!i347[2]
  request.r(i347[3], i347[4], 0, i346, 'sharedMaterial')
  var i349 = i347[5]
  var i348 = []
  for(var i = 0; i < i349.length; i += 2) {
  request.r(i349[i + 0], i349[i + 1], 2, i348, '')
  }
  i346.sharedMaterials = i348
  i346.receiveShadows = !!i347[6]
  i346.shadowCastingMode = i347[7]
  i346.sortingLayerID = i347[8]
  i346.sortingOrder = i347[9]
  i346.lightmapIndex = i347[10]
  i346.lightmapSceneIndex = i347[11]
  i346.lightmapScaleOffset = new pc.Vec4( i347[12], i347[13], i347[14], i347[15] )
  i346.lightProbeUsage = i347[16]
  i346.reflectionProbeUsage = i347[17]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i353 = data
  i352.center = new pc.Vec3( i353[0], i353[1], i353[2] )
  i352.size = new pc.Vec3( i353[3], i353[4], i353[5] )
  i352.enabled = !!i353[6]
  i352.isTrigger = !!i353[7]
  request.r(i353[8], i353[9], 0, i352, 'material')
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i355 = data
  i354.mass = i355[0]
  i354.drag = i355[1]
  i354.angularDrag = i355[2]
  i354.useGravity = !!i355[3]
  i354.isKinematic = !!i355[4]
  i354.constraints = i355[5]
  i354.maxAngularVelocity = i355[6]
  i354.collisionDetectionMode = i355[7]
  i354.interpolation = i355[8]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i357 = data
  i356.center = new pc.Vec3( i357[0], i357[1], i357[2] )
  i356.radius = i357[3]
  i356.height = i357[4]
  i356.direction = i357[5]
  i356.enabled = !!i357[6]
  i356.isTrigger = !!i357[7]
  request.r(i357[8], i357[9], 0, i356, 'material')
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i359 = data
  i358.ambientIntensity = i359[0]
  i358.reflectionIntensity = i359[1]
  i358.ambientMode = i359[2]
  i358.ambientLight = new pc.Color(i359[3], i359[4], i359[5], i359[6])
  i358.ambientSkyColor = new pc.Color(i359[7], i359[8], i359[9], i359[10])
  i358.ambientGroundColor = new pc.Color(i359[11], i359[12], i359[13], i359[14])
  i358.ambientEquatorColor = new pc.Color(i359[15], i359[16], i359[17], i359[18])
  i358.fogColor = new pc.Color(i359[19], i359[20], i359[21], i359[22])
  i358.fogEndDistance = i359[23]
  i358.fogStartDistance = i359[24]
  i358.fogDensity = i359[25]
  i358.fog = !!i359[26]
  request.r(i359[27], i359[28], 0, i358, 'skybox')
  i358.fogMode = i359[29]
  var i361 = i359[30]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i361[i + 0]) );
  }
  i358.lightmaps = i360
  i358.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i359[31], i358.lightProbes)
  i358.lightmapsMode = i359[32]
  i358.mixedBakeMode = i359[33]
  i358.environmentLightingMode = i359[34]
  i358.ambientProbe = new pc.SphericalHarmonicsL2(i359[35])
  i358.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i359[36])
  i358.useReferenceAmbientProbe = !!i359[37]
  request.r(i359[38], i359[39], 0, i358, 'customReflection')
  request.r(i359[40], i359[41], 0, i358, 'defaultReflection')
  i358.defaultReflectionMode = i359[42]
  i358.defaultReflectionResolution = i359[43]
  i358.sunLightObjectId = i359[44]
  i358.pixelLightCount = i359[45]
  i358.defaultReflectionHDR = !!i359[46]
  i358.hasLightDataAsset = !!i359[47]
  i358.hasManualGenerate = !!i359[48]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i365 = data
  request.r(i365[0], i365[1], 0, i364, 'lightmapColor')
  request.r(i365[2], i365[3], 0, i364, 'lightmapDirection')
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i366 = root || new UnityEngine.LightProbes()
  var i367 = data
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i375 = data
  var i377 = i375[0]
  var i376 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i377.length; i += 1) {
    i376.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i377[i + 0]));
  }
  i374.ShaderCompilationErrors = i376
  i374.name = i375[1]
  i374.guid = i375[2]
  var i379 = i375[3]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( i379[i + 0] );
  }
  i374.shaderDefinedKeywords = i378
  var i381 = i375[4]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i381[i + 0]) );
  }
  i374.passes = i380
  var i383 = i375[5]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i383[i + 0]) );
  }
  i374.usePasses = i382
  var i385 = i375[6]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i385[i + 0]) );
  }
  i374.defaultParameterValues = i384
  request.r(i375[7], i375[8], 0, i374, 'unityFallbackShader')
  i374.readDepth = !!i375[9]
  i374.isCreatedByShaderGraph = !!i375[10]
  i374.compiled = !!i375[11]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i389 = data
  i388.shaderName = i389[0]
  i388.errorMessage = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i394 = root || new pc.UnityShaderPass()
  var i395 = data
  i394.id = i395[0]
  i394.subShaderIndex = i395[1]
  i394.name = i395[2]
  i394.passType = i395[3]
  i394.grabPassTextureName = i395[4]
  i394.usePass = !!i395[5]
  i394.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[6], i394.zTest)
  i394.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[7], i394.zWrite)
  i394.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[8], i394.culling)
  i394.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i395[9], i394.blending)
  i394.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i395[10], i394.alphaBlending)
  i394.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[11], i394.colorWriteMask)
  i394.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[12], i394.offsetUnits)
  i394.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[13], i394.offsetFactor)
  i394.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[14], i394.stencilRef)
  i394.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[15], i394.stencilReadMask)
  i394.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i395[16], i394.stencilWriteMask)
  i394.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i395[17], i394.stencilOp)
  i394.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i395[18], i394.stencilOpFront)
  i394.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i395[19], i394.stencilOpBack)
  var i397 = i395[20]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i397[i + 0]) );
  }
  i394.tags = i396
  var i399 = i395[21]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( i399[i + 0] );
  }
  i394.passDefinedKeywords = i398
  var i401 = i395[22]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i401[i + 0]) );
  }
  i394.passDefinedKeywordGroups = i400
  var i403 = i395[23]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i403[i + 0]) );
  }
  i394.variants = i402
  var i405 = i395[24]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i405[i + 0]) );
  }
  i394.excludedVariants = i404
  i394.hasDepthReader = !!i395[25]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i407 = data
  i406.val = i407[0]
  i406.name = i407[1]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i409 = data
  i408.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[0], i408.src)
  i408.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[1], i408.dst)
  i408.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[2], i408.op)
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i411 = data
  i410.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[0], i410.pass)
  i410.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[1], i410.fail)
  i410.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[2], i410.zFail)
  i410.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[3], i410.comp)
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i415 = data
  i414.name = i415[0]
  i414.value = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i419 = data
  var i421 = i419[0]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( i421[i + 0] );
  }
  i418.keywords = i420
  i418.hasDiscard = !!i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i425 = data
  i424.passId = i425[0]
  i424.subShaderIndex = i425[1]
  var i427 = i425[2]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( i427[i + 0] );
  }
  i424.keywords = i426
  i424.vertexProgram = i425[3]
  i424.fragmentProgram = i425[4]
  i424.exportedForWebGl2 = !!i425[5]
  i424.readDepth = !!i425[6]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'shader')
  i430.pass = i431[2]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i435 = data
  i434.name = i435[0]
  i434.type = i435[1]
  i434.value = new pc.Vec4( i435[2], i435[3], i435[4], i435[5] )
  i434.textureValue = i435[6]
  i434.shaderPropertyFlag = i435[7]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i437 = data
  var i439 = i437[0]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i439[i + 0]) );
  }
  i436.files = i438
  i436.componentToPrefabIds = i437[1]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i443 = data
  i442.path = i443[0]
  request.r(i443[1], i443[2], 0, i442, 'unityObject')
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i445 = data
  var i447 = i445[0]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i447[i + 0]) );
  }
  i444.scriptsExecutionOrder = i446
  var i449 = i445[1]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i449[i + 0]) );
  }
  i444.sortingLayers = i448
  var i451 = i445[2]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i451[i + 0]) );
  }
  i444.cullingLayers = i450
  i444.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i445[3], i444.timeSettings)
  i444.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i445[4], i444.physicsSettings)
  i444.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i445[5], i444.physics2DSettings)
  i444.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i445[6], i444.qualitySettings)
  i444.enableRealtimeShadows = !!i445[7]
  i444.enableAutoInstancing = !!i445[8]
  i444.enableDynamicBatching = !!i445[9]
  i444.lightmapEncodingQuality = i445[10]
  i444.desiredColorSpace = i445[11]
  var i453 = i445[12]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( i453[i + 0] );
  }
  i444.allTags = i452
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i457 = data
  i456.name = i457[0]
  i456.value = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i461 = data
  i460.id = i461[0]
  i460.name = i461[1]
  i460.value = i461[2]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i465 = data
  i464.id = i465[0]
  i464.name = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i467 = data
  i466.fixedDeltaTime = i467[0]
  i466.maximumDeltaTime = i467[1]
  i466.timeScale = i467[2]
  i466.maximumParticleTimestep = i467[3]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i469 = data
  i468.gravity = new pc.Vec3( i469[0], i469[1], i469[2] )
  i468.defaultSolverIterations = i469[3]
  i468.bounceThreshold = i469[4]
  i468.autoSyncTransforms = !!i469[5]
  i468.autoSimulation = !!i469[6]
  var i471 = i469[7]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i471[i + 0]) );
  }
  i468.collisionMatrix = i470
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i475 = data
  i474.enabled = !!i475[0]
  i474.layerId = i475[1]
  i474.otherLayerId = i475[2]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'material')
  i476.gravity = new pc.Vec2( i477[2], i477[3] )
  i476.positionIterations = i477[4]
  i476.velocityIterations = i477[5]
  i476.velocityThreshold = i477[6]
  i476.maxLinearCorrection = i477[7]
  i476.maxAngularCorrection = i477[8]
  i476.maxTranslationSpeed = i477[9]
  i476.maxRotationSpeed = i477[10]
  i476.baumgarteScale = i477[11]
  i476.baumgarteTOIScale = i477[12]
  i476.timeToSleep = i477[13]
  i476.linearSleepTolerance = i477[14]
  i476.angularSleepTolerance = i477[15]
  i476.defaultContactOffset = i477[16]
  i476.autoSimulation = !!i477[17]
  i476.queriesHitTriggers = !!i477[18]
  i476.queriesStartInColliders = !!i477[19]
  i476.callbacksOnDisable = !!i477[20]
  i476.reuseCollisionCallbacks = !!i477[21]
  i476.autoSyncTransforms = !!i477[22]
  var i479 = i477[23]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i479[i + 0]) );
  }
  i476.collisionMatrix = i478
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i483 = data
  i482.enabled = !!i483[0]
  i482.layerId = i483[1]
  i482.otherLayerId = i483[2]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i485 = data
  var i487 = i485[0]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i487[i + 0]) );
  }
  i484.qualityLevels = i486
  var i489 = i485[1]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( i489[i + 0] );
  }
  i484.names = i488
  i484.shadows = i485[2]
  i484.anisotropicFiltering = i485[3]
  i484.antiAliasing = i485[4]
  i484.lodBias = i485[5]
  i484.shadowCascades = i485[6]
  i484.shadowDistance = i485[7]
  i484.shadowmaskMode = i485[8]
  i484.shadowProjection = i485[9]
  i484.shadowResolution = i485[10]
  i484.softParticles = !!i485[11]
  i484.softVegetation = !!i485[12]
  i484.activeColorSpace = i485[13]
  i484.desiredColorSpace = i485[14]
  i484.masterTextureLimit = i485[15]
  i484.maxQueuedFrames = i485[16]
  i484.particleRaycastBudget = i485[17]
  i484.pixelLightCount = i485[18]
  i484.realtimeReflectionProbes = !!i485[19]
  i484.shadowCascade2Split = i485[20]
  i484.shadowCascade4Split = new pc.Vec3( i485[21], i485[22], i485[23] )
  i484.streamingMipmapsActive = !!i485[24]
  i484.vSyncCount = i485[25]
  i484.asyncUploadBufferSize = i485[26]
  i484.asyncUploadTimeSlice = i485[27]
  i484.billboardsFaceCameraPosition = !!i485[28]
  i484.shadowNearPlaneOffset = i485[29]
  i484.streamingMipmapsMemoryBudget = i485[30]
  i484.maximumLODLevel = i485[31]
  i484.streamingMipmapsAddAllCameras = !!i485[32]
  i484.streamingMipmapsMaxLevelReduction = i485[33]
  i484.streamingMipmapsRenderersPerFrame = i485[34]
  i484.resolutionScalingFixedDPIFactor = i485[35]
  i484.streamingMipmapsMaxFileIORequests = i485[36]
  i484.currentQualityLevel = i485[37]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i495 = data
  i494.weight = i495[0]
  i494.vertices = i495[1]
  i494.normals = i495[2]
  i494.tangents = i495[3]
  return i494
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[3],"24":[11],"25":[11],"26":[11],"27":[11],"28":[11],"29":[11],"30":[11],"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[32],"39":[32],"40":[32],"41":[32],"42":[32],"43":[32],"44":[32],"45":[3],"46":[8],"47":[48],"49":[48],"50":[51],"52":[51],"53":[51],"54":[50],"55":[56,51],"57":[51],"58":[50],"59":[51],"60":[51],"61":[51],"62":[51],"63":[51],"64":[51],"65":[51],"66":[51],"67":[51],"68":[56,51],"69":[51],"70":[51],"71":[51],"72":[51],"73":[56,51],"74":[51],"75":[76],"77":[76],"78":[76],"79":[76],"80":[3],"81":[3],"82":[51],"83":[8,51],"84":[51,56],"85":[51],"86":[56,51],"87":[8],"88":[56,51],"89":[51],"90":[91],"92":[91],"93":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "b0c19cff2bc3b4b4086704796cb119ee";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Lumber";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "1a44b34e-4d6a-433d-9ef7-bc9803b6c1a8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

