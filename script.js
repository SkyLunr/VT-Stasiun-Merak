(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7790859A_6E05_DA01_41C5_8469BCD24BB2",
 "idleSequence": "this.sequence_7790E59A_6E05_DA01_41D4_E29BEFC8785C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7790E59A_6E05_DA01_41D4_E29BEFC8785C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_775BC5DD_6E05_DA03_41A0_E9C15E83B2BA",
 "idleSequence": "this.sequence_775835DD_6E05_DA03_41D3_ECEF3CBA57B0",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_775835DD_6E05_DA03_41D3_ECEF3CBA57B0"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -4.76,
   "backwardYaw": 78.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478",
   "distance": 1
  },
  {
   "yaw": 176.61,
   "backwardYaw": -173.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan Menuju Stasiun",
 "id": "panorama_0BA6AA37_131D_A039_41B2_E683F4D45939",
 "thumbnailUrl": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A056614_132D_A3FE_41B0_FD2A376C1714",
  "this.overlay_0D4844CF_132D_A06A_41A3_67560ACB7E71"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_camera"
  },
  {
   "media": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_camera"
  },
  {
   "media": "this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_camera"
  },
  {
   "media": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_camera"
  },
  {
   "media": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17_camera"
  },
  {
   "media": "this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_camera"
  },
  {
   "media": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_camera"
  },
  {
   "media": "this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_camera"
  },
  {
   "media": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_camera"
  },
  {
   "media": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6_camera"
  },
  {
   "media": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_camera"
  },
  {
   "media": "this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023_camera"
  },
  {
   "media": "this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_camera"
  },
  {
   "media": "this.panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_camera"
  },
  {
   "media": "this.panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_camera"
  },
  {
   "media": "this.panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_camera"
  },
  {
   "media": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_camera"
  },
  {
   "media": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_camera"
  },
  {
   "media": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_camera"
  },
  {
   "media": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850_camera"
  },
  {
   "media": "this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_camera"
  },
  {
   "media": "this.panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_camera"
  },
  {
   "media": "this.panorama_309F87E4_273C_5E2D_41B5_955E0741AB97",
   "camera": "this.panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -87.28,
   "backwardYaw": 179.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Depan Kantor",
 "id": "panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7",
 "thumbnailUrl": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_376F200B_1325_7FE9_4199_1D5619C6517E",
  "this.overlay_0C63F4CD_1324_E06E_41A5_3B403E5A1391",
  "this.overlay_3225CDCC_1327_E06F_41A3_D97330EFE7B6",
  "this.overlay_3042FBFF_2724_761B_41C2_1B8406318447",
  "this.overlay_30F3E457_2724_D26B_41A5_33AB551FAF3E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Stasiun dari Jalan",
 "id": "panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F",
 "thumbnailUrl": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_04EFE28C_1325_60EF_41A4_6822FF4E4536"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BAE8882_131F_A0DA_419A_A62217408F17_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 1.51,
   "backwardYaw": -173.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Loket",
 "id": "panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6",
 "thumbnailUrl": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_31C9C346_132C_A05B_41A4_EF5EE207A7A6",
  "this.overlay_0D9C8C80_132F_60D6_41A0_061F7EA3C6F6",
  "this.overlay_0CE1B482_132F_E0DB_41A5_A3381B930596",
  "this.overlay_31AE0D58_273D_F266_41B5_4865E680F740",
  "this.overlay_301CAA93_273C_D6EA_4193_03821947E0C6",
  "this.overlay_3F4DDCFF_273C_521A_41BC_67CF35AC9E59",
  "this.overlay_31A13FBB_273D_AE1A_41B3_4A3E89555E10"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_747726E3_6E05_C607_41D2_E3D573D318BC",
 "idleSequence": "this.sequence_747706E3_6E05_C607_418E_2C0EADECE154",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_747706E3_6E05_C607_418E_2C0EADECE154"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7702E611_6E05_C603_41C0_AFA3387B5145",
 "idleSequence": "this.sequence_7702D611_6E05_C603_41D3_68C5EE491E8C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7702D611_6E05_C603_41D3_68C5EE491E8C"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 8.85,
   "backwardYaw": -174.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6",
   "distance": 1
  },
  {
   "yaw": 179.87,
   "backwardYaw": 144.52,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "R0010496",
 "id": "panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4",
 "thumbnailUrl": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_36225E76_131B_E03B_41A5_6A66E257418B",
  "this.overlay_323BD672_131B_603A_41B2_DEB43D7D4F9C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74A2269F_6E05_C63F_41D2_4D66D2E0AD24",
 "idleSequence": "this.sequence_74A2069F_6E05_C63F_41D0_792E7BAD2DCA",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74A2069F_6E05_C63F_41D0_792E7BAD2DCA"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 95.05,
   "backwardYaw": -88.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan Menuju Stasiun",
 "id": "panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40",
 "thumbnailUrl": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_081811C3_1327_E059_417A_E7960B3897CB",
  "this.overlay_04E74974_1327_603F_41AB_DFB96DEC2158"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -82.49,
   "backwardYaw": 94.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850",
   "distance": 1
  },
  {
   "yaw": 78.84,
   "backwardYaw": -4.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan Menuju Stasiun",
 "id": "panorama_0BA29F06_131D_A1DB_41A9_60F08440E478",
 "thumbnailUrl": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A1C4E74_1324_A03E_41B1_A279541E5AB8",
  "this.overlay_0F703123_132B_A1D9_419E_096EFB09139B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 92.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77B1A5C2_6E05_DA01_41D4_300A845789A8",
 "idleSequence": "this.sequence_77B195C2_6E05_DA01_41C2_2053D86AA12C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77B195C2_6E05_DA01_41C2_2053D86AA12C"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74CBE644_6E05_C601_41DA_20C62756CA5E",
 "idleSequence": "this.sequence_74CBC644_6E05_C601_41A4_62C9A20DA7CD",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74CBC644_6E05_C601_41A4_62C9A20DA7CD"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4",
 "buttonZoomOut": "this.IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052",
 "buttonPause": "this.IconButton_761EEBB5_6E06_4E03_41D7_91E770190F12",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonPlayLeft": "this.IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A",
 "buttonZoomIn": "this.IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388",
 "buttonMoveUp": "this.IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6",
 "buttonMoveDown": "this.IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE",
 "buttonMoveLeft": "this.IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7738C638_6E05_C601_41C1_A378D3E1C21D",
 "idleSequence": "this.sequence_77391638_6E05_C601_41D0_27A72EFBEB07",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77391638_6E05_C601_41D0_27A72EFBEB07"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74EC965E_6E05_C601_41CB_240FAFA72744",
 "idleSequence": "this.sequence_74EC865E_6E05_C601_41D7_8D4EDDA26DAF",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74EC865E_6E05_C601_41D7_8D4EDDA26DAF"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74B5C6AC_6E05_C601_41C8_00D5D053C8C7",
 "idleSequence": "this.sequence_74B236AC_6E05_C601_41D2_C638A406A498",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74B236AC_6E05_C601_41D2_C638A406A498"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_774565CF_6E05_DA1F_41BB_D45977E68AE9",
 "idleSequence": "this.sequence_774545CF_6E05_DA1F_41D3_FA79C49A5FD2",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_774545CF_6E05_DA1F_41D3_FA79C49A5FD2"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_776085F8_6E05_DA01_41D9_55C5A9CCD5D2",
 "idleSequence": "this.sequence_7760D5F8_6E05_DA01_4198_45D05F96614A",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7760D5F8_6E05_DA01_4198_45D05F96614A"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_776C75EA_6E05_DA01_41A5_E7E8BC86D3CD",
 "idleSequence": "this.sequence_776C45EA_6E05_DA01_41D0_7E2DBDD546EC",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_776C45EA_6E05_DA01_41D0_7E2DBDD546EC"
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Peron 6",
 "id": "panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8",
 "thumbnailUrl": "media/panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "id": "audio_7790CE99_6E02_4603_41D9_AC3CA0360139",
 "audio": {
  "mp3Url": "media/audio_7790CE99_6E02_4603_41D9_AC3CA0360139.mp3",
  "oggUrl": "media/audio_7790CE99_6E02_4603_41D9_AC3CA0360139.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "autoplay": true,
 "data": {
  "label": "alex-productions-happy-and-fun-background-music(chosic.com)"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74801685_6E05_C603_41D4_7786D6689171",
 "idleSequence": "this.sequence_74800685_6E05_C603_41C9_A636E5236D9F",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74800685_6E05_C603_41C9_A636E5236D9F"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 115.47,
   "backwardYaw": -2.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14",
   "distance": 1
  },
  {
   "yaw": -90.46,
   "backwardYaw": 100.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Halaman Stasiun",
 "id": "panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1",
 "thumbnailUrl": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_08C43875_132D_E03E_4141_C3864BD2ADCF",
  "this.overlay_33035018_132D_7FF7_41B2_092EB4033437"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -5.23,
   "backwardYaw": -79.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
   "distance": 1
  },
  {
   "yaw": 144.52,
   "backwardYaw": 179.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4",
   "distance": 1
  },
  {
   "yaw": 87.57,
   "backwardYaw": 1.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17",
   "distance": 1
  },
  {
   "yaw": -93.04,
   "backwardYaw": -102.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Dalam Stasiun",
 "id": "panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
 "thumbnailUrl": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EDAEFE3_132D_605A_41B0_0E3D1D0713E1",
  "this.overlay_33A3C153_132C_E07A_41AC_DAB841EDAEB2",
  "this.overlay_33B7A8A0_132C_A0D6_4196_260D419A9AC0",
  "this.overlay_347DD9ED_131C_A02E_41A6_EB908529BE14"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -79.16,
   "backwardYaw": -5.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "distance": 1
  },
  {
   "yaw": -173.92,
   "backwardYaw": 1.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6",
   "distance": 1
  },
  {
   "yaw": 100.36,
   "backwardYaw": -90.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lobi Stasiun",
 "id": "panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
 "thumbnailUrl": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F36458C_1325_A0EF_418E_510B274C93D6",
  "this.overlay_0FE69E19_1325_63E9_41A5_F44BC97F7C86",
  "this.overlay_330994FD_1324_A02E_41A5_860C58B740F7"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77F98564_6E05_DA01_41CE_CCF47AB6891D",
 "idleSequence": "this.sequence_77F9E564_6E05_DA01_41D9_9E0FAFFD52D9",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77F9E564_6E05_DA01_41D9_9E0FAFFD52D9"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_745496C7_6E05_C60F_41D0_F5CD3B19C16E",
 "idleSequence": "this.sequence_745486C7_6E05_C60F_41C8_951273DE1A66",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_745486C7_6E05_C60F_41C8_951273DE1A66"
},
{
 "class": "Photo",
 "label": "Jadwal Commuter Line Merak_2_page-0001",
 "id": "photo_7667AE58_6E06_4601_41D8_464379A328D6",
 "thumbnailUrl": "media/photo_7667AE58_6E06_4601_41D8_464379A328D6_t.jpg",
 "width": 2481,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7667AE58_6E06_4601_41D8_464379A328D6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1754,
 "duration": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77FEC556_6E05_DA01_41D9_DDCB9F29B6FC",
 "idleSequence": "this.sequence_77FF3556_6E05_DA01_41D0_BB0E98B51541",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77FF3556_6E05_DA01_41D0_BB0E98B51541"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7426370B_6E05_C607_41D7_70D729E7E366",
 "idleSequence": "this.sequence_7426270B_6E05_C607_41D2_51C4435986E0",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7426270B_6E05_C607_41D2_51C4435986E0"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -91.39,
   "backwardYaw": 87.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8",
   "distance": 1
  },
  {
   "yaw": -174.46,
   "backwardYaw": 8.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4",
   "distance": 1
  },
  {
   "yaw": 93.26,
   "backwardYaw": -6.85,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Peron 1",
 "id": "panorama_0A416C3F_131F_6029_4159_844C770495D6",
 "thumbnailUrl": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3126866B_13E5_A029_4185_E9FC31809722",
  "this.overlay_36E02708_13E5_E1D6_419B_6A7926CCD44A",
  "this.overlay_37240ED9_13E5_A076_41A0_C2737056CE9E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7464A6D5_6E05_C603_41B0_BAB86BD99A91",
 "idleSequence": "this.sequence_746496D5_6E05_C603_41C0_19548C04835D",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_746496D5_6E05_C603_41C0_19548C04835D"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.91,
   "backwardYaw": -87.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7",
   "distance": 1
  },
  {
   "yaw": 1.47,
   "backwardYaw": 87.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang Tunggu",
 "id": "panorama_0BAE8882_131F_A0DA_419A_A62217408F17",
 "thumbnailUrl": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D4DE9D0_132B_A077_41B0_4138DF82E344",
  "this.overlay_33E5C331_1324_A039_4184_06E134A2AE8C",
  "this.overlay_3B55CF2A_13E5_602B_4172_3F871606B947",
  "this.overlay_3448AD92_13E7_A0FB_41A6_30092EF9ADF5",
  "this.overlay_3D79EA5C_2724_D61D_41BC_813F4F9B27CD",
  "this.overlay_3F2BE299_2724_D6E7_41BF_F6D5490EBBA0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BF852B4_131C_A03F_4167_13B930B3C023_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -6.85,
   "backwardYaw": 93.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Tangga Jembatan Penguhung",
 "id": "panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A",
 "thumbnailUrl": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_378B6A0F_13EB_A3E9_418B_FA678B0BD52F"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Peron 5",
 "id": "panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B",
 "thumbnailUrl": "media/panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_744476BA_6E05_C601_4160_4995F21C805E",
 "idleSequence": "this.sequence_744466BA_6E05_C601_41D3_571C698E8D46",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_744466BA_6E05_C601_41D3_571C698E8D46"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -173.71,
   "backwardYaw": 176.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939",
   "distance": 1
  },
  {
   "yaw": -2.53,
   "backwardYaw": 115.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan Menuju Stasiun",
 "id": "panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14",
 "thumbnailUrl": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0926D0A9_132F_60D6_41B2_81132FB9C442",
  "this.overlay_099AC9D4_132F_A07E_41A8_1212D28CC3E3"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -94.24,
   "backwardYaw": 105.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Depan Toilet",
 "id": "panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5",
 "thumbnailUrl": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_350D6D9F_131D_60EA_41A6_D3A3EA88A1B3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7773D604_6E05_C601_41CF_F2B5AB994887",
 "idleSequence": "this.sequence_7773C604_6E05_C601_41CC_CBB006AF72BC",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7773C604_6E05_C601_41CC_CBB006AF72BC"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B82D23B_131D_6029_41AE_34941B85A850_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77A725A7_6E05_DA0F_41CC_0748A2EFC122",
 "idleSequence": "this.sequence_77A775A7_6E05_DA0F_41C2_0F7F674A2EBB",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77A775A7_6E05_DA0F_41C2_0F7F674A2EBB"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74DD9652_6E05_C601_41CB_CCBBA77552ED",
 "idleSequence": "this.sequence_74DD8652_6E05_C601_4174_533A1DA427EC",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74DD8652_6E05_C601_4174_533A1DA427EC"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74FE566B_6E05_C607_41B7_4040841F7C21",
 "idleSequence": "this.sequence_74FE466B_6E05_C607_41C8_FC2B3EF79A00",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74FE466B_6E05_C607_41C8_FC2B3EF79A00"
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Jadwal Commuter Line Merak_2_page-0001",
 "id": "panorama_309F87E4_273C_5E2D_41B5_955E0741AB97",
 "thumbnailUrl": "media/panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A416C3F_131F_6029_4159_844C770495D6_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 173.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_740776F0_6E05_C601_41D7_F735374A24E9",
 "idleSequence": "this.sequence_740756F0_6E05_C601_41C2_90C4E65F41FF",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_740756F0_6E05_C601_41C2_90C4E65F41FF"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 94.82,
   "backwardYaw": -82.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478",
   "distance": 1
  },
  {
   "yaw": -88.8,
   "backwardYaw": 95.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Jalan Menuju Stasiun",
 "id": "panorama_0B82D23B_131D_6029_41AE_34941B85A850",
 "thumbnailUrl": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09F9BBBE_1325_602B_41B1_4F7DD6684D5E",
  "this.overlay_0B1172A1_1325_E0D6_4183_D81EF90160F8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7787B57F_6E05_DAFF_41D5_014A078F4FCB",
 "idleSequence": "this.sequence_7787957F_6E05_DAFF_41C3_8455D473C2D5",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7787957F_6E05_DAFF_41C3_8455D473C2D5"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7714461E_6E05_C601_41B8_18A90C805889",
 "idleSequence": "this.sequence_7714A61E_6E05_C601_41D7_57CFC2699F38",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7714A61E_6E05_C601_41D7_57CFC2699F38"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.21,
   "backwardYaw": -88.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Peron 3",
 "id": "panorama_0BF852B4_131C_A03F_4167_13B930B3C023",
 "thumbnailUrl": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3BC5E2EA_13E5_602B_41A4_9FF0BBF22041"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7419C6FD_6E05_C603_41A0_BE354DC7B58A",
 "idleSequence": "this.sequence_741636FE_6E05_C601_41DA_BB384215E48C",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_741636FE_6E05_C601_41DA_BB384215E48C"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -102.19,
   "backwardYaw": -93.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "distance": 1
  },
  {
   "yaw": 105.4,
   "backwardYaw": -94.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang tunggu 2",
 "id": "panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4",
 "thumbnailUrl": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C90AB0E_131C_A1EB_41B1_0CDE86B68DEE",
  "this.overlay_333ED479_131F_6029_4191_989E1EC754FC",
  "this.overlay_372BD32A_131F_602B_419C_A64780E0BC42",
  "this.overlay_3F1FE0A2_272C_5225_41AF_8B3D27587E5F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74938692_6E05_C601_41C3_6F07166585E8",
 "idleSequence": "this.sequence_7493F692_6E05_C601_41D0_80E28D8D4485",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7493F692_6E05_C601_41D0_80E28D8D4485"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77F19572_6E05_DA01_41D8_8F12CD81FDB8",
 "idleSequence": "this.sequence_77F18572_6E05_DA01_41D2_7BD6CFCCB276",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77F18572_6E05_DA01_41D2_7BD6CFCCB276"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Window21619"
 },
 "bodyPaddingRight": 5,
 "id": "window_74D25E58_6E06_4601_41D9_15BC025E27C5",
 "bodyBackgroundColorDirection": "vertical",
 "width": 1280,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "titlePaddingLeft": 5,
 "headerVerticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "verticalAlign": "middle",
 "bodyPaddingTop": 5,
 "modal": true,
 "veilColorRatios": [
  0,
  1
 ],
 "height": 800,
 "paddingRight": 0,
 "veilColorDirection": "horizontal",
 "title": "",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "titleFontSize": "1.2vmin",
 "headerBackgroundColorDirection": "vertical",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerBorderSize": 0,
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 3,
 "shadowVerticalLength": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "shadow": true,
 "footerHeight": 5,
 "veilOpacity": 0.4,
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingRight": 5,
 "layout": "horizontal",
 "children": [
  "this.htmlText_74D3BE58_6E06_4601_41D9_A6B6B6693C3A",
  "this.image_uid77C5F531_6E05_DA03_41C7_D2DA71595FDD_1"
 ],
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonIconHeight": 12,
 "shadowColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "borderSize": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "headerPaddingLeft": 10,
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "titleTextDecoration": "none",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "gap": 0,
 "titlePaddingBottom": 5,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "closeButtonBackgroundColorRatios": []
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_camera"
  },
  {
   "media": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_camera"
  },
  {
   "media": "this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_camera"
  },
  {
   "media": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_camera"
  },
  {
   "media": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17_camera"
  },
  {
   "media": "this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_camera"
  },
  {
   "media": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_camera"
  },
  {
   "media": "this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_camera"
  },
  {
   "media": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_camera"
  },
  {
   "media": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6_camera"
  },
  {
   "media": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_camera"
  },
  {
   "media": "this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023_camera"
  },
  {
   "media": "this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_camera"
  },
  {
   "media": "this.panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_camera"
  },
  {
   "media": "this.panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0A5AF6CD_131D_606E_41B2_780A4E7B9C4B_camera"
  },
  {
   "media": "this.panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BF3EDDF_131D_A06A_4177_1E74E64DEDF8_camera"
  },
  {
   "media": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_camera"
  },
  {
   "media": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_camera"
  },
  {
   "media": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_camera"
  },
  {
   "media": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B82D23B_131D_6029_41AE_34941B85A850_camera"
  },
  {
   "media": "this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_camera"
  },
  {
   "media": "this.panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_camera"
  },
  {
   "media": "this.panorama_309F87E4_273C_5E2D_41B5_955E0741AB97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist, 22, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_camera"
  }
 ],
 "id": "ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77BAC5B4_6E05_DA01_41A3_5B02CC3E3E92",
 "idleSequence": "this.sequence_77BB35B5_6E05_DA03_41D7_163F0CBAF172",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_77BB35B5_6E05_DA03_41D7_163F0CBAF172"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 87.69,
   "backwardYaw": -91.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A416C3F_131F_6029_4159_844C770495D6",
   "distance": 1
  },
  {
   "yaw": -88.68,
   "backwardYaw": -3.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Peron 2",
 "id": "panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8",
 "thumbnailUrl": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3AF0E0EC_13E4_A02F_4195_5401659CE387",
  "this.overlay_30EDAE94_13E5_A0FF_4136_EA1799D00BB8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_309F87E4_273C_5E2D_41B5_955E0741AB97_camera",
 "timeToIdle": 5000,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7727A62B_6E05_C607_41CC_852F05F1D6CC",
 "idleSequence": "this.sequence_7727962B_6E05_C607_41DB_490D143A1CC1",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_7727962B_6E05_C607_41DB_490D143A1CC1"
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Peron4",
 "id": "panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3",
 "thumbnailUrl": "media/panorama_0A355382_131D_60DA_41A9_9F85A5CBABF3_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -101.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74F1B678_6E05_C601_41D0_4D3691FA7CB3",
 "idleSequence": "this.sequence_74F1A678_6E05_C601_41D1_8CB15D47A440",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_74F1A678_6E05_C601_41D1_8CB15D47A440"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_779D058D_6E05_DA03_41CD_652332F8E072",
 "idleSequence": "this.sequence_779D758D_6E05_DA03_41D8_37CF485AD988",
 "timeToIdle": 5000,
 "initialSequence": "this.sequence_779D758D_6E05_DA03_41D8_37CF485AD988"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "shadow": false,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "width": 175,
 "scrollBarColor": "#FFFFFF",
 "id": "ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "minHeight": 20,
 "itemThumbnailShadowOpacity": 0.54,
 "itemBorderRadius": 0,
 "minWidth": 20,
 "itemLabelFontFamily": "Arial",
 "paddingRight": 20,
 "height": "40.757%",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "layout": "vertical",
 "class": "ThumbnailList",
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "top": "0%",
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 10,
 "borderRadius": 5,
 "gap": 4,
 "paddingLeft": 20,
 "itemLabelGap": 9,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 75,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "data": {
  "name": "Container53059"
 },
 "children": [
  "this.IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052",
  "this.IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4",
  "this.IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A",
  "this.IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3",
  "this.Container_761F0BB5_6E06_4E03_41CE_94C89675F4CF",
  "this.IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385",
  "this.IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7",
  "this.IconButton_761EABB5_6E06_4E03_41D4_4FB9DD308C5F",
  "this.IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388"
 ],
 "id": "Container_761E8BB5_6E06_4E03_41C3_7142CCFECD74",
 "left": "38.06%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "23.758%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 20,
 "verticalAlign": "middle",
 "bottom": "-0.05%",
 "contentOpaque": false,
 "minWidth": 20,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "height": "18.64%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden",
 "layout": "horizontal"
},
{
 "id": "IconButton_761EABB5_6E06_4E03_41D4_4FB9DD308C5F",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761EABB5_6E06_4E03_41D4_4FB9DD308C5F.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761EABB5_6E06_4E03_41D4_4FB9DD308C5F_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53070"
 },
 "paddingLeft": 0
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7790E59A_6E05_DA01_41D4_E29BEFC8785C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_775835DD_6E05_DA03_41D3_ECEF3CBA57B0",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.92,
   "image": "this.AnimatedImageResource_37AD1147_13EC_A05A_419A_B32EB9A409EE",
   "pitch": -9.58,
   "yaw": -4.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478, this.camera_74F1B678_6E05_C601_41D0_4D3691FA7CB3); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Jalan Raya"
  }
 ],
 "id": "overlay_0A056614_132D_A3FE_41B0_FD2A376C1714",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.92,
   "yaw": -4.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.62,
   "image": "this.AnimatedImageResource_37AD3147_13EC_A05A_41AF_A37AF602A60F",
   "pitch": -13.43,
   "yaw": 176.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14, this.camera_74801685_6E05_C603_41D4_7786D6689171); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiun"
  }
 ],
 "id": "overlay_0D4844CF_132D_A06A_41A3_67560ACB7E71",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.62,
   "yaw": 176.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Kepala Stasiun"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.09,
   "image": "this.AnimatedImageResource_3B9C8F74_2724_6E2E_41A7_941A8431AFF3",
   "pitch": 7.23,
   "yaw": -20.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_376F200B_1325_7FE9_4199_1D5619C6517E",
 "maps": [
  {
   "hfov": 4.09,
   "yaw": -20.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Pengatur Perjalanan KA"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.15,
   "image": "this.AnimatedImageResource_3B9CFF74_2724_6E2E_41B6_4092ADD57066",
   "pitch": 7.81,
   "yaw": 25.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0C63F4CD_1324_E06E_41A5_3B403E5A1391",
 "maps": [
  {
   "hfov": 5.15,
   "yaw": 25.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.16,
   "image": "this.AnimatedImageResource_37AC0144_13EC_A05E_41B2_C7F57B45D720",
   "pitch": -15.27,
   "yaw": -87.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17, this.camera_74FE566B_6E05_C607_41B7_4040841F7C21); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3225CDCC_1327_E06F_41A3_D97330EFE7B6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.16,
   "yaw": -87.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang kepala Stasiun"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_3_0.png",
      "width": 240,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": 11.82,
   "yaw": -19.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3042FBFF_2724_761B_41C2_1B8406318447",
 "maps": [
  {
   "hfov": 15.77,
   "yaw": -19.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Pengatur Perjalanan"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_4_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": 14.35,
   "yaw": 26.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_30F3E457_2724_D26B_41A5_33AB551FAF3E",
 "maps": [
  {
   "hfov": 17.5,
   "yaw": 26.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_4_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.71,
   "image": "this.AnimatedImageResource_37AA4149_13EC_A056_41A9_1E26C7FD71A3",
   "pitch": -16.29,
   "yaw": -3.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiun"
  }
 ],
 "id": "overlay_04EFE28C_1325_60EF_41A4_6822FF4E4536",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.71,
   "yaw": -3.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.02,
   "image": "this.AnimatedImageResource_37AE5142_13EC_A05A_41AF_1123465CFB4C",
   "pitch": -13.41,
   "yaw": 1.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3, this.camera_776085F8_6E05_DA01_41D9_55C5A9CCD5D2); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_31C9C346_132C_A05B_41A4_EF5EE207A7A6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": 1.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loket"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.92,
   "image": "this.AnimatedImageResource_3B987F70_2724_6E26_41BE_8F1317E94660",
   "pitch": 12.68,
   "yaw": 170.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D9C8C80_132F_60D6_41A0_061F7EA3C6F6",
 "maps": [
  {
   "hfov": 5.92,
   "yaw": 170.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 12.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.68,
   "image": "this.AnimatedImageResource_3B98BF70_2724_6E26_41AB_36AC15A97EB2",
   "pitch": 16.54,
   "yaw": 65.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.openLink('https://commuterline.id/perjalanan-krl/peta-rute', '_blank')",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Papan Informasi Rute KAI"
  }
 ],
 "id": "overlay_0CE1B482_132F_E0DB_41A5_A3381B930596",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.68,
   "yaw": 65.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info Jadwal"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_3_0.png",
      "width": 225,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": 14.65,
   "yaw": 103.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31AE0D58_273D_F266_41B5_4865E680F740",
 "maps": [
  {
   "hfov": 14.61,
   "yaw": 103.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_3_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.23,
   "image": "this.AnimatedImageResource_3B9F0F70_2724_6E26_41B7_0EDC646EBBA9",
   "pitch": 10.62,
   "yaw": 101.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showWindow(this.window_74D25E58_6E06_4601_41D9_15BC025E27C5, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Papan Informasi Rute KAI"
  }
 ],
 "id": "overlay_301CAA93_273C_D6EA_4193_03821947E0C6",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.23,
   "yaw": 101.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info Rute"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": 19.96,
   "yaw": 66.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F4DDCFF_273C_521A_41BC_67CF35AC9E59",
 "maps": [
  {
   "hfov": 10.59,
   "yaw": 66.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 19.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_5_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Loket"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_6_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   },
   "pitch": 16.98,
   "yaw": 171.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31A13FBB_273D_AE1A_41B3_4A3E89555E10",
 "maps": [
  {
   "hfov": 8.39,
   "yaw": 171.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 16.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_6_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_747706E3_6E05_C607_418E_2C0EADECE154",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7702D611_6E05_C603_41D3_68C5EE491E8C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_37ACC144_13EC_A05E_41A6_5970E4CAE9F0",
   "pitch": -13.25,
   "yaw": 8.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A416C3F_131F_6029_4159_844C770495D6, this.camera_77A725A7_6E05_DA0F_41CC_0748A2EFC122); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_36225E76_131B_E03B_41A5_6A66E257418B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.58,
   "yaw": 8.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.48,
   "image": "this.AnimatedImageResource_37ACF145_13EC_A05E_41A6_93A0AE021CB0",
   "pitch": -31.54,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F, this.camera_77BAC5B4_6E05_DA01_41A3_5B02CC3E3E92); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_323BD672_131B_603A_41B2_DEB43D7D4F9C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.48,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74A2069F_6E05_C63F_41D0_792E7BAD2DCA",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.88,
   "image": "this.AnimatedImageResource_37ADF148_13EC_A056_41A4_D6CA9206149C",
   "pitch": -11.12,
   "yaw": -87.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ke arah Jalan Raya"
  }
 ],
 "id": "overlay_081811C3_1327_E059_417A_E7960B3897CB",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.88,
   "yaw": -87.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.8,
   "image": "this.AnimatedImageResource_37AA2149_13EC_A056_41B2_6DE379839C6E",
   "pitch": -13.84,
   "yaw": 95.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B82D23B_131D_6029_41AE_34941B85A850, this.camera_745496C7_6E05_C60F_41D0_F5CD3B19C16E); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiu"
  }
 ],
 "id": "overlay_04E74974_1327_603F_41AB_DFB96DEC2158",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.8,
   "yaw": 95.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.59,
   "image": "this.AnimatedImageResource_37AD6147_13EC_A05A_41AC_F34F14F3D0A6",
   "pitch": -19.12,
   "yaw": -82.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B82D23B_131D_6029_41AE_34941B85A850, this.camera_7702E611_6E05_C603_41C0_AFA3387B5145); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah jalan Raya"
  }
 ],
 "id": "overlay_0A1C4E74_1324_A03E_41B1_A279541E5AB8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.59,
   "yaw": -82.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.17,
   "image": "this.AnimatedImageResource_37AD8148_13EC_A056_416F_4D9FA6774EC0",
   "pitch": -31.6,
   "yaw": 78.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939, this.camera_7714461E_6E05_C601_41B8_18A90C805889); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiun"
  }
 ],
 "id": "overlay_0F703123_132B_A1D9_419E_096EFB09139B",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.17,
   "yaw": 78.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77B195C2_6E05_DA01_41C2_2053D86AA12C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74CBC644_6E05_C601_41A4_62C9A20DA7CD",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "id": "IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761ECBB5_6E06_4E03_41D0_4D5BED890385_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53068"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761F4BB5_6E06_4E03_41CF_DC06059685D4_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53061"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761F5BB5_6E06_4E03_41D9_ADC6261EB052_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53060"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761EEBB5_6E06_4E03_41D7_91E770190F12",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761EEBB5_6E06_4E03_41D7_91E770190F12.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761EEBB5_6E06_4E03_41D7_91E770190F12_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53066"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761EBBB5_6E06_4E03_41C1_3B3AF66C35B7_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53069"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761F3BB5_6E06_4E03_41D7_9E8D88A1A77A_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53062"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761E9BB5_6E06_4E03_41BE_E760223EF388_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53071"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53065"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53067"
 },
 "paddingLeft": 0
},
{
 "id": "IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3",
 "width": 40,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3.png",
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_761F2BB5_6E06_4E03_41D4_7C8F0507E4D3_pressed.png",
 "class": "IconButton",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button53063"
 },
 "paddingLeft": 0
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77391638_6E05_C601_41D0_27A72EFBEB07",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74EC865E_6E05_C601_41D7_8D4EDDA26DAF",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74B236AC_6E05_C601_41D2_C638A406A498",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_774545CF_6E05_DA1F_41D3_FA79C49A5FD2",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7760D5F8_6E05_DA01_4198_45D05F96614A",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_776C45EA_6E05_DA01_41D0_7E2DBDD546EC",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74800685_6E05_C603_41C9_A636E5236D9F",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.04,
   "image": "this.AnimatedImageResource_37A10140_13EC_A056_41B1_2CA7E6D3F094",
   "pitch": -17.62,
   "yaw": -90.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3, this.camera_74A2269F_6E05_C63F_41D2_4D66D2E0AD24); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Masuk Stasiun"
  }
 ],
 "id": "overlay_08C43875_132D_E03E_4141_C3864BD2ADCF",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.04,
   "yaw": -90.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.35,
   "image": "this.AnimatedImageResource_37A1C141_13EC_A056_41A7_3BC6395CB19F",
   "pitch": -12.48,
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14, this.camera_74938692_6E05_C601_41C3_6F07166585E8); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Jalan Raya"
  }
 ],
 "id": "overlay_33035018_132D_7FF7_41B2_092EB4033437",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.35,
   "yaw": 115.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.84,
   "image": "this.AnimatedImageResource_37AED142_13EC_A05A_41A4_60FF89C4EA20",
   "pitch": -12.79,
   "yaw": -5.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06F0FA53_131C_A079_41A6_8930D4195DE3, this.camera_77FEC556_6E05_DA01_41D9_DDCB9F29B6FC); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0EDAEFE3_132D_605A_41B0_0E3D1D0713E1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.84,
   "yaw": -5.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.57,
   "image": "this.AnimatedImageResource_37AEF142_13EC_A05A_41AD_C1D27956989A",
   "pitch": -10.04,
   "yaw": -93.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4, this.camera_7787B57F_6E05_DAFF_41D5_014A078F4FCB); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_33A3C153_132C_E07A_41AC_DAB841EDAEB2",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.57,
   "yaw": -93.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.45,
   "image": "this.AnimatedImageResource_37AF2143_13EC_A05A_41A5_C54E332AF353",
   "pitch": -13.93,
   "yaw": 87.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BAE8882_131F_A0DA_419A_A62217408F17, this.camera_77F19572_6E05_DA01_41D8_8F12CD81FDB8); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_33B7A8A0_132C_A0D6_4196_260D419A9AC0",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.45,
   "yaw": 87.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.09,
   "image": "this.AnimatedImageResource_37AF5143_13EC_A05A_41A4_E8BD387CA356",
   "pitch": -21.82,
   "yaw": 144.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4, this.camera_77F98564_6E05_DA01_41CE_CCF47AB6891D); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_347DD9ED_131C_A02E_41A6_EB908529BE14",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.09,
   "yaw": 144.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.56,
   "image": "this.AnimatedImageResource_37A1E141_13EC_A056_41A9_9774A1A93EE3",
   "pitch": -19.72,
   "yaw": 100.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1, this.camera_74EC965E_6E05_C601_41CB_240FAFA72744); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar"
  }
 ],
 "id": "overlay_0F36458C_1325_A0EF_418E_510B274C93D6",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.56,
   "yaw": 100.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_37AE0141_13EC_A056_41B0_001AC8BD2FF0",
   "pitch": -23.07,
   "yaw": -79.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F, this.camera_74CBE644_6E05_C601_41DA_20C62756CA5E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Masuk"
  }
 ],
 "id": "overlay_0FE69E19_1325_63E9_41A5_F44BC97F7C86",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": -79.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.7,
   "image": "this.AnimatedImageResource_37AE2141_13EC_A056_4196_46479DD914C0",
   "pitch": -16.55,
   "yaw": -173.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6, this.camera_74DD9652_6E05_C601_41CB_CCBBA77552ED); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Loket"
  }
 ],
 "id": "overlay_330994FD_1324_A02E_41A5_860C58B740F7",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.7,
   "yaw": -173.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77F9E564_6E05_DA01_41D9_9E0FAFFD52D9",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_745486C7_6E05_C60F_41C8_951273DE1A66",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77FF3556_6E05_DA01_41D0_BB0E98B51541",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7426270B_6E05_C607_41D2_51C4435986E0",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.58,
   "image": "this.AnimatedImageResource_37AD1145_13EC_A05E_41A6_493777F8834A",
   "pitch": -13.25,
   "yaw": -91.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8, this.camera_7464A6D5_6E05_C603_41B0_BAB86BD99A91); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3126866B_13E5_A029_4185_E9FC31809722",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.58,
   "yaw": -91.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.52,
   "image": "this.AnimatedImageResource_37AD3145_13EC_A05E_41A9_A542A197B1D8",
   "pitch": -14.26,
   "yaw": 93.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A, this.camera_740776F0_6E05_C601_41D7_F735374A24E9); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_36E02708_13E5_E1D6_419B_6A7926CCD44A",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.52,
   "yaw": 93.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_37AD6145_13EC_A05E_41A1_5086250EE411",
   "pitch": -21.38,
   "yaw": -174.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4, this.camera_747726E3_6E05_C607_41D2_E3D573D318BC); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37240ED9_13E5_A076_41A0_C2737056CE9E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -174.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_746496D5_6E05_C603_41C0_19548C04835D",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.8,
   "image": "this.AnimatedImageResource_37AF7143_13EC_A05A_419D_FBB04ED203BB",
   "pitch": -13.94,
   "yaw": 1.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F, this.camera_774565CF_6E05_DA1F_41BB_D45977E68AE9); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0D4DE9D0_132B_A077_41B0_4138DF82E344",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.8,
   "yaw": 1.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.86,
   "image": "this.AnimatedImageResource_37AF9143_13EC_A05A_419A_C7A8BF4607E4",
   "pitch": -15.88,
   "yaw": 179.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7, this.camera_77B1A5C2_6E05_DA01_41D4_300A845789A8); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_33E5C331_1324_A039_4184_06E134A2AE8C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.86,
   "yaw": 179.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Pengatur Perrjalanan KA"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.89,
   "image": "this.AnimatedImageResource_3B9DBF73_2724_6E2A_41AC_8D4C7C44DAE1",
   "pitch": -1.67,
   "yaw": 164.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B55CF2A_13E5_602B_4172_3F871606B947",
 "maps": [
  {
   "hfov": 1.89,
   "yaw": 164.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Kepala Stasiun"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.1,
   "image": "this.AnimatedImageResource_3B9C1F73_2724_6E2A_4185_A43F06A5C7D6",
   "pitch": -1.07,
   "yaw": 155,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3448AD92_13E7_A0FB_41A6_30092EF9ADF5",
 "maps": [
  {
   "hfov": 2.1,
   "yaw": 155,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Kepala Stasiun"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_4_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": 2.08,
   "yaw": 154.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3D79EA5C_2724_D61D_41BC_813F4F9B27CD",
 "maps": [
  {
   "hfov": 8.86,
   "yaw": 154.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_4_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Ruang Pengatur Perjalanan"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_5_0.png",
      "width": 154,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": 1.5,
   "yaw": 165.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F2BE299_2724_D6E7_41BF_F6D5490EBBA0",
 "maps": [
  {
   "hfov": 10.31,
   "yaw": 165.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_5_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 23,
   "image": "this.AnimatedImageResource_37AC7146_13EC_A05A_41A2_D5942E46D77E",
   "pitch": -21.54,
   "yaw": -6.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A416C3F_131F_6029_4159_844C770495D6, this.camera_7773D604_6E05_C601_41CF_F2B5AB994887); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_378B6A0F_13EB_A3E9_418B_FA678B0BD52F",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23,
   "yaw": -6.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_744466BA_6E05_C601_41D3_571C698E8D46",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.77,
   "image": "this.AnimatedImageResource_37ACA146_13EC_A05A_41A5_B6C247777C5B",
   "pitch": -14.75,
   "yaw": -173.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BA6AA37_131D_A039_41B2_E683F4D45939, this.camera_775BC5DD_6E05_DA03_41A0_E9C15E83B2BA); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Jalan Raya"
  }
 ],
 "id": "overlay_0926D0A9_132F_60D6_41B2_81132FB9C442",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.77,
   "yaw": -173.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.11,
   "image": "this.AnimatedImageResource_37ACE147_13EC_A05A_41B2_90A8AE9119A0",
   "pitch": -14.03,
   "yaw": -2.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1, this.camera_776C75EA_6E05_DA01_41A5_E7E8BC86D3CD); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiun"
  }
 ],
 "id": "overlay_099AC9D4_132F_A07E_41A8_1212D28CC3E3",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.11,
   "yaw": -2.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.9,
   "image": "this.AnimatedImageResource_37ACA144_13EC_A05E_41AA_D3D0AEB0BA0C",
   "pitch": -18.16,
   "yaw": -94.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4, this.camera_7727A62B_6E05_C607_41CC_852F05F1D6CC); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_350D6D9F_131D_60EA_41A6_D3A3EA88A1B3",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.9,
   "yaw": -94.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7773C604_6E05_C601_41CC_CBB006AF72BC",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77A775A7_6E05_DA0F_41C2_0F7F674A2EBB",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74DD8652_6E05_C601_4174_533A1DA427EC",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74FE466B_6E05_C607_41C8_FC2B3EF79A00",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_740756F0_6E05_C601_41C2_90C4E65F41FF",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.6,
   "image": "this.AnimatedImageResource_37ADB148_13EC_A056_41B3_4E3EBC9A4353",
   "pitch": -18.95,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40, this.camera_7790859A_6E05_DA01_41C5_8469BCD24BB2); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Arah Jalan Raya"
  }
 ],
 "id": "overlay_09F9BBBE_1325_602B_41B1_4F7DD6684D5E",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.6,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.75,
   "image": "this.AnimatedImageResource_37ADD148_13EC_A056_41B2_3924E402D9FE",
   "pitch": -15.4,
   "yaw": 94.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BA29F06_131D_A1DB_41A9_60F08440E478, this.camera_779D058D_6E05_DA03_41CD_652332F8E072); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Menuju Stasiun"
  }
 ],
 "id": "overlay_0B1172A1_1325_E0D6_4183_D81EF90160F8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.75,
   "yaw": 94.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7787957F_6E05_DAFF_41C3_8455D473C2D5",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7714A61E_6E05_C601_41D7_57CFC2699F38",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_37AC4146_13EC_A05A_4195_EC710385E6A6",
   "pitch": -16.02,
   "yaw": -3.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8, this.camera_7738C638_6E05_C601_41C1_A378D3E1C21D); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3BC5E2EA_13E5_602B_41A4_9FF0BBF22041",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -3.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_741636FE_6E05_C601_41DA_BB384215E48C",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.18,
   "image": "this.AnimatedImageResource_37AC2144_13EC_A05E_41AF_ACF02FC977FC",
   "pitch": -19.53,
   "yaw": -102.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F, this.camera_7419C6FD_6E05_C603_41A0_BE354DC7B58A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_0C90AB0E_131C_A1EB_41B1_0CDE86B68DEE",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.18,
   "yaw": -102.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.86,
   "image": "this.AnimatedImageResource_37AC5144_13EC_A05E_41AE_ADB6590E12FE",
   "pitch": -21.45,
   "yaw": 105.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5, this.camera_7426370B_6E05_C607_41D7_70D729E7E366); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_333ED479_131F_6029_4191_989E1EC754FC",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.86,
   "yaw": 105.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "TOILET"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.67,
   "image": "this.AnimatedImageResource_3BA23F75_2724_6E2E_41C0_295AF7CFCEC1",
   "pitch": 1.03,
   "yaw": 143.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_372BD32A_131F_602B_419C_A64780E0BC42",
 "maps": [
  {
   "hfov": 4.67,
   "yaw": 143.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Mushola"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0_HS_3_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": 4.33,
   "yaw": 144.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3F1FE0A2_272C_5225_41AF_8B3D27587E5F",
 "maps": [
  {
   "hfov": 11.69,
   "yaw": 144.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0_HS_3_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7493F692_6E05_C601_41D0_80E28D8D4485",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77F18572_6E05_DA01_41D2_7BD6CFCCB276",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "id": "htmlText_74D3BE58_6E06_4601_41D9_A6B6B6693C3A",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "10%",
 "borderSize": 0,
 "minHeight": 0,
 "scrollBarMargin": 2,
 "minWidth": 0,
 "paddingRight": 10,
 "height": "100%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "",
 "paddingLeft": 10,
 "shadow": false,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText21620"
 }
},
{
 "id": "image_uid77C5F531_6E05_DA03_41C7_D2DA71595FDD_1",
 "width": "89%",
 "borderSize": 0,
 "url": "media/photo_7667AE58_6E06_4601_41D8_464379A328D6.jpg",
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "Image23096"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_77BB35B5_6E05_DA03_41D7_163F0CBAF172",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.43,
   "image": "this.AnimatedImageResource_37AD8145_13EC_A05E_41A5_7B746715F451",
   "pitch": -12.84,
   "yaw": 87.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A416C3F_131F_6029_4159_844C770495D6, this.camera_74B5C6AC_6E05_C601_41C8_00D5D053C8C7); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3AF0E0EC_13E4_A02F_4195_5401659CE387",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.43,
   "yaw": 87.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.17,
   "image": "this.AnimatedImageResource_37ADA146_13EC_A05A_41A0_6BF28A158FA5",
   "pitch": -17.76,
   "yaw": -88.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BF852B4_131C_A03F_4167_13B930B3C023, this.camera_744476BA_6E05_C601_4160_4995F21C805E); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_30EDAE94_13E5_A0FF_4136_EA1799D00BB8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.17,
   "yaw": -88.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_7727962B_6E05_C607_41DB_490D143A1CC1",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_74F1A678_6E05_C601_41D1_8CB15D47A440",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_779D758D_6E05_DA03_41D8_37CF485AD988",
 "movements": [
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 323,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 18.5,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ]
},
{
 "data": {
  "name": "Container53064"
 },
 "children": [
  "this.IconButton_761EFBB5_6E06_4E03_41BE_C91CA3A931F6",
  "this.IconButton_761EEBB5_6E06_4E03_41D7_91E770190F12",
  "this.IconButton_761EDBB5_6E06_4E03_41D0_DE8C53E836FE"
 ],
 "id": "Container_761F0BB5_6E06_4E03_41CE_94C89675F4CF",
 "width": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minHeight": 20,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingLeft": 0,
 "shadow": false,
 "class": "Container",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden",
 "layout": "vertical"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD1147_13EC_A05A_419A_B32EB9A409EE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD3147_13EC_A05A_41AF_A37AF602A60F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BA6AA37_131D_A039_41B2_E683F4D45939_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B9C8F74_2724_6E2E_41A7_941A8431AFF3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B9CFF74_2724_6E2E_41B6_4092ADD57066",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AC0144_13EC_A05E_41B2_C7F57B45D720",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B89FC32_131F_A03B_41AB_7B30770EB5A7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AA4149_13EC_A056_41A9_1E26C7FD71A3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B1B609E_131C_E0EB_41B1_8172615DDB7F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AE5142_13EC_A05A_41AF_1123465CFB4C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B987F70_2724_6E26_41BE_8F1317E94660",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B98BF70_2724_6E26_41AB_36AC15A97EB2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B9F0F70_2724_6E26_41B7_0EDC646EBBA9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A42FDA1_131C_A0D9_4189_92B9A236B2F6_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ACC144_13EC_A05E_41A6_5970E4CAE9F0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ACF145_13EC_A05E_41A6_93A0AE021CB0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B0386FF_131F_A02A_419F_46E94EF55CA4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ADF148_13EC_A056_41A4_D6CA9206149C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AA2149_13EC_A056_41B2_6DE379839C6E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0ADAFC49_131C_A069_41B1_04E9C357BB40_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD6147_13EC_A05A_41AC_F34F14F3D0A6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD8148_13EC_A056_416F_4D9FA6774EC0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BA29F06_131D_A1DB_41A9_60F08440E478_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37A10140_13EC_A056_41B1_2CA7E6D3F094",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37A1C141_13EC_A056_41A7_3BC6395CB19F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A6B7CE9_131D_6029_419B_3E48C0852DA1_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AED142_13EC_A05A_41A4_60FF89C4EA20",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AEF142_13EC_A05A_41AD_C1D27956989A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AF2143_13EC_A05A_41A5_C54E332AF353",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AF5143_13EC_A05A_41A4_E8BD387CA356",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A5D50EF_131F_602A_41B0_ED96B3EEF23F_1_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37A1E141_13EC_A056_41A9_9774A1A93EE3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AE0141_13EC_A056_41B0_001AC8BD2FF0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AE2141_13EC_A056_4196_46479DD914C0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_06F0FA53_131C_A079_41A6_8930D4195DE3_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD1145_13EC_A05E_41A6_493777F8834A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD3145_13EC_A05E_41A9_A542A197B1D8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD6145_13EC_A05E_41A1_5086250EE411",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A416C3F_131F_6029_4159_844C770495D6_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AF7143_13EC_A05A_419D_FBB04ED203BB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AF9143_13EC_A05A_419A_C7A8BF4607E4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B9DBF73_2724_6E2A_41AC_8D4C7C44DAE1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3B9C1F73_2724_6E2A_4185_A43F06A5C7D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BAE8882_131F_A0DA_419A_A62217408F17_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AC7146_13EC_A05A_41A2_D5942E46D77E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0A21FA9B_131C_E0EA_4198_A4DC8ABFFA4A_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ACA146_13EC_A05A_41A5_B6C247777C5B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ACE147_13EC_A05A_41B2_90A8AE9119A0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B8AB3BD_131D_E029_41A1_20F3DDCCBA14_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ACA144_13EC_A05E_41AA_D3D0AEB0BA0C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BBD0430_131F_A036_41A8_8C0D7FCC34E5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ADB148_13EC_A056_41B3_4E3EBC9A4353",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ADD148_13EC_A056_41B2_3924E402D9FE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B82D23B_131D_6029_41AE_34941B85A850_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AC4146_13EC_A05A_4195_EC710385E6A6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BF852B4_131C_A03F_4167_13B930B3C023_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AC2144_13EC_A05E_41AF_ACF02FC977FC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AC5144_13EC_A05E_41AE_ADB6590E12FE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3BA23F75_2724_6E2E_41C0_295AF7CFCEC1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0BB2608A_131F_E0EB_41A1_A6BDFAC87EA4_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37AD8145_13EC_A05E_41A5_7B746715F451",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_37ADA146_13EC_A05A_41A0_6BF28A158FA5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0B0A0EC0_131F_6056_4171_6799AFEF38E8_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
}],
 "start": "this.playAudioList([this.audio_7790CE99_6E02_4603_41D9_AC3CA0360139]); this.init(); this.set('mute', true); this.syncPlaylists([this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C_playlist,this.mainPlayList])",
 "data": {
  "name": "Player37955"
 },
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_3E108A09_2725_D1E7_41BA_F6DFB724463C",
  "this.Container_761E8BB5_6E06_4E03_41C3_7142CCFECD74"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "minHeight": 20,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingLeft": 0,
 "buttonToggleMute": "this.IconButton_761EABB5_6E06_4E03_41D4_4FB9DD308C5F",
 "shadow": false,
 "class": "Player",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
