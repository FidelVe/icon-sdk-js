import * as assert from 'assert';
import IconService from '../lib/index';

const tests = [
  {
    // Call Transaction
    value: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      stepLimit: IconService.IconConverter.toBigNumber(100000),
      nid: IconService.IconConverter.toBigNumber(3),
      nonce: IconService.IconConverter.toBigNumber(1),
      value: IconService.IconConverter.toBigNumber(0),
      version: IconService.IconConverter.toBigNumber(3),
      timestamp: 1544596599371000,
      dataType: 'call',
      data: {
        method: 'burn',
        params: {
          account: 'hx16293d558d3bd489c3715e7e3648de0e35086bfd',
          amount: IconService.IconConverter.toHex(3),
        },
      },
    },
    expected: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      stepLimit: '0x186a0',
      nid: '0x3',
      nonce: '0x1',
      value: '0x0',
      version: '0x3',
      timestamp: '0x57ccd6ba074f8',
      dataType: 'call',
      data: {
        method: 'burn',
        params: {
          account: 'hx16293d558d3bd489c3715e7e3648de0e35086bfd',
          amount: '0x3',
        },
      },
    },
  },
  {
    // Deploy Transaction
    value: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx0000000000000000000000000000000000000000',
      stepLimit: IconService.IconConverter.toBigNumber(2500000),
      nid: IconService.IconConverter.toBigNumber(3),
      nonce: IconService.IconConverter.toBigNumber(1),
      value: IconService.IconConverter.toBigNumber(0),
      version: IconService.IconConverter.toBigNumber(3),
      timestamp: 1544596599371000,
      dataType: 'deploy',
      data: {
        contentType: 'application/zip',
        content:
          '0x504b03040a0000000000c45df34c0000000000000000000000000f0010007374616e646172645f746f6b656e2f55580c00c33a505b70fb4f5bf5011400504b03041400080008001c57f24c0000000000000000000000001a0010007374616e646172645f746f6b656e2f5f5f696e69745f5f2e707955580c005028505b679e4e5bf50114004b2bcacf55d02b2e49cc4b492c4a892fc9cf4ecd53c8cc2dc82f2a5108868a868004b900504b070869020bac240000002a000000504b03040a00000000003d5af24c0000000000000000000000001b0010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f55580c00c33a505b55a34e5bf5011400504b03041400080008003d5af24c000000000000000000000000320010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f5f5f696e69745f5f2e63707974686f6e2d33362e70796355580c005028505b55a34e5bf501140033e6e5e54a9fe717adc5c0c0f09801093001b10310170b0089148614c61c865cc62846468614a660064de6978c40614dc65bbcc12589792989452921f9d9a9797e9a4cb7f88aa122f12520a12290412b198a58801498f8e5aca7af579c9c5f94aa6f6068609464686c6264916891989a6664669a9694989a9a646c6e6c6992629c986a616e649e669e6868a96f186fa01f1f9f999759121faf5750798bc326373fa53427d50ee48e62908301504b07088abd28b9ac000000ca000000504b03041400080008003d5af24c000000000000000000000000380010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f7374616e646172645f746f6b656e2e63707974686f6e2d33362e70796355580c005028505b55a34e5bf5011400a557df73dbc611c6e10010a4484aa269fd70ec4675d236cca49225b991d371da4a769d7147a533a59a99b29d4141dc51250d92ea0172220dfd24cde4a5f9071aa5effd97f0da27ff0b79eaee02a000d292da893d58018be3edb7dfed7db7d8ae544a87ff6afe599bd3b4ff68997f265cbf812bd8072334c17cad8d7f759f1d6882b7f5cf346108f35c13a6d4fafc8cb70df058a2009e8234e1d982675b14e1b9280bd23833dab6602dad517a83f3371b2c621fb62b8393963b38f2e5c1e8a51c7a5904568ae01f60a4d666426beb92f70d690a76c1842ef8b971c6da56c68788d057209f4d3ec484be62c687b8d05722df1c784b17ba981365f296d12b16d12f2ba27ac1c5bc583837e14d555420835a5421b8add01d0a570948c552323c56438f25e059723dc1040ca2107ec89aff06131981f4bb0a1926f3fdf3f58df5c01b29b9f160f3c1566773fbe1d623f7912bbb5b1fffa2db71a5ec6cef6c7ff2506cbbf2d1ced64e77c7ddfc6463d379b01124009c10e1ac1f9d44c6d01dc82206d511867e5acb215dc7d7378224540da6ac14616c0a60222b381974467e2513a29e0f110ff841416c21bddec0f583c54c98a57c9874c80f0a34178e42d76f1d1f1df927b733b156f3b132a31a7a6439a32f8752298ce1e94974fddae87a1cbdfc1608c58eebbb434fbee8ae66002ce7014cc6341b3ce2b0dc00e295eb1fcbc874841bba9e91c030ae8561c430aa68e6d12cbc8dfc50b9c3a02bd5bdabc94f87c0cc8df9c8761cac2bc7894a8e331889631fefcb8ef3f763d74fde70b7e34555b713c04fbd7020c3bf8d44c4e149d918194b36e2bd61a84af838878f855d21940c0285c516999d9350066a318f78025b71303855b08237cc600b3c7fd5e0a251399599e8dc7d2dab321214455aa0157ca2330561009566547ba2465f8a96ebcbe7c350aaaeeb495814d3e9aad1e092d5ff6f45ee5ebb2215dadecf5cdfefb8decbf732cbb2368b653d37b8d9b0550d27ba85a64e05d74b872aac38857ca93b68ee5dc5ed3b60eea7f86da633f2cca8b546f4b34b1e056b037f6d54672e8c6f98b4e07f01d4d6bc3032ba5c423dbed0bfd6ba4c94c4dc79b93d07a30ae02d5f70f2820a83b70c9ef90b469e05b1089e8aac8a9ab80533cfe31b5117b769ce8529ff925826ffe2c45f20ff8a58257f6dca7f47bc43fe5b133fe01677e18cb8277e446feaf0e6fd249b77a14ad6c48fe984b89dcbf1be78efdc682f7d0d55d05e8665ff495449f7106da8b69decec202a93c83801a9cc1b4e9a15157a4321bf9202eae4eeeccef5cc4c115f5d6366a6c66ed8fa07c9befe7976ebe710afa7439aa084bae8ccaa204e87f083876042ed4cebb3313b634c0bf531740a63161a827dc3c79a638616780a198f4dc0756c0e4aa46f4e7872241bc5c8045ea442a5e90d7b21e889f985ab9eee4515e7e0c5c1eebed3fae3e79fefff896a197c592a23eb69cf0b6168d1d9dbdddf6d3ef96d0b6e53da53657e3fe6bbe8389eef0681e364aaff6760363121aa71566635364d4a0a0b84a08277bdf4b888e58c38e21941e02947cf261c9dc10a8e996063fd9656d75ef350efc3de19f36fb5eff4d038d3e1add637fbd6982397634ecc697dbb5f7c1c2f376fbec160a7aba321a081d6c0f77fb99665e2d34649fd14092a5d8e88acfdd1e121306b0ad9393e8cf8c1ee67ea431cc40319521d447c101cc2b92fa114552a581b6828b735624eade71503f9fa18132c1167251d5883eb7425cfdb25109882589a3ecd89a56a8ea5a4b861e9289b224c727c04a7a04c0ef959348fc0fc7a52d2ec747906453cc1019480ada42b4643ffe49ac6825191aa77d3286fef2ee864dbcbeca45a3eec0dbd581c24e2bf6f1d5c17044fce679920f57c901bbbb138cc9bda0db9e03afeee6a55b8be1bc31f43add2faa56b1717d9a10caf08882d40331370351f30d792c58dd58c12e9d3f1c76c3589cfa8b4afe9cba8e9f84326fe54cd4c3ab2069f56e5ecc96fa6105060c65c682f6d5516ec35273840485f1fc396874d6d2485ad37695d9aa321b61545276db5146e27b5a3fd8f6d1c354a5f68a96ae9d8114d2f5a3af5e41cc1a1a514f13f33a48df94b681410af2029bff4af24f78fe3bf3afa96937bf0e97d5dfd95649f44ecb53936fb2664ccc7c619a779ac387f780606c242df06d163dfc227e65827cbc91a608def8a6111859078329ba7d517c7e1daa8bb96acc569313d9b3e38d53f5afb9e3540f048c1e0ebec95546134d70b1c6f34a416345af260a787d299b4430e7d83516b13b742d869a92d34db68f03c6b58571ea6ed790f9bb1009ab164a6a915f914cc5f90d91a6d902aa8629dd59905274a952dcca892936db257a6ba38f5119a062667436ec3d01f1d4eb773083f5a7c0e09b710ce53f84ee8b881a4f38c049a74117eff151030747db5ac25a245a272d989d35e883b6fcc010ed8f894f4a4efa72765221deb936c511c3fc06cd1d8bac10ca8c1255e37978a356e43479ebf6a5c674b26fdaa5154f82d06ab05d001efab1eb4aa0f492e76f79e500b1f5527fd6e6bb268516592eb1ee63991e79936e771fc91f22b968a83ad03425ebbb360fd17504b0708e9fcf1ad4507000011110000504b03041400080008001c57f24c0000000000000000000000001b0010007374616e646172645f746f6b656e2f7061636b6167652e6a736f6e55580c005d39505b679e4e5bf5011400abe6520002a5b2d4a2e2ccfc3c252b0525033d033d43251d88786e62665e7c5a664e2a48a6b824312f25b12825be243f3b350f454971727e11584d30544d085809572d00504b0708488dc46f4400000060000000504b0304140008000800fc81f34c000000000000000000000000200010007374616e646172645f746f6b656e2f7374616e646172645f746f6b656e2e707955580c00ab3a505bab3a505bf5011400ad56516fa338107ee75758790974b3d19dee2dbaac4ada5e55296d5722b7d26a55210326870a36b24db751d5ffbe636313709236d91e2f608fe79bf17c1f1e1755cdb84438493d2fe7ac4245caa820fca948092a5ae399e7adc26b3447e36a13e1aa2ec98a3d123af63c2f2db110480f2389698679e603d6345c5c04330fc173ae86381192e3545644fec7323d9f911c515c115f90320fd0e72f0896b42eeaa901d77b17406caa84951f82c8485a54b8145b9082ca53412493b88c9aba2e371fc2497089694aee738d324131fb49099fa130cb3811e2b7d3e3988a9c708b2a590709a3275c3664a670619061896728d94822e6778c92c08d6528bfe0ec6716e192dc5049788e53e2775f51cab8753c2fec6caf58a0967f705926387db42929ed1d93d4a17cacfab414fd1b10b1ce628105990cf509081a225e84cbf0eee22a52c2368517e3d6b4ba5f85cb38faf7ebd7e57765d6fcc642136c965c5e5ddcdc864bed6d35644c77e1ed959a56f23653d1f7dbc5fd524db6921d1bd2c813a1b2646bbfa0197926d9fcafa0abd3ca61cd2dd1712cee14ccc2c771410b19c7063e4b66a82bdb25f827503a2d3825832d081401520aa69d7b96045b23404de37eb560cbdf30bf5cf8ada95f5815738274deb1dcd4640eb9bb50b6b20e8c2dfe31108a05c75d11b4e30a7f8eebda72e538b7541ee36e45050097452a3b042bbcfdd97704310a251650cad250a40a5ed873c6506d0b64866ab333750c42ccd1e09f184dcc69d9996fa3d5e80d827be14d52ea71b81da484ced09f7fa0b3b32ea9ce6bc9d66bc2a719499ab59f8fb7d0b301e0fca53f7a1dc39f1b5ef782efca6b2a88f4fb138704a417dac13e89e805ea63bf08b4b9fd3c44f30f3dacc41ad6c2dfcc1fa03efdd406cc3635fca3bde6779003b330b007c6331ca714973e273863146ab6e20dd91e1a6fb4544e64c3697fcb6bd8d3b1c06fb6da01b429d829e0ef34e1017cc7e82901de6fd0831803899d12e7e4063e08db29a9757b7082fecffdbcc85b332a84233ff5b4a6394ac6ca3676ffc17e063dcdeb646c0e267cef488bddcc3fdcd360136eed14e603fadbba0f76a5d772e8ba5cfaa3fb4622d67136da39685cc8f981f9cf26d44177c9f639abd94faeab2245b2692162e8c5fa2e37dc40aaee5d02ee5db1508ddac2a6a04749e2eeb2d55a7d4dc6ee552d780b723abc9fe93dee303ad8697751b16bf748c03a389da0737dd1beaf13f402defaa5fdf59742780d06dde0bcc61b9c94db4b65debf4fee395171c51a2a6db994601dca24968db0f6227dd682de95778bb3dd4fcda1e6fee84bff316033d572f5d7a0debf00504b0708e01d7bccbe030000720d0000504b03040a00000000001c57f24c000000000000000000000000150010007374616e646172645f746f6b656e2f74657374732f55580c00c33a505b679e4e5bf5011400504b03040a00000000001c57f24c000000000000000000000000200010007374616e646172645f746f6b656e2f74657374732f5f5f696e69745f5f2e707955580c005028505b679e4e5bf5011400504b03040a00000000001c57f24c0000000000000000000000002b0010007374616e646172645f746f6b656e2f74657374732f746573745f7374616e646172645f746f6b656e2e707955580c005028505b679e4e5bf5011400504b010215030a0000000000c45df34c0000000000000000000000000f000c000000000000000040ed41000000007374616e646172645f746f6b656e2f55580800c33a505b70fb4f5b504b010215031400080008001c57f24c69020bac240000002a0000001a000c000000000000000040a4813d0000007374616e646172645f746f6b656e2f5f5f696e69745f5f2e7079555808005028505b679e4e5b504b010215030a00000000003d5af24c0000000000000000000000001b000c000000000000000040ed41b90000007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f55580800c33a505b55a34e5b504b010215031400080008003d5af24c8abd28b9ac000000ca00000032000c000000000000000040a481020100007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f5f5f696e69745f5f2e63707974686f6e2d33362e707963555808005028505b55a34e5b504b010215031400080008003d5af24ce9fcf1ad450700001111000038000c000000000000000040a4811e0200007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f7374616e646172645f746f6b656e2e63707974686f6e2d33362e707963555808005028505b55a34e5b504b010215031400080008001c57f24c488dc46f44000000600000001b000c000000000000000040a481d90900007374616e646172645f746f6b656e2f7061636b6167652e6a736f6e555808005d39505b679e4e5b504b01021503140008000800fc81f34ce01d7bccbe030000720d000020000c000000000000000040a481760a00007374616e646172645f746f6b656e2f7374616e646172645f746f6b656e2e707955580800ab3a505bab3a505b504b010215030a00000000001c57f24c00000000000000000000000015000c000000000000000040ed41920e00007374616e646172645f746f6b656e2f74657374732f55580800c33a505b679e4e5b504b010215030a00000000001c57f24c00000000000000000000000020000c000000000000000040a481d50e00007374616e646172645f746f6b656e2f74657374732f5f5f696e69745f5f2e7079555808005028505b679e4e5b504b010215030a00000000001c57f24c0000000000000000000000002b000c000000000000000040a481230f00007374616e646172645f746f6b656e2f74657374732f746573745f7374616e646172645f746f6b656e2e7079555808005028505b679e4e5b504b0506000000000a000a008d0300007c0f00000000',
        params: {
          initialSupply: IconService.IconConverter.toHex('100000000000'),
          decimals: IconService.IconConverter.toHex(18),
          name: 'StandardToken',
          symbol: 'ST',
        },
      },
    },
    expected: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx0000000000000000000000000000000000000000',
      stepLimit: '0x2625a0',
      nid: '0x3',
      nonce: '0x1',
      value: '0x0',
      version: '0x3',
      timestamp: '0x57ccd6ba074f8',
      dataType: 'deploy',
      data: {
        contentType: 'application/zip',
        content:
          '0x504b03040a0000000000c45df34c0000000000000000000000000f0010007374616e646172645f746f6b656e2f55580c00c33a505b70fb4f5bf5011400504b03041400080008001c57f24c0000000000000000000000001a0010007374616e646172645f746f6b656e2f5f5f696e69745f5f2e707955580c005028505b679e4e5bf50114004b2bcacf55d02b2e49cc4b492c4a892fc9cf4ecd53c8cc2dc82f2a5108868a868004b900504b070869020bac240000002a000000504b03040a00000000003d5af24c0000000000000000000000001b0010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f55580c00c33a505b55a34e5bf5011400504b03041400080008003d5af24c000000000000000000000000320010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f5f5f696e69745f5f2e63707974686f6e2d33362e70796355580c005028505b55a34e5bf501140033e6e5e54a9fe717adc5c0c0f09801093001b10310170b0089148614c61c865cc62846468614a660064de6978c40614dc65bbcc12589792989452921f9d9a9797e9a4cb7f88aa122f12520a12290412b198a58801498f8e5aca7af579c9c5f94aa6f6068609464686c6264916891989a6664669a9694989a9a646c6e6c6992629c986a616e649e669e6868a96f186fa01f1f9f999759121faf5750798bc326373fa53427d50ee48e62908301504b07088abd28b9ac000000ca000000504b03041400080008003d5af24c000000000000000000000000380010007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f7374616e646172645f746f6b656e2e63707974686f6e2d33362e70796355580c005028505b55a34e5bf5011400a557df73dbc611c6e10010a4484aa269fd70ec4675d236cca49225b991d371da4a769d7147a533a59a99b29d4141dc51250d92ea0172220dfd24cde4a5f9071aa5effd97f0da27ff0b79eaee02a000d292da893d58018be3edb7dfed7db7d8ae544a87ff6afe599bd3b4ff68997f265cbf812bd8072334c17cad8d7f759f1d6882b7f5cf346108f35c13a6d4fafc8cb70df058a2009e8234e1d982675b14e1b9280bd23833dab6602dad517a83f3371b2c621fb62b8393963b38f2e5c1e8a51c7a5904568ae01f60a4d666426beb92f70d690a76c1842ef8b971c6da56c68788d057209f4d3ec484be62c687b8d05722df1c784b17ba981365f296d12b16d12f2ba27ac1c5bc583837e14d555420835a5421b8add01d0a570948c552323c56438f25e059723dc1040ca2107ec89aff06131981f4bb0a1926f3fdf3f58df5c01b29b9f160f3c1566773fbe1d623f7912bbb5b1fffa2db71a5ec6cef6c7ff2506cbbf2d1ced64e77c7ddfc6463d379b01124009c10e1ac1f9d44c6d01dc82206d511867e5acb215dc7d7378224540da6ac14616c0a60222b381974467e2513a29e0f110ff841416c21bddec0f583c54c98a57c9874c80f0a34178e42d76f1d1f1df927b733b156f3b132a31a7a6439a32f8752298ce1e94974fddae87a1cbdfc1608c58eebbb434fbee8ae66002ce7014cc6341b3ce2b0dc00e295eb1fcbc874841bba9e91c030ae8561c430aa68e6d12cbc8dfc50b9c3a02bd5bdabc94f87c0cc8df9c8761cac2bc7894a8e331889631fefcb8ef3f763d74fde70b7e34555b713c04fbd7020c3bf8d44c4e149d918194b36e2bd61a84af838878f855d21940c0285c516999d9350066a318f78025b71303855b08237cc600b3c7fd5e0a251399599e8dc7d2dab321214455aa0157ca2330561009566547ba2465f8a96ebcbe7c350aaaeeb495814d3e9aad1e092d5ff6f45ee5ebb2215dadecf5cdfefb8decbf732cbb2368b653d37b8d9b0550d27ba85a64e05d74b872aac38857ca93b68ee5dc5ed3b60eea7f86da633f2cca8b546f4b34b1e056b037f6d54672e8c6f98b4e07f01d4d6bc3032ba5c423dbed0bfd6ba4c94c4dc79b93d07a30ae02d5f70f2820a83b70c9ef90b469e05b1089e8aac8a9ab80533cfe31b5117b769ce8529ff925826ffe2c45f20ff8a58257f6dca7f47bc43fe5b133fe01677e18cb8277e446feaf0e6fd249b77a14ad6c48fe984b89dcbf1be78efdc682f7d0d55d05e8665ff495449f7106da8b69decec202a93c83801a9cc1b4e9a15157a4321bf9202eae4eeeccef5cc4c115f5d6366a6c66ed8fa07c9befe7976ebe710afa7439aa084bae8ccaa204e87f083876042ed4cebb3313b634c0bf531740a63161a827dc3c79a638616780a198f4dc0756c0e4aa46f4e7872241bc5c8045ea442a5e90d7b21e889f985ab9eee4515e7e0c5c1eebed3fae3e79fefff896a197c592a23eb69cf0b6168d1d9dbdddf6d3ef96d0b6e53da53657e3fe6bbe8389eef0681e364aaff6760363121aa71566635364d4a0a0b84a08277bdf4b888e58c38e21941e02947cf261c9dc10a8e996063fd9656d75ef350efc3de19f36fb5eff4d038d3e1add637fbd6982397634ecc697dbb5f7c1c2f376fbec160a7aba321a081d6c0f77fb99665e2d34649fd14092a5d8e88acfdd1e121306b0ad9393e8cf8c1ee67ea431cc40319521d447c101cc2b92fa114552a581b6828b735624eade71503f9fa18132c1167251d5883eb7425cfdb25109882589a3ecd89a56a8ea5a4b861e9289b224c727c04a7a04c0ef959348fc0fc7a52d2ec747906453cc1019480ada42b4643ffe49ac6825191aa77d3286fef2ee864dbcbeca45a3eec0dbd581c24e2bf6f1d5c17044fce679920f57c901bbbb138cc9bda0db9e03afeee6a55b8be1bc31f43add2faa56b1717d9a10caf08882d40331370351f30d792c58dd58c12e9d3f1c76c3589cfa8b4afe9cba8e9f84326fe54cd4c3ab2069f56e5ecc96fa6105060c65c682f6d5516ec35273840485f1fc396874d6d2485ad37695d9aa321b61545276db5146e27b5a3fd8f6d1c354a5f68a96ae9d8114d2f5a3af5e41cc1a1a514f13f33a48df94b681410af2029bff4af24f78fe3bf3afa96937bf0e97d5dfd95649f44ecb53936fb2664ccc7c619a779ac387f780606c242df06d163dfc227e65827cbc91a608def8a6111859078329ba7d517c7e1daa8bb96acc569313d9b3e38d53f5afb9e3540f048c1e0ebec95546134d70b1c6f34a416345af260a787d299b4430e7d83516b13b742d869a92d34db68f03c6b58571ea6ed790f9bb1009ab164a6a915f914cc5f90d91a6d902aa8629dd59905274a952dcca892936db257a6ba38f5119a062667436ec3d01f1d4eb773083f5a7c0e09b710ce53f84ee8b881a4f38c049a74117eff151030747db5ac25a245a272d989d35e883b6fcc010ed8f894f4a4efa72765221deb936c511c3fc06cd1d8bac10ca8c1255e37978a356e43479ebf6a5c674b26fdaa5154f82d06ab05d001efab1eb4aa0f492e76f79e500b1f5527fd6e6bb268516592eb1ee63991e79936e771fc91f22b968a83ad03425ebbb360fd17504b0708e9fcf1ad4507000011110000504b03041400080008001c57f24c0000000000000000000000001b0010007374616e646172645f746f6b656e2f7061636b6167652e6a736f6e55580c005d39505b679e4e5bf5011400abe6520002a5b2d4a2e2ccfc3c252b0525033d033d43251d88786e62665e7c5a664e2a48a6b824312f25b12825be243f3b350f454971727e11584d30544d085809572d00504b0708488dc46f4400000060000000504b0304140008000800fc81f34c000000000000000000000000200010007374616e646172645f746f6b656e2f7374616e646172645f746f6b656e2e707955580c00ab3a505bab3a505bf5011400ad56516fa338107ee75758790974b3d19dee2dbaac4ada5e55296d5722b7d26a55210326870a36b24db751d5ffbe636313709236d91e2f608fe79bf17c1f1e1755cdb84438493d2fe7ac4245caa820fca948092a5ae399e7adc26b3447e36a13e1aa2ec98a3d123af63c2f2db110480f2389698679e603d6345c5c04330fc173ae86381192e3545644fec7323d9f911c515c115f90320fd0e72f0896b42eeaa901d77b17406caa84951f82c8485a54b8145b9082ca53412493b88c9aba2e371fc2497089694aee738d324131fb49099fa130cb3811e2b7d3e3988a9c708b2a590709a3275c3664a670619061896728d94822e6778c92c08d6528bfe0ec6716e192dc5049788e53e2775f51cab8753c2fec6caf58a0967f705926387db42929ed1d93d4a17cacfab414fd1b10b1ce628105990cf509081a225e84cbf0eee22a52c2368517e3d6b4ba5f85cb38faf7ebd7e57765d6fcc642136c965c5e5ddcdc864bed6d35644c77e1ed959a56f23653d1f7dbc5fd524db6921d1bd2c813a1b2646bbfa0197926d9fcafa0abd3ca61cd2dd1712cee14ccc2c771410b19c7063e4b66a82bdb25f827503a2d3825832d081401520aa69d7b96045b23404de37eb560cbdf30bf5cf8ada95f5815738274deb1dcd4640eb9bb50b6b20e8c2dfe31108a05c75d11b4e30a7f8eebda72e538b7541ee36e45050097452a3b042bbcfdd97704310a251650cad250a40a5ed873c6506d0b64866ab333750c42ccd1e09f184dcc69d9996fa3d5e80d827be14d52ea71b81da484ced09f7fa0b3b32ea9ce6bc9d66bc2a719499ab59f8fb7d0b301e0fca53f7a1dc39f1b5ef782efca6b2a88f4fb138704a417dac13e89e805ea63bf08b4b9fd3c44f30f3dacc41ad6c2dfcc1fa03efdd406cc3635fca3bde6779003b330b007c6331ca714973e273863146ab6e20dd91e1a6fb4544e64c3697fcb6bd8d3b1c06fb6da01b429d829e0ef34e1017cc7e82901de6fd0831803899d12e7e4063e08db29a9757b7082fecffdbcc85b332a84233ff5b4a6394ac6ca3676ffc17e063dcdeb646c0e267cef488bddcc3fdcd360136eed14e603fadbba0f76a5d772e8ba5cfaa3fb4622d67136da39685cc8f981f9cf26d44177c9f639abd94faeab2245b2692162e8c5fa2e37dc40aaee5d02ee5db1508ddac2a6a04749e2eeb2d55a7d4dc6ee552d780b723abc9fe93dee303ad8697751b16bf748c03a389da0737dd1beaf13f402defaa5fdf59742780d06dde0bcc61b9c94db4b65debf4fee395171c51a2a6db994601dca24968db0f6227dd682de95778bb3dd4fcda1e6fee84bff316033d572f5d7a0debf00504b0708e01d7bccbe030000720d0000504b03040a00000000001c57f24c000000000000000000000000150010007374616e646172645f746f6b656e2f74657374732f55580c00c33a505b679e4e5bf5011400504b03040a00000000001c57f24c000000000000000000000000200010007374616e646172645f746f6b656e2f74657374732f5f5f696e69745f5f2e707955580c005028505b679e4e5bf5011400504b03040a00000000001c57f24c0000000000000000000000002b0010007374616e646172645f746f6b656e2f74657374732f746573745f7374616e646172645f746f6b656e2e707955580c005028505b679e4e5bf5011400504b010215030a0000000000c45df34c0000000000000000000000000f000c000000000000000040ed41000000007374616e646172645f746f6b656e2f55580800c33a505b70fb4f5b504b010215031400080008001c57f24c69020bac240000002a0000001a000c000000000000000040a4813d0000007374616e646172645f746f6b656e2f5f5f696e69745f5f2e7079555808005028505b679e4e5b504b010215030a00000000003d5af24c0000000000000000000000001b000c000000000000000040ed41b90000007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f55580800c33a505b55a34e5b504b010215031400080008003d5af24c8abd28b9ac000000ca00000032000c000000000000000040a481020100007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f5f5f696e69745f5f2e63707974686f6e2d33362e707963555808005028505b55a34e5b504b010215031400080008003d5af24ce9fcf1ad450700001111000038000c000000000000000040a4811e0200007374616e646172645f746f6b656e2f5f5f707963616368655f5f2f7374616e646172645f746f6b656e2e63707974686f6e2d33362e707963555808005028505b55a34e5b504b010215031400080008001c57f24c488dc46f44000000600000001b000c000000000000000040a481d90900007374616e646172645f746f6b656e2f7061636b6167652e6a736f6e555808005d39505b679e4e5b504b01021503140008000800fc81f34ce01d7bccbe030000720d000020000c000000000000000040a481760a00007374616e646172645f746f6b656e2f7374616e646172645f746f6b656e2e707955580800ab3a505bab3a505b504b010215030a00000000001c57f24c00000000000000000000000015000c000000000000000040ed41920e00007374616e646172645f746f6b656e2f74657374732f55580800c33a505b679e4e5b504b010215030a00000000001c57f24c00000000000000000000000020000c000000000000000040a481d50e00007374616e646172645f746f6b656e2f74657374732f5f5f696e69745f5f2e7079555808005028505b679e4e5b504b010215030a00000000001c57f24c0000000000000000000000002b000c000000000000000040a481230f00007374616e646172645f746f6b656e2f74657374732f746573745f7374616e646172645f746f6b656e2e7079555808005028505b679e4e5b504b0506000000000a000a008d0300007c0f00000000',
        params: {
          initialSupply: '0x313030303030303030303030',
          decimals: '0x12',
          name: 'StandardToken',
          symbol: 'ST',
        },
      },
    },
  },
  {
    // Icx Transaction
    value: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'hx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      value: IconService.IconAmount.of(7, IconService.IconAmount.Unit.ICX).toLoop(),
      stepLimit: IconService.IconConverter.toBigNumber(100000),
      nid: IconService.IconConverter.toBigNumber(3),
      nonce: IconService.IconConverter.toBigNumber(1),
      version: IconService.IconConverter.toBigNumber(3),
      timestamp: 1544596599371000,
    },
    expected: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'hx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      value: '0x6124fee993bc0000',
      stepLimit: '0x186a0',
      nid: '0x3',
      nonce: '0x1',
      version: '0x3',
      timestamp: '0x57ccd6ba074f8',
    },
  },
  {
    // Message Transaction
    value: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'hx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      stepLimit: IconService.IconConverter.toBigNumber(100000),
      nid: IconService.IconConverter.toBigNumber(3),
      nonce: IconService.IconConverter.toBigNumber(1),
      value: IconService.IconConverter.toBigNumber(0),
      version: IconService.IconConverter.toBigNumber(3),
      timestamp: 1544596599371000,
      dataType: 'message',
      data: IconService.IconConverter.fromUtf8('Aqua Man'),
    },
    expected: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'hx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      stepLimit: '0x186a0',
      nid: '0x3',
      nonce: '0x1',
      value: '0x0',
      version: '0x3',
      timestamp: '0x57ccd6ba074f8',
      dataType: 'message',
      data: '0x41717561204d616e',
    },
  },
  {
    // Deposit Transaction
    value: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      value: IconService.IconAmount.of(5000, IconService.IconAmount.Unit.ICX).toLoop(),
      stepLimit: IconService.IconConverter.toBigNumber(100000),
      nid: IconService.IconConverter.toBigNumber(3),
      nonce: IconService.IconConverter.toBigNumber(1),
      version: IconService.IconConverter.toBigNumber(3),
      timestamp: 1544596599371000,
      dataType: 'deposit',
      data: {
        action: 'add',
      }
    },
    expected: {
      from: 'hx46293d558d3bd489c3715e7e3648de0e35086bfd',
      to: 'cx87a90bfe8ed49e1a25184ce77fa0d9c4b0484d6a',
      value: '0x10f0cf064dd59200000',
      stepLimit: '0x186a0',
      nid: '0x3',
      nonce: '0x1',
      version: '0x3',
      timestamp: '0x57ccd6ba074f8',
      dataType: 'deposit',
      data: {
        action: 'add',
      }
    }
  }
];

describe('data/Converter', () => {
  describe('toRawTransaction()', () => {
    tests.forEach((test) => {
      it(`should return ${JSON.stringify(test.value)} to ${JSON.stringify(
        test.expected,
      )}`, () => {
        assert.deepEqual(
          IconService.IconConverter.toRawTransaction(test.value),
          test.expected,
        );
      });
    });
  });
});
