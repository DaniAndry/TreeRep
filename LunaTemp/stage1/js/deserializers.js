var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointSpring' )
  var i269 = data
  i268.spring = i269[0]
  i268.damper = i269[1]
  i268.targetPosition = i269[2]
  return i268
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointMotor' )
  var i271 = data
  i270.m_TargetVelocity = i271[0]
  i270.m_Force = i271[1]
  i270.m_FreeSpin = i271[2]
  return i270
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointLimits' )
  var i273 = data
  i272.m_Min = i273[0]
  i272.m_Max = i273[1]
  i272.m_Bounciness = i273[2]
  i272.m_BounceMinVelocity = i273[3]
  i272.m_ContactDistance = i273[4]
  i272.minBounce = i273[5]
  i272.maxBounce = i273[6]
  return i272
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointDrive' )
  var i275 = data
  i274.m_PositionSpring = i275[0]
  i274.m_PositionDamper = i275[1]
  i274.m_MaximumForce = i275[2]
  i274.m_UseAcceleration = i275[3]
  return i274
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i277 = data
  i276.m_Spring = i277[0]
  i276.m_Damper = i277[1]
  return i276
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i279 = data
  i278.m_Limit = i279[0]
  i278.m_Bounciness = i279[1]
  i278.m_ContactDistance = i279[2]
  return i278
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i281 = data
  i280.m_ExtremumSlip = i281[0]
  i280.m_ExtremumValue = i281[1]
  i280.m_AsymptoteSlip = i281[2]
  i280.m_AsymptoteValue = i281[3]
  i280.m_Stiffness = i281[4]
  return i280
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i283 = data
  i282.m_LowerAngle = i283[0]
  i282.m_UpperAngle = i283[1]
  return i282
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i285 = data
  i284.m_MotorSpeed = i285[0]
  i284.m_MaximumMotorTorque = i285[1]
  return i284
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i287 = data
  i286.m_DampingRatio = i287[0]
  i286.m_Frequency = i287[1]
  i286.m_Angle = i287[2]
  return i286
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i289 = data
  i288.m_LowerTranslation = i289[0]
  i288.m_UpperTranslation = i289[1]
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i291 = data
  i290.name = i291[0]
  i290.halfPrecision = !!i291[1]
  i290.useUInt32IndexFormat = !!i291[2]
  i290.vertexCount = i291[3]
  i290.aabb = i291[4]
  var i293 = i291[5]
  var i292 = []
  for(var i = 0; i < i293.length; i += 1) {
    i292.push( !!i293[i + 0] );
  }
  i290.streams = i292
  i290.vertices = i291[6]
  var i295 = i291[7]
  var i294 = []
  for(var i = 0; i < i295.length; i += 1) {
    i294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i295[i + 0]) );
  }
  i290.subMeshes = i294
  var i297 = i291[8]
  var i296 = []
  for(var i = 0; i < i297.length; i += 16) {
    i296.push( new pc.Mat4().setData(i297[i + 0], i297[i + 1], i297[i + 2], i297[i + 3],  i297[i + 4], i297[i + 5], i297[i + 6], i297[i + 7],  i297[i + 8], i297[i + 9], i297[i + 10], i297[i + 11],  i297[i + 12], i297[i + 13], i297[i + 14], i297[i + 15]) );
  }
  i290.bindposes = i296
  var i299 = i291[9]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i299[i + 0]) );
  }
  i290.blendShapes = i298
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i305 = data
  i304.triangles = i305[0]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i311 = data
  i310.name = i311[0]
  var i313 = i311[1]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i313[i + 0]) );
  }
  i310.frames = i312
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i314 = root || new pc.UnityMaterial()
  var i315 = data
  i314.name = i315[0]
  request.r(i315[1], i315[2], 0, i314, 'shader')
  i314.renderQueue = i315[3]
  i314.enableInstancing = !!i315[4]
  var i317 = i315[5]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i317[i + 0]) );
  }
  i314.floatParameters = i316
  var i319 = i315[6]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i319[i + 0]) );
  }
  i314.colorParameters = i318
  var i321 = i315[7]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i321[i + 0]) );
  }
  i314.vectorParameters = i320
  var i323 = i315[8]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i323[i + 0]) );
  }
  i314.textureParameters = i322
  var i325 = i315[9]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i325[i + 0]) );
  }
  i314.materialFlags = i324
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i329 = data
  i328.name = i329[0]
  i328.value = i329[1]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i333 = data
  i332.name = i333[0]
  i332.value = new pc.Color(i333[1], i333[2], i333[3], i333[4])
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i337 = data
  i336.name = i337[0]
  i336.value = new pc.Vec4( i337[1], i337[2], i337[3], i337[4] )
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i341 = data
  i340.name = i341[0]
  request.r(i341[1], i341[2], 0, i340, 'value')
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i345 = data
  i344.name = i345[0]
  i344.enabled = !!i345[1]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i347 = data
  i346.name = i347[0]
  i346.width = i347[1]
  i346.height = i347[2]
  i346.mipmapCount = i347[3]
  i346.anisoLevel = i347[4]
  i346.filterMode = i347[5]
  i346.hdr = !!i347[6]
  i346.format = i347[7]
  i346.wrapMode = i347[8]
  i346.alphaIsTransparency = !!i347[9]
  i346.alphaSource = i347[10]
  i346.graphicsFormat = i347[11]
  i346.sRGBTexture = !!i347[12]
  i346.desiredColorSpace = i347[13]
  i346.wrapU = i347[14]
  i346.wrapV = i347[15]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i349 = data
  i348.position = new pc.Vec3( i349[0], i349[1], i349[2] )
  i348.scale = new pc.Vec3( i349[3], i349[4], i349[5] )
  i348.rotation = new pc.Quat(i349[6], i349[7], i349[8], i349[9])
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i351 = data
  i350.enabled = !!i351[0]
  request.r(i351[1], i351[2], 0, i350, 'sharedMaterial')
  var i353 = i351[3]
  var i352 = []
  for(var i = 0; i < i353.length; i += 2) {
  request.r(i353[i + 0], i353[i + 1], 2, i352, '')
  }
  i350.sharedMaterials = i352
  i350.receiveShadows = !!i351[4]
  i350.shadowCastingMode = i351[5]
  i350.sortingLayerID = i351[6]
  i350.sortingOrder = i351[7]
  i350.lightmapIndex = i351[8]
  i350.lightmapSceneIndex = i351[9]
  i350.lightmapScaleOffset = new pc.Vec4( i351[10], i351[11], i351[12], i351[13] )
  i350.lightProbeUsage = i351[14]
  i350.reflectionProbeUsage = i351[15]
  request.r(i351[16], i351[17], 0, i350, 'sharedMesh')
  var i355 = i351[18]
  var i354 = []
  for(var i = 0; i < i355.length; i += 2) {
  request.r(i355[i + 0], i355[i + 1], 2, i354, '')
  }
  i350.bones = i354
  i350.updateWhenOffscreen = !!i351[19]
  i350.localBounds = i351[20]
  request.r(i351[21], i351[22], 0, i350, 'rootBone')
  var i357 = i351[23]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i357[i + 0]) );
  }
  i350.blendShapesWeights = i356
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i365 = data
  i364.weight = i365[0]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i367 = data
  i366.name = i367[0]
  i366.tagId = i367[1]
  i366.enabled = !!i367[2]
  i366.isStatic = !!i367[3]
  i366.layer = i367[4]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i369 = data
  request.r(i369[0], i369[1], 0, i368, 'sharedMesh')
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i371 = data
  request.r(i371[0], i371[1], 0, i370, 'additionalVertexStreams')
  i370.enabled = !!i371[2]
  request.r(i371[3], i371[4], 0, i370, 'sharedMaterial')
  var i373 = i371[5]
  var i372 = []
  for(var i = 0; i < i373.length; i += 2) {
  request.r(i373[i + 0], i373[i + 1], 2, i372, '')
  }
  i370.sharedMaterials = i372
  i370.receiveShadows = !!i371[6]
  i370.shadowCastingMode = i371[7]
  i370.sortingLayerID = i371[8]
  i370.sortingOrder = i371[9]
  i370.lightmapIndex = i371[10]
  i370.lightmapSceneIndex = i371[11]
  i370.lightmapScaleOffset = new pc.Vec4( i371[12], i371[13], i371[14], i371[15] )
  i370.lightProbeUsage = i371[16]
  i370.reflectionProbeUsage = i371[17]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i375 = data
  i374.name = i375[0]
  i374.atlasId = i375[1]
  i374.mipmapCount = i375[2]
  i374.hdr = !!i375[3]
  i374.size = i375[4]
  i374.anisoLevel = i375[5]
  i374.filterMode = i375[6]
  var i377 = i375[7]
  var i376 = []
  for(var i = 0; i < i377.length; i += 4) {
    i376.push( UnityEngine.Rect.MinMaxRect(i377[i + 0], i377[i + 1], i377[i + 2], i377[i + 3]) );
  }
  i374.rects = i376
  i374.wrapU = i375[8]
  i374.wrapV = i375[9]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i381 = data
  i380.name = i381[0]
  i380.index = i381[1]
  i380.startup = !!i381[2]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i383 = data
  i382.enabled = !!i383[0]
  i382.aspect = i383[1]
  i382.orthographic = !!i383[2]
  i382.orthographicSize = i383[3]
  i382.backgroundColor = new pc.Color(i383[4], i383[5], i383[6], i383[7])
  i382.nearClipPlane = i383[8]
  i382.farClipPlane = i383[9]
  i382.fieldOfView = i383[10]
  i382.depth = i383[11]
  i382.clearFlags = i383[12]
  i382.cullingMask = i383[13]
  i382.rect = i383[14]
  request.r(i383[15], i383[16], 0, i382, 'targetTexture')
  i382.usePhysicalProperties = !!i383[17]
  i382.focalLength = i383[18]
  i382.sensorSize = new pc.Vec2( i383[19], i383[20] )
  i382.lensShift = new pc.Vec2( i383[21], i383[22] )
  i382.gateFit = i383[23]
  i382.commandBufferCount = i383[24]
  i382.cameraType = i383[25]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i385 = data
  i384.enabled = !!i385[0]
  i384.type = i385[1]
  i384.color = new pc.Color(i385[2], i385[3], i385[4], i385[5])
  i384.cullingMask = i385[6]
  i384.intensity = i385[7]
  i384.range = i385[8]
  i384.spotAngle = i385[9]
  i384.shadows = i385[10]
  i384.shadowNormalBias = i385[11]
  i384.shadowBias = i385[12]
  i384.shadowStrength = i385[13]
  i384.shadowResolution = i385[14]
  i384.lightmapBakeType = i385[15]
  i384.renderMode = i385[16]
  request.r(i385[17], i385[18], 0, i384, 'cookie')
  i384.cookieSize = i385[19]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i387 = data
  i386.center = new pc.Vec3( i387[0], i387[1], i387[2] )
  i386.size = new pc.Vec3( i387[3], i387[4], i387[5] )
  i386.enabled = !!i387[6]
  i386.isTrigger = !!i387[7]
  request.r(i387[8], i387[9], 0, i386, 'material')
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i389 = data
  i388.center = new pc.Vec3( i389[0], i389[1], i389[2] )
  i388.radius = i389[3]
  i388.height = i389[4]
  i388.direction = i389[5]
  i388.enabled = !!i389[6]
  i388.isTrigger = !!i389[7]
  request.r(i389[8], i389[9], 0, i388, 'material')
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i391 = data
  i390.mass = i391[0]
  i390.drag = i391[1]
  i390.angularDrag = i391[2]
  i390.useGravity = !!i391[3]
  i390.isKinematic = !!i391[4]
  i390.constraints = i391[5]
  i390.maxAngularVelocity = i391[6]
  i390.collisionDetectionMode = i391[7]
  i390.interpolation = i391[8]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i393 = data
  i392.ambientIntensity = i393[0]
  i392.reflectionIntensity = i393[1]
  i392.ambientMode = i393[2]
  i392.ambientLight = new pc.Color(i393[3], i393[4], i393[5], i393[6])
  i392.ambientSkyColor = new pc.Color(i393[7], i393[8], i393[9], i393[10])
  i392.ambientGroundColor = new pc.Color(i393[11], i393[12], i393[13], i393[14])
  i392.ambientEquatorColor = new pc.Color(i393[15], i393[16], i393[17], i393[18])
  i392.fogColor = new pc.Color(i393[19], i393[20], i393[21], i393[22])
  i392.fogEndDistance = i393[23]
  i392.fogStartDistance = i393[24]
  i392.fogDensity = i393[25]
  i392.fog = !!i393[26]
  request.r(i393[27], i393[28], 0, i392, 'skybox')
  i392.fogMode = i393[29]
  var i395 = i393[30]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i395[i + 0]) );
  }
  i392.lightmaps = i394
  i392.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i393[31], i392.lightProbes)
  i392.lightmapsMode = i393[32]
  i392.mixedBakeMode = i393[33]
  i392.environmentLightingMode = i393[34]
  i392.ambientProbe = new pc.SphericalHarmonicsL2(i393[35])
  i392.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i393[36])
  i392.useReferenceAmbientProbe = !!i393[37]
  request.r(i393[38], i393[39], 0, i392, 'customReflection')
  request.r(i393[40], i393[41], 0, i392, 'defaultReflection')
  i392.defaultReflectionMode = i393[42]
  i392.defaultReflectionResolution = i393[43]
  i392.sunLightObjectId = i393[44]
  i392.pixelLightCount = i393[45]
  i392.defaultReflectionHDR = !!i393[46]
  i392.hasLightDataAsset = !!i393[47]
  i392.hasManualGenerate = !!i393[48]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i399 = data
  request.r(i399[0], i399[1], 0, i398, 'lightmapColor')
  request.r(i399[2], i399[3], 0, i398, 'lightmapDirection')
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i400 = root || new UnityEngine.LightProbes()
  var i401 = data
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i409 = data
  var i411 = i409[0]
  var i410 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i411.length; i += 1) {
    i410.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i411[i + 0]));
  }
  i408.ShaderCompilationErrors = i410
  i408.name = i409[1]
  i408.guid = i409[2]
  var i413 = i409[3]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i408.shaderDefinedKeywords = i412
  var i415 = i409[4]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i415[i + 0]) );
  }
  i408.passes = i414
  var i417 = i409[5]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i417[i + 0]) );
  }
  i408.usePasses = i416
  var i419 = i409[6]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i419[i + 0]) );
  }
  i408.defaultParameterValues = i418
  request.r(i409[7], i409[8], 0, i408, 'unityFallbackShader')
  i408.readDepth = !!i409[9]
  i408.isCreatedByShaderGraph = !!i409[10]
  i408.compiled = !!i409[11]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i423 = data
  i422.shaderName = i423[0]
  i422.errorMessage = i423[1]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i428 = root || new pc.UnityShaderPass()
  var i429 = data
  i428.id = i429[0]
  i428.subShaderIndex = i429[1]
  i428.name = i429[2]
  i428.passType = i429[3]
  i428.grabPassTextureName = i429[4]
  i428.usePass = !!i429[5]
  i428.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[6], i428.zTest)
  i428.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[7], i428.zWrite)
  i428.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[8], i428.culling)
  i428.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i429[9], i428.blending)
  i428.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i429[10], i428.alphaBlending)
  i428.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[11], i428.colorWriteMask)
  i428.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[12], i428.offsetUnits)
  i428.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[13], i428.offsetFactor)
  i428.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[14], i428.stencilRef)
  i428.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[15], i428.stencilReadMask)
  i428.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i429[16], i428.stencilWriteMask)
  i428.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i429[17], i428.stencilOp)
  i428.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i429[18], i428.stencilOpFront)
  i428.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i429[19], i428.stencilOpBack)
  var i431 = i429[20]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i431[i + 0]) );
  }
  i428.tags = i430
  var i433 = i429[21]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i428.passDefinedKeywords = i432
  var i435 = i429[22]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i435[i + 0]) );
  }
  i428.passDefinedKeywordGroups = i434
  var i437 = i429[23]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i437[i + 0]) );
  }
  i428.variants = i436
  var i439 = i429[24]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i439[i + 0]) );
  }
  i428.excludedVariants = i438
  i428.hasDepthReader = !!i429[25]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i441 = data
  i440.val = i441[0]
  i440.name = i441[1]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i443 = data
  i442.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i443[0], i442.src)
  i442.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i443[1], i442.dst)
  i442.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i443[2], i442.op)
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i445 = data
  i444.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[0], i444.pass)
  i444.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[1], i444.fail)
  i444.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[2], i444.zFail)
  i444.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[3], i444.comp)
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i449 = data
  i448.name = i449[0]
  i448.value = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i453 = data
  var i455 = i453[0]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( i455[i + 0] );
  }
  i452.keywords = i454
  i452.hasDiscard = !!i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i459 = data
  i458.passId = i459[0]
  i458.subShaderIndex = i459[1]
  var i461 = i459[2]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( i461[i + 0] );
  }
  i458.keywords = i460
  i458.vertexProgram = i459[3]
  i458.fragmentProgram = i459[4]
  i458.exportedForWebGl2 = !!i459[5]
  i458.readDepth = !!i459[6]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i465 = data
  request.r(i465[0], i465[1], 0, i464, 'shader')
  i464.pass = i465[2]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i469 = data
  i468.name = i469[0]
  i468.type = i469[1]
  i468.value = new pc.Vec4( i469[2], i469[3], i469[4], i469[5] )
  i468.textureValue = i469[6]
  i468.shaderPropertyFlag = i469[7]
  return i468
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i470 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i471 = data
  i470.useSafeMode = !!i471[0]
  i470.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i471[1], i470.safeModeOptions)
  i470.timeScale = i471[2]
  i470.unscaledTimeScale = i471[3]
  i470.useSmoothDeltaTime = !!i471[4]
  i470.maxSmoothUnscaledTime = i471[5]
  i470.rewindCallbackMode = i471[6]
  i470.showUnityEditorReport = !!i471[7]
  i470.logBehaviour = i471[8]
  i470.drawGizmos = !!i471[9]
  i470.defaultRecyclable = !!i471[10]
  i470.defaultAutoPlay = i471[11]
  i470.defaultUpdateType = i471[12]
  i470.defaultTimeScaleIndependent = !!i471[13]
  i470.defaultEaseType = i471[14]
  i470.defaultEaseOvershootOrAmplitude = i471[15]
  i470.defaultEasePeriod = i471[16]
  i470.defaultAutoKill = !!i471[17]
  i470.defaultLoopType = i471[18]
  i470.debugMode = !!i471[19]
  i470.debugStoreTargetId = !!i471[20]
  i470.showPreviewPanel = !!i471[21]
  i470.storeSettingsLocation = i471[22]
  i470.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i471[23], i470.modules)
  i470.createASMDEF = !!i471[24]
  i470.showPlayingTweens = !!i471[25]
  i470.showPausedTweens = !!i471[26]
  return i470
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i472 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i473 = data
  i472.logBehaviour = i473[0]
  i472.nestedTweenFailureBehaviour = i473[1]
  return i472
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i474 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i475 = data
  i474.showPanel = !!i475[0]
  i474.audioEnabled = !!i475[1]
  i474.physicsEnabled = !!i475[2]
  i474.physics2DEnabled = !!i475[3]
  i474.spriteEnabled = !!i475[4]
  i474.uiEnabled = !!i475[5]
  i474.textMeshProEnabled = !!i475[6]
  i474.tk2DEnabled = !!i475[7]
  i474.deAudioEnabled = !!i475[8]
  i474.deUnityExtendedEnabled = !!i475[9]
  i474.epoOutlineEnabled = !!i475[10]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i477 = data
  var i479 = i477[0]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i479[i + 0]) );
  }
  i476.files = i478
  i476.componentToPrefabIds = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i483 = data
  i482.path = i483[0]
  request.r(i483[1], i483[2], 0, i482, 'unityObject')
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i485 = data
  var i487 = i485[0]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i487[i + 0]) );
  }
  i484.scriptsExecutionOrder = i486
  var i489 = i485[1]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i489[i + 0]) );
  }
  i484.sortingLayers = i488
  var i491 = i485[2]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i491[i + 0]) );
  }
  i484.cullingLayers = i490
  i484.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i485[3], i484.timeSettings)
  i484.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i485[4], i484.physicsSettings)
  i484.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i485[5], i484.physics2DSettings)
  i484.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i485[6], i484.qualitySettings)
  i484.enableRealtimeShadows = !!i485[7]
  i484.enableAutoInstancing = !!i485[8]
  i484.enableDynamicBatching = !!i485[9]
  i484.lightmapEncodingQuality = i485[10]
  i484.desiredColorSpace = i485[11]
  var i493 = i485[12]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( i493[i + 0] );
  }
  i484.allTags = i492
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i497 = data
  i496.name = i497[0]
  i496.value = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i501 = data
  i500.id = i501[0]
  i500.name = i501[1]
  i500.value = i501[2]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i505 = data
  i504.id = i505[0]
  i504.name = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i507 = data
  i506.fixedDeltaTime = i507[0]
  i506.maximumDeltaTime = i507[1]
  i506.timeScale = i507[2]
  i506.maximumParticleTimestep = i507[3]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i509 = data
  i508.gravity = new pc.Vec3( i509[0], i509[1], i509[2] )
  i508.defaultSolverIterations = i509[3]
  i508.bounceThreshold = i509[4]
  i508.autoSyncTransforms = !!i509[5]
  i508.autoSimulation = !!i509[6]
  var i511 = i509[7]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i511[i + 0]) );
  }
  i508.collisionMatrix = i510
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i515 = data
  i514.enabled = !!i515[0]
  i514.layerId = i515[1]
  i514.otherLayerId = i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'material')
  i516.gravity = new pc.Vec2( i517[2], i517[3] )
  i516.positionIterations = i517[4]
  i516.velocityIterations = i517[5]
  i516.velocityThreshold = i517[6]
  i516.maxLinearCorrection = i517[7]
  i516.maxAngularCorrection = i517[8]
  i516.maxTranslationSpeed = i517[9]
  i516.maxRotationSpeed = i517[10]
  i516.baumgarteScale = i517[11]
  i516.baumgarteTOIScale = i517[12]
  i516.timeToSleep = i517[13]
  i516.linearSleepTolerance = i517[14]
  i516.angularSleepTolerance = i517[15]
  i516.defaultContactOffset = i517[16]
  i516.autoSimulation = !!i517[17]
  i516.queriesHitTriggers = !!i517[18]
  i516.queriesStartInColliders = !!i517[19]
  i516.callbacksOnDisable = !!i517[20]
  i516.reuseCollisionCallbacks = !!i517[21]
  i516.autoSyncTransforms = !!i517[22]
  var i519 = i517[23]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i519[i + 0]) );
  }
  i516.collisionMatrix = i518
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i523 = data
  i522.enabled = !!i523[0]
  i522.layerId = i523[1]
  i522.otherLayerId = i523[2]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i525 = data
  var i527 = i525[0]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i527[i + 0]) );
  }
  i524.qualityLevels = i526
  var i529 = i525[1]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( i529[i + 0] );
  }
  i524.names = i528
  i524.shadows = i525[2]
  i524.anisotropicFiltering = i525[3]
  i524.antiAliasing = i525[4]
  i524.lodBias = i525[5]
  i524.shadowCascades = i525[6]
  i524.shadowDistance = i525[7]
  i524.shadowmaskMode = i525[8]
  i524.shadowProjection = i525[9]
  i524.shadowResolution = i525[10]
  i524.softParticles = !!i525[11]
  i524.softVegetation = !!i525[12]
  i524.activeColorSpace = i525[13]
  i524.desiredColorSpace = i525[14]
  i524.masterTextureLimit = i525[15]
  i524.maxQueuedFrames = i525[16]
  i524.particleRaycastBudget = i525[17]
  i524.pixelLightCount = i525[18]
  i524.realtimeReflectionProbes = !!i525[19]
  i524.shadowCascade2Split = i525[20]
  i524.shadowCascade4Split = new pc.Vec3( i525[21], i525[22], i525[23] )
  i524.streamingMipmapsActive = !!i525[24]
  i524.vSyncCount = i525[25]
  i524.asyncUploadBufferSize = i525[26]
  i524.asyncUploadTimeSlice = i525[27]
  i524.billboardsFaceCameraPosition = !!i525[28]
  i524.shadowNearPlaneOffset = i525[29]
  i524.streamingMipmapsMemoryBudget = i525[30]
  i524.maximumLODLevel = i525[31]
  i524.streamingMipmapsAddAllCameras = !!i525[32]
  i524.streamingMipmapsMaxLevelReduction = i525[33]
  i524.streamingMipmapsRenderersPerFrame = i525[34]
  i524.resolutionScalingFixedDPIFactor = i525[35]
  i524.streamingMipmapsMaxFileIORequests = i525[36]
  i524.currentQualityLevel = i525[37]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i535 = data
  i534.weight = i535[0]
  i534.vertices = i535[1]
  i534.normals = i535[2]
  i534.tangents = i535[3]
  return i534
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[3],"25":[8],"26":[13],"27":[13],"28":[13],"29":[13],"30":[13],"31":[13],"32":[13],"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[34],"41":[34],"42":[34],"43":[34],"44":[34],"45":[34],"46":[34],"47":[8],"48":[7],"49":[50],"51":[50],"52":[53],"54":[53],"55":[53],"56":[52],"57":[58,53],"59":[53],"60":[52],"61":[53],"62":[53],"63":[53],"64":[53],"65":[53],"66":[53],"67":[53],"68":[53],"69":[53],"70":[58,53],"71":[53],"72":[53],"73":[53],"74":[53],"75":[58,53],"76":[53],"77":[78],"79":[78],"80":[78],"81":[78],"82":[8],"83":[8],"84":[53],"85":[7,53],"86":[53,58],"87":[53],"88":[58,53],"89":[7],"90":[58,53],"91":[53],"92":[93],"94":[93],"95":[93]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.BoxCollider","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.58f1";

Deserializers.productName = "Lumber";

Deserializers.lunaInitializationTime = "03/12/2025 08:03:06";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1904";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3454";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs, mecanim-wasm";

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

Deserializers.buildID = "4def9cbf-a4ea-4b05-a5e2-c775f2977549";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

