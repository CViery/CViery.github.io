const produtos = [
  
    {
     id: 1,
     img:"https://cdn.awsli.com.br/300x300/583/583938/produto/23844786/a3b21c050d.jpg",
     codigo: 98550378,
     item: "ÓLEO ACDELCO SEMISINTÉTICO SAE 5W30 API SN",
     referencia: "5W30",
     marca: "ACDELCO",
     quantidadeMin: 02,
     quantidade: 15
    },
    {
     id: 2,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/kit_troca_oleo_5w30_filtro_astra_acdelco_sae_5w30_api_sn_285_2_60c1d6632056bc5174df2897a9c1d0a8.png",
     codigo: 98550168,
     item: "ÓLEO ACDELCO SINTÉTICO 5W30 API SN",
     referencia: "5W30",
     marca: "ACDELCO",
     quantidadeMin: 02,
     quantidade: 70
    },
    {
     id: 3,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/kit_troca_oleo_0w20_filtro_onix_2017_acima_acdelco_api_sn_281_2_75a0956974104230d501d4d5be889d27.png",
     codigo: 98550549,
     item: "ÓLEO ACDELCO SINTÉTICO 0W20 API SN",
     referencia: "0W20",
     marca: "ACDELCO",
     quantidadeMin: 02,
     quantidade: 26
    },
    {
     id: 4,
     img:"https://cdn.pli-petronas.com/styles/image_340x315/s3/2022-04/Pack%20Syntium%203000%20XS%20SP%205W30%20-%201L.png?VersionId=cEmwv7ik4OkeRKquyr9OabOc_sx7Na7O&itok=yjdoYiwp",
     codigo: 20141,
     item: "ÓLEO PETRONAS SYNTIUM 3000XS 5W30 SINTÉTICO",
     referencia: "5W30",
     marca: "PETRONAS",
     quantidadeMin: 02,
     quantidade: 14
    },
    {
     id: 5,
     img:"https://loja.sinnalveiculos.com.br/image/cache/catalog/CLASSIC-LINE-MOPAR/tvNl4redqrqTGYX6nDCg6MiT5DdPIzxOhGb6vRyljzVbdwVvSuxQRCW1j1-600x315.png",
     codigo: 7092612,
     item: "ÓLEO CLASSIC LINE SINTÉTICO 5W30",
     referencia: "5W30",
     marca: "CLASSIC LINE",
     quantidadeMin: 02,
     quantidade: 7
    },
    {
     id: 6,
     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIibq2snnS9ra-GbYkaDHjAs6LBpkoiNkMBHXdUa4OyjCAL1d0-3zkLPor0SJ5npu4YQ&usqp=CAU",
     codigo: 22040238,
     item: "ÓLEO PARA MOTOR A DIESEL MAXON 5W30",
     referencia: "5W30",
     marca: "MAXON",
     quantidadeMin: 02,
     quantidade: 21
    },
    {
     id: 7,
     img: "https://cdn.pli-petronas.com/styles/image_340x315/s3/2022-04/Pack%20Syntium%207000%20Hybrid%200W20%20-%201L.png?VersionId=2385.eA0G2UpD8IVc2DT7EQ9xnHMcfuU&itok=b4oJOQWA",
     codigo: 20127,
     item: "ÓLEO PETRONAS SYNTIUM 7000 HYBRID 0W20",
     referencia: "0W20",
     marca: "PETRONAS",
     quantidadeMin: 02,
     quantidade: 53
    },
    {
     id: 8,
     img:"https://images.tcdn.com.br/img/img_prod/1025143/90_oleo_freio_dot_4_500ml_ate_485_1_71866f33e0bd4c00593f86e1044f844e.jpg",
     codigo: "ATE6092",
     item: "FLUIDO DE FREIO ATE DOT 4 0,5L ",
     referencia: "DOT 4",
     marca: "ATE",
     quantidadeMin: 02,
     quantidade: 25
    },
    {
     id: 9,
     img:"https://a-static.mlcdn.com.br/1500x1500/oleo-lubrificante-para-transmissao-automatica-e-direcao-hidraulica-dexron-6-acdelco-1l/altese/2012188/6626c20bacd0bf91a201176ea3bac2b4.jpeg",
     codigo: 98550134,
     item: "FLUIDO PARA TRANSMISSÃO AUTOMÁTICA E DIREÇÃO HIDRAULICA DEXRON VI",
     referencia: "DEXRON",
     marca: "ACDELCO",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 10,
     img:"https://www.lcferragens.com.br/wp-content/uploads/arc-c10.jpg",
     codigo: 9909,
     item: "ÓLEO PARA SISTEMAS PNEUMÁTICOS ARC-C10",
     referencia: "ARC-10",
     marca: "ARCDAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 11,
     img:"https://img.jocar.com.br/708629_1000.jpg",
     codigo: 98550868,
     item: "LUBRIFICANTE MINERAL PARA TRASMISSÃO AUTOMATICA E DIREÇÃO HIDRAULICA",
     referencia: "GM",
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 12,
     img:"https://21350.cdn.simplo7.net/static/21350/sku/oleos-e-fluidos-oleo-de-cambio-e-diferencial-oleo-para-transmissao-mecanica-acdelco-75w85-api-gl-4-1l-1629315654133.jpg",
     codigo: 94728699,
     item: "ÓLEO PARA TRANSMISSÃO MECÂNICA 75W85 ACDELCO ",
     referencia: "75W85",
     marca: "ACDELCO",
     quantidadeMin: 4,
     quantidade: 7
    },
    {
     id: 13,
     img:"https://paraflu.ind.br/upload/site_produto/imagem/1/8_m.png?v=20230405121213",
     codigo: 14261,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU ROSA",
     referencia: "ROSA",
     marca: "PARAFLU",
     quantidadeMin: 02,
     quantidade:7
    },
    {
     id: 14,
     img:"https://http2.mlstatic.com/D_NQ_NP_2X_936171-MLB48770603305_012022-V.webp",
     codigo: 23020207,
     item: "LUBRIFICANTE SEMISSINTÉTICO PARA TRANSMISSÃO E DIFERENCIAL75W80",
     referencia: "75W80",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 25
    },
    {
     id: 15,
     img:"https://http2.mlstatic.com/D_NQ_NP_831987-MLB50499790125_062022-O.webp",
     codigo: 21060135,
     item: "FLUIDO LUBRIFICANTE PARA TRASMISSÃO AUTOMÁTICA E SISTEMAS DE DIREÇÃO HIDRÁULICA ATF DEXRON III",
     referencia: "DEXRON III",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 6
    },
    {
     id: 16,
     img:"https://pneubras.vteximg.com.br/arquivos/ids/155728-1000-1000/5w40_selenia_perform_amarelo_aplic-1---2-.png?v=637609241080470000",
     codigo: 19371,
     item: "ÓLEO PETRONAS SELENIA PERFORM SAE 5W40 API SN PLUS",
     referencia: "5W40",
     marca: "PETRONAS",
     quantidadeMin: 02,
     quantidade: 21
    },
    {
     id: 17,
     img:"https://marcaotrocadeoleo.com.br/image/cache/catalog/products_2022/kOXH92aVwj1cGncVX15wrc7594wmH7TmR5rBX9nc6AXl3IJfat-700x500.png",
     codigo: "G S55 553 R2 BRA",
     item: "ÓLEO DE MOTOR ORIGINAL VOLKSWAGEN MAXI PERFORMANCE SAE 5W40 ",
     referencia: "5W40",
     marca: "VOLSKWAGEM",
     quantidadeMin: 02,
     quantidade: 21
    },
    {
     id: 18,
     img:"https://global.cdn.magazord.com.br/comboautopecas/img/2022/11/produto/363/1667908288065.png?ims=fit-in/475x650/filters:fill(white)",
     codigo: "BXO-5W20-CA",
     item: "ÓLEO PARA MOTOR SYNTHETIC MOTOR OIL MOTORCRAFT 5W20",
     referencia: "5W20",
     marca: "MOTORCRAFT",
     quantidadeMin: 02,
     quantidade: 24
    },
    {
     id: 19,
     img:"https://pneubras.vteximg.com.br/arquivos/ids/155772-1000-1000/syntium_1000_semisintetico_10w_40.png?v=637673227524430000",
     codigo: 16525,
     item: "ÓLEO PARA MOTOR PETRONAS SYNTIUM 1000 10W40",
     referencia: "10W40",
     marca: "PETRONAS",
     quantidadeMin: 02,
     quantidade: 19
    },
    {
     id: 20,
     img:"https://cdn.pli-petronas.com/styles/image_275x255/s3/2022-11/PETRONAS%20Syntium%20800%20SE%20SP%2015W40%20340x315.png?VersionId=MMklO0Z83nqGfxOAaoENRKk7XjMghMGc&itok=8E-yePGs",
     codigo: 20095,
     item: "ÓLEO PETRONAS SYNTIUM 800 SE SP 15W40",
     referencia: "15W40",
     marca: "PETRONAS",
     quantidadeMin: 02,
     quantidade: 8
    },
    {
     id: 21,
     img:"https://www.mondomoto.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/d/_/d_nq_np_814252-mlb41784985136_052020-o.png",
     codigo: 7691801,
     item: "ÓLEO PARA MOTOR PRO HONDA SAE 10W30",
     referencia: "10W30",
     marca: "HONDA",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 22,
     img:"https://pneubras.vteximg.com.br/arquivos/ids/155779-1000-1000/sprinta_f500_semissintetico_10w_30--2-.png?v=637675052154000000",
     codigo: 18120,
     item: "ÓLEO PARA MOTOR DE MOTOCICLETA PETRONAS SPRINTA F500 10W30",
     referencia: "10W30",
     marca: "PETRONAS",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 23,
     img:"https://global.cdn.magazord.com.br/comboautopecas/img/2022/11/produto/363/1667908288065.png?ims=fit-in/475x650/filters:fill(white)",
     codigo: "BXO-5W30-GA",
     item: "ÓLEO PARA MOTOR SYNTHETIC MOTOR OIL MOTORCRAFT 5W30",
     referencia: "5W30",
     marca: "MOTORCRAFT",
     quantidadeMin: 02,
     quantidade: 48
    },
    {
     id: 24,
     img:"https://paraflu.ind.br/upload/site_produto/imagem_home/m/10.png?v=20230331010828",
     codigo: 103047,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU AMARELA",
     referencia: "AMARELO",
     marca: "PARAFLU",
     quantidadeMin: 0,
     quantidade: 31
    },
    {
     id: 25,
     img:"https://paraflu.ind.br/upload/site_produto/imagem/5/20_m.png?v=20230330225924",
     codigo: 103016,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU VERDE",
     referencia: "VERDE",
     marca: "PARAFLU",
     quantidadeMin: 00,
     quantidade: 30
    },
    {
     id: 26,
     img:"https://a-static.mlcdn.com.br/800x560/oleo-lubrificante-cambio-trw-4-80w-1-litro-lubrax/autobitts/052384/7b4fade3f212bad5091fe201b75a7c7b.jpeg",
     codigo: "TRM-4",
     item: "LUBRIFICANTE MINERAL PARA TRASMISSÃO AUTOMOTIVA LUBRAX",
     referencia: "TRM-4",
     marca: "PETROBRAS",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 27,
     img:"https://img.irroba.com.br/filters:fill(fff):quality(80)/sermicom/catalog/api/sermicom_citelirr/617965c853c88.jpg",
     codigo: "7647401R-M",
     item: "ÓLEO LUBRIFICANTE PARA CAIXA DE MUDANÇA MECANICA ISAFLUIDO556",
     referencia: "ISAFLUIDO 556",
     marca: "IPIRANGA",
     quantidadeMin: 1,
     quantidade: 6
    },
    {
     id: 28,
     img:"https://http2.mlstatic.com/D_NQ_NP_743692-MLB52812732758_122022-O.webp",
     codigo: "ON-075",
     item: "ÁGUA DESMINERALIZADA ONYX PLUS 1L",
     referencia: "ON-075",
     marca: "ONYX PLUS",
     quantidadeMin: 5,
     quantidade: 13
    },
    {
     id: 29,
     img:"https://cdn.awsli.com.br/600x700/2124/2124853/produto/128999413/5e7ae43874.jpg",
     codigo: "***",
     item: "METALSIL DESIX AROMATIZANTE DE USO GERAL",
     referencia: "***",
     marca: "METASIL",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 30,
     img:"https://images.cws.digital/produtos/gg/07/31/polia-da-correia-de-servico-1813107-1607105002413.jpg",
     codigo: "VKM4794",
     item: "POLIA VKM 4794 ",
     referencia: "W44W-AK",
     marca: "SKF",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 31,
     img:"https://img.jocar.com.br/717474_500.jpg",
     codigo: "5310525300A",
     item: "TENSOR INA",
     referencia: 979548,
     marca: "INA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 32,
     img:"",
     codigo: "CM5G-6K245-EB",
     item: "TENSOR FORD",
     referencia: "CM5G-6K245-EB",
     marca: "FORD",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 33,
     img:"https://www.4x4racer.com.br/media/catalog/product/cache/1/image/1540x1540/275e4d25cc257b6336d039384dcb9c9e/r/o/rolamento_pro_automotive_1.jpg",
     codigo: "PRPOFE177626CP",
     item: "ROLAMENTO PRO AUTOMOTIVE",
     referencia: "PRPOFE177626CP",
     marca: "PRO AUTO",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 34,
     img:"https://images.tcdn.com.br/img/img_prod/992368/tensor_correia_dentada_gm_corsa_celta_prisma_onix_vectra_63_1_a242e3eaec2b29b637ff053d4afc678b.jpg",
     codigo: 904571168,
     item: "TENSOR DA CORREIA GM",
     referencia: 93353848,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 5
    },
    {
     id: 35,
     img:"https://a-static.mlcdn.com.br/1500x1500/correia-dentada-onix-2013-a-2019-original-gm-90531677-chevrolet/primarcaveiculosltda/91cfa2008b3811ebb7fa4201ac1850e0/ab0c8f760a272672fe4d305c71d0444b.jpeg",
     codigo: 90531677,
     item: "CORREIA SINCRONIZADORA GM 90531677",
     referencia: 90531677,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 5
    },
    {
     id: 36,
     img:"https://campelopneus.com.br/wp-content/uploads/2021/01/KS210.jpg",
     codigo: "KS210",
     item: "KIT DE TRASMISSÃO CORREIA E TENSOR KS210 ",
     referencia: 481486,
     marca: "GATES ",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 37,
     img:"",
     codigo: "CT 453",
     item: "CORREIA DENTADA CT 457 CONTINENTAL ",
     referencia: "CT 453",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 38,
     img:"https://http2.mlstatic.com/D_NQ_NP_697463-MLB45652735805_042021-O.webp",
     codigo: 21031759,
     item: "KIT CORREIA MV 6PK 762 ELAST CT ",
     referencia: "6PK762",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 39,
     img:"https://http2.mlstatic.com/D_NQ_NP_697463-MLB45652735805_042021-O.webp",
     codigo: 21031758,
     item: "KIT CORREIA MV 3PK 796 ELAST CT",
     referencia: "3PK796",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 40,
     img:"https://http2.mlstatic.com/D_NQ_NP_697463-MLB45652735805_042021-O.webp",
     codigo: 21031859,
     item: "KIT CORREIA MV 5PK 1051 ELAST CT",
     referencia: "5PK1051",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 41,
     img:"https://http2.mlstatic.com/D_NQ_NP_697463-MLB45652735805_042021-O.webp",
     codigo: 21031757,
     item: "KIT CORREIA MV 6PK 1200 ELAST CT ",
     referencia: "6PK1200",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 42,
     img:"https://images.tcdn.com.br/img/img_prod/150352/correia_poly_v_elastica_vw_voyage_16v_1_6_2019_continental_6pk989_8941_1_b80b50363840705a0f3e1b2e06bfd3b1.jpg",
     codigo: 21031510,
     item: "CORREIA MULTI V CORREIA ACANALADA 6PK 989 ELAST ",
     referencia: "6PK989",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 43,
     img:"https://http2.mlstatic.com/D_NQ_NP_704091-MLB48211005275_112021-V.jpg",
     codigo: 21031750,
     item: "CORREIA MULTI V CORREIA ACANALADA 3PK 796 ELAST ",
     referencia: "3PK796",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 44,
     img:"https://images-americanas.b2w.io/produtos/01/00/oferta/43991/4/43991483_1GG.jpg",
     codigo: 24579487,
     item: "CORREIA DE TRANSMISSÃO",
     referencia: "GM",
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 45,
     img:"https://images.tcdn.com.br/img/img_prod/150352/correia_poly_v_alternador_amarok_2015_2_0_original_contitech_6pk1560_11478_1_6b4f82dcfa01cb7918e3dd52532c2cac.jpg",
     codigo: "6PK1560",
     item: "CORREIA POLY-V 6PK1560",
     referencia: "6PK1560",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 46,
     img:"https://a-static.mlcdn.com.br/280x210/correia-poly-v-5pk-1770-cobalt-1-4-e-1-8-continental/santaluziaautocenter/5a44e1828bfb11ec91c34201ac185055/8ea9e56873aef9987157af1198257617.jpeg",
     codigo: 21035085,
     item: "CORREIA MV 5PK 1770 IMP ",
     referencia: "5PK1770",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 47,
     img:"https://http2.mlstatic.com/D_NQ_NP_940995-MLB45511609394_042021-O.webp",
     codigo: 21031546,
     item: "CORREIA MULTI V CORREIA ACANALADA 6PK 1200 ELAST",
     referencia: "6PK1200",
     marca: "CONTINENTAL",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 48,
     img:"https://galpaoap.vteximg.com.br/arquivos/ids/156032-1000-1000/Correia-polyv-dayco.jpg?v=637460419526270000",
     codigo: 1165,
     item: "CORREIA POLY-V BELT 5PK1165 DAYCO",
     referencia: "5PK1165",
     marca: "DAYCO",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 49,
     img:"https://cf.shopee.com.br/file/0fb55197827a9fb638e854dfc153a354",
     codigo: 24579488,
     item: "CORREIA DE TRANSMISSÃO GM ",
     referencia: 24579488,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 50,
     img:"",
     codigo: "03212028CN",
     item: "CARCACA",
     referencia: "03212026CN",
     marca: "VOLSKWAGEM",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 51,
     codigo: "030103464A",
     item: "SEPARADOR ",
     referencia: "030103464A",
     marca: "VOLSKWAGEM",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 52,
     img:"https://dw0jruhdg6fis.cloudfront.net/producao/10538565/G/ub162.jpg",
     codigo: "UB0162",
     item: "BOMBA D´ÁGUA URBA UB0162 - FIAT\/GM",
     referencia: "UB0162",
     marca: "URBA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 53,
     img:"https://dw0jruhdg6fis.cloudfront.net/producao/10641980/G/ub630.jpg",
     codigo: "UB0630",
     item: "BOMBA D´ÁGUA URBA - VW",
     referencia: "UB0630",
     marca: "URBA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 54,
     img:"https://http2.mlstatic.com/D_NQ_NP_685946-MLB46401916069_062021-O.jpg",
     codigo: "SBB271J",
     item: "BRONZINA DE BIELA SBB-271-J-0,25 SPA",
     referencia: "SBB271J",
     marca: "METALLEVEL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 55,
     img:"https://http2.mlstatic.com/D_NQ_NP_899557-MLB53966586915_022023-V.jpg",
     codigo: "SBC880J",
     item: "BRONZINA DE MANCAL SBC-880-J-0,25",
     referencia: "SBC880J",
     marca: "METALLEVEL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 56,
     img:"https://wega.com.ar/uploads/AKX-1965C.jpg",
     codigo: "AKX1965\/C",
     item: "FILTRO DE CABINE AKX 1965\/C WEGA",
     referencia: "AKX1965\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 57,
     img:"https://wega.com.ar/uploads/AKX-2161.jpg",
     codigo: "AKX2161",
     item: "FILTRO DE CABINE AKX2161 WEGA",
     referencia: "AKX2161",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 5
    },
    {
     id: 58,
     img:"https://wega.com.ar/uploads/AKX-1937.jpg",
     codigo: "AKX1937",
     item: "FILTRO DE CABINE AKX1937 WEGA",
     referencia: "AKXQ937",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 59,
     img:"https://wega.com.ar/uploads/AKX-1939.jpg",
     codigo: "AKX1939",
     item: "FILTRO DE CABINE AKX1939 WEGA",
     referencia: "AKX1939",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 60,
     img:"https://wega.com.ar/uploads/AKX-35323.jpg",
     codigo: "AKX35323",
     item: "FILTRO DE CABINE AKX35323 WEGA",
     referencia: "AKX35323",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 7
    },
    {
     id: 61,
     img:"https://wega.com.ar/uploads/AKX-35321.jpg",
     codigo: "AKX35321",
     item: "FILTRO DE CABINE AKX35321 WEGA",
     referencia: "AKX35321",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 62,
     img:"https://wega.com.ar/uploads/AKX-1375.jpg",
     codigo: "AKX1375",
     item: "FILTRO DE CABINE AKX1375 WEGA",
     referencia: "AKX1375",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 63,
     img:"https://wega.com.ar/uploads/AKX-2108C.jpg",
     codigo: "AKX2108\/C",
     item: "FILTRO DE CABINE AKX 2108\/C WEGA",
     referencia: "AKX2108\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 64,
     img:"https://wega.com.ar/uploads/AKX-35293.jpg",
     codigo: "AKX35293",
     item: "FILTRO DE CABINE AKX35293 WEGA",
     referencia: "AKX35293",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 65,
     img:"https://wega.com.ar/uploads/AKX-35723.jpg",
     codigo: "AKX35723",
     item: "FILTRO DE CABINE AKX35723 WEGA",
     referencia: "AKX35723",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 5
    },
    {
     id: 66,
     img:"https://wega.com.ar/uploads/AKX-3536.jpg",
     codigo: "AKX3536",
     item: "FILTRO DE CABINE AKX3536 WEGA",
     referencia: "AKX3536",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 67,
     img:"https://wega.com.ar/uploads/AKX-3562.jpg",
     codigo: "AKX3562",
     item: "FILTRO DE CABINE AKX3562 WEGA",
     referencia: "AKX3562",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 68,
     img:"https://wega.com.ar/uploads/AKX-35159.jpg",
     codigo: "AKX35159",
     item: "FILTRO DE CABINE AKX35159 WEGA",
     referencia: "AKX35159",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 69,
     img:"https://wega.com.ar/uploads/AKX-35280.jpg",
     codigo: "AKX35280",
     item: "FILTRO DE CABINE AKX35280 WEGA",
     referencia: "AKX35280",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 70,
     img:"https://wega.com.ar/uploads/AKX-35281C.jpg",
     codigo: "AKX35281\/C",
     item: "FILTRO DE CABINE AKX35281\/C WEGA",
     referencia: "AKX35281\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 71,
     img:"https://http2.mlstatic.com/D_NQ_NP_908494-MLA52624317233_112022-O.webp",
     codigo: "ACP312",
     item: "FILTRO DE CABINE ACP312 TECFIL",
     referencia: "ACP312",
     marca: "TECFIL",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 72,
     img:"https://wega.com.ar/uploads/AKX-35163.jpg",
     codigo: "AKX35163",
     item: "FILTRO DE CABINE AKX35163 WEGA",
     referencia: "AKX35163",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 73,
     img:"https://wega.com.ar/uploads/AKX-35634.jpg",
     codigo: "AKX35634",
     item: "FILTRO DE CABINE AKX35634 WEGA",
     referencia: "AKX35634",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 74,
     img:"https://wega.com.ar/uploads/AKX-1113C.jpg",
     codigo: "AKX1113\/C",
     item: "FILTRO DE CABINE AKX1113\/C WEGA",
     referencia: "AKX1113\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 75,
     img:"https://wega.com.ar/uploads/AKX-1129F.jpg",
     codigo: "AKX1129F",
     item: "FILTRO DE CABINE AKX1129F WEGA",
     referencia: "AKX1129F",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 5
    },
    {
     id: 76,
     img:"https://wega.com.ar/uploads/AKX-1100C.jpg",
     codigo: "AKX1100\/C",
     item: "FILTRO DE CABINE AKX1100\/C WEGA",
     referencia: "AKX1100\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 77,
     img:"https://wega.com.ar/uploads/AKX-2007.jpg",
     codigo: "AKX2007",
     item: "FILTRO DE CABINE AKX2007 WEGA",
     referencia: "AKX2007",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 78,
     img:"https://wega.com.ar/uploads/AKX-1963.jpg",
     codigo: "AKX1963",
     item: "FILTRO DE CABINE AKX1963 WEGA",
     referencia: "AKX1963",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 79,
     img:"https://wega.com.ar/uploads/AKX-2005.jpg",
     codigo: "AKX2005",
     item: "FILTRO DE CABINE AKX2005 WEGA",
     referencia: "AKX2005",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 80,
     img:"https://images.cws.digital/produtos/gg/71/61/filtro-do-ar-condicionado-1096171-1596822638404.jpg",
     codigo: "AKX1974\/C",
     item: "FILTRO DE CABINE AKX1974\/C WEGA",
     referencia: "AKX1974\/C",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 81,
     img:"https://wega.com.ar/uploads/AKX-1958.jpg",
     codigo: "AKX1958",
     item: "FILTRO DE CABINE AKX1958 WEGA",
     referencia: "AKX1958",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 82,
     img:"https://wega.com.ar/uploads/AKX-1984.jpg",
     codigo: "AKX1984",
     item: "FILTRO DE CABINE AKX1984 WEGA",
     referencia: "AKX1984",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 5
    },
    {
     id: 83,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_ar_condicionado_mahle_la301_hyundai_tucson_kia_659_1_404929d0d7098d1a6146d7a6d7c86952.jpg",
     codigo: "LA301",
     item: "FILTRO DE CABINE LA301 MAHLE",
     referencia: "LA301",
     marca: "MAHLE",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 84,
     img:"https://wega.com.ar/uploads/AKX-1998.jpg",
     codigo: "AKX1998",
     item: "FILTRO DE CABINE AKX1998 WEGA",
     referencia: "AKX1998",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 85,
     img:"https://wega.com.ar/uploads/AKX-2014.jpg",
     codigo: "AKX2014",
     item: "FILTRO DE CABINE AKX2014 WEGA",
     referencia: "AKX2014",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 86,
     img:"https://wega.com.ar/uploads/AKX-35347F.jpg",
     codigo: "AKX35347F",
     item: "FILTRO DE CABINE AKX35347F WEGA",
     referencia: "AKX35347F",
     marca: "WEGA",
     aplicacao:"",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 87,
     img:"https://wega.com.ar/uploads/AKX-1959.jpg",
     codigo: "AKX1959",
     item: "FILTRO DE CABINE AKX1959 WEGA",
     referencia: "AKX1959",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 88,
     img:"https://wega.com.ar/uploads/AKX-1446.jpg",
     codigo: "AKX1446",
     item: "FILTRO DE CABINE AKX1446 WEGA",
     referencia: "AKX1446",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 89,
     img:"https://wega.com.ar/uploads/AKX-1399.jpg",
     codigo: "AKX1399",
     item: "FILTRO DE CABINE AKX1399 WEGA",
     referencia: "AKX1399",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 90,
     img:"https://wega.com.ar/uploads/AKX-1397.jpg",
     codigo: "AKX1397",
     item: "FILTRO DE CABINE AKX1397 WEGA",
     referencia: "AKX1397",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 9
    },
    {
     id: 91,
     img:"https://wega.com.ar/uploads/AKX-1215.jpg",
     codigo: "AKX1215",
     item: "FILTRO DE CABINE AKX1215 WEGA ",
     referencia: "AKX1215",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 92,
     img:"https://wega.com.ar/uploads/AKX-1956.jpg",
     codigo: "AKX1956",
     item: "FILTRO DE CABINE AKX1956 WEGA",
     referencia: "AKX1956",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 93,
     img:"https://wega.com.ar/uploads/AKX-1995.jpg",
     codigo: "AKX1995",
     item: "FILTRO DE CABINE AKX1995 WEGA",
     referencia: "AKX1995",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 94,
     img:"https://wega.com.ar/uploads/AKX-1993C.jpg",
     codigo: "AKX1993\/C",
     item: "FILTRO DE CABINE AKX1993\/C WEGA",
     referencia: "AKX1993\/C",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 95,
     img:"https://wega.com.ar/uploads/AKX-35126.jpg",
     codigo: "AKX35126",
     item: "FILTRO DE CABINE AKX35126 WEGA ",
     referencia: "AKX35126",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 96,
     img:"https://wega.com.ar/uploads/AKX-1971.jpg",
     codigo: "AKX1971",
     item: "FILTRO DE CABINE AKX1971 WEGA",
     referencia: "AKX1971",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 97,
     img:"https://wega.com.ar/uploads/AKX-1701.jpg",
     codigo: "AKX1701",
     item: "FILTRO DE CABINE AKX1701 WEGA",
     referencia: "AKX1701",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 98,
     img:"https://wega.com.ar/uploads/AKX-35175F.jpg",
     codigo: "AKX35175F",
     item: "FILTRO DE CABINE AKX35175F WEGA",
     referencia: "AKX35175F",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 99,
     img:"https://cf.shopee.com.br/file/5740bac502496d8836f5150842367631",
     codigo: "LA1099\/S",
     item: "FILTRO DE CABINE LA1099\/S MAHLE",
     referencia: "LA1099\/S",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 100,
     img:"https://wega.com.ar/uploads/AKX-35345-2.jpg",
     codigo: "AKX35345-2",
     item: "FILTRO DE CABINE AKX35345-2 WEGA ",
     referencia: "AKX35345-2",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 101,
     img:"https://wega.com.ar/uploads/AKX-35157.jpg",
     codigo: "AKX35157",
     item: "FILTRO DE CABINE AKX35157 WEGA",
     referencia: "AKX35157",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 102,
     img:"https://http2.mlstatic.com/D_NQ_NP_961987-MLB49575044395_042022-O.webp",
     codigo: "M50JD",
     item: "BATERIA MOURA M50JD",
     referencia: "50JD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 103,
     img:"https://maxonoil.com.br/wp-content/uploads/2022/12/10_PREMIUM-20W50-API-SL-_-MINERAL-1024x1024.png",
     codigo: "MO2050",
     item: "ÓLEO PARA MOTOR MAXON MINERAL 20W50 API SL",
     referencia: "MO2050",
     marca: "MAXON",
     quantidadeMin: 112,
     quantidade: 8
    },
    {
     id: 104,
     img:"https://maxonoil.com.br/wp-content/uploads/2022/12/07_ULTRA-5W40-API-SN-_-ACEA-A3_B4-12-1024x1024.png",
     codigo: "MO540",
     item: "ÓLEO PARA MOTOR MAXON SINTÉTICO 5W40",
     referencia: "MO540",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 20
    },
    {
     id: 105,
     img:"https://wega.com.ar/uploads/AKX-1456C.jpg",
     codigo: "AKX1456\/C",
     item: "FILTRO DE CABINE AKX 1456\/C WEGA",
     referencia: "AKX1456\/C",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 106,
     img:"https://cdn.awsli.com.br/600x450/2488/2488646/produto/184920159/45babaf21c.jpg",
     codigo: "UB0167",
     item: "BOMBA D'ÁGUA UB0167",
     referencia: "UB0167",
     marca: "URBA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 107,
     img:"https://maxonoil.com.br/wp-content/uploads/2022/12/06_ULTRA-0W20-API-SN-_-ILSAC-GF-5-1024x1024.png",
     codigo: "MO020",
     item: "ÓLEO PARA MOTOR MAXON SINTÉTICO 0W20",
     referencia: "MO020",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 25
    },
    {
     id: 108,
     img:"https://maxonoil.com.br/wp-content/uploads/2022/12/17_LONG-LIFE-10W30-API-SL.png",
     codigo: "MO1030",
     item: "ÓLEO PARA MOTOR MAXON LONGLIFE 10W30",
     referencia: "MO1030",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 33
    },
    {
     id: 109,
     img:"https://maxonoil.com.br/wp-content/uploads/2022/12/14_LONG-LIFE-5W30-API-SL.png",
     codigo: "MO530",
     item: "ÓLEO PARA MOTOR MAXON LONGLIFE 5W30",
     referencia: "MO530",
     marca: "MAXON",
     quantidadeMin: 0,
     quantidade: 20
    },
    {
     id: 110,
     img:"https://21350.cdn.simplo7.net/static/21350/sku/82257649842-1-Pke885.png",
     codigo: 300200,
     item: "CAR LUB LUBRIFICANTE ANTIFERRUGEM CAR80",
     referencia: 300200,
     marca: "CAR80",
     quantidadeMin: 0,
     quantidade: 12
    },
    {
     id: 111,
     img:"https://alvoradalub.com.br/wp-content/uploads/2016/08/42.png",
     codigo: 300230,
     item: "CAR80 TUNE UP FORMULA PARA LIMPAR BICOS INJETORES CAR80",
     referencia: 300230,
     marca: "CAR80",
     quantidadeMin: 0,
     quantidade: 10
    },
    {
     id: 112,
     img:"https://57329.cdn.simplo7.net/static/57329/sku/quimicos-manutencao-em-geral-limpa-contato-eletrico-revome-graxas-residuos-de-umidade-que-prejudicam-os-contatos-eletricos-e-eletronicos-recupera-a-condutividade-dos-contatos-limpa-e-seca-instantaneamente-300ml-200g-marca-snap-on--1648764822260.png",
     codigo: 300200,
     item: "CAR CONTATO LIMPA CONTATO CAR80",
     referencia: 300200,
     marca: "CAR80",
     quantidadeMin: 0,
     quantidade: 6
    },
    {
     id: 113,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_de_oleo_fram_ph11457_golf_fox_polo_virtus_audi_a3_a3_sedan_237_1_9ba417cb6cef70f475908180e1a1164e.jpg",
     codigo: "PH11457",
     item: "FILTRO DE ÓLEO PH11457 FRAM ",
     referencia: "PH11457",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 114,
     img:"https://autorama.vtexassets.com/arquivos/ids/174911/816282.jpg?v=637744205199370000",
     codigo: "OC1449",
     item: "FILTRO DE ÓLEO OC1449 MAHLE(PH11457)",
     referencia: "PH11457",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 115,
     img:"https://http2.mlstatic.com/D_NQ_NP_657219-MLB50175033990_062022-O.webp",
     codigo: "OX339\/2D",
     item: "FILTRO DE ÓLEO OX339\/2D MAHLE",
     referencia: "OX339\/2D",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 116,
     img:"https://wega.com.ar/uploads/WOE%20624.jpg",
     codigo: "WOE624",
     item: "FILTRO DE ÓLEO WOE624 WEGA",
     referencia: "WOE624",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 117,
     img:"https://wega.com.ar/uploads/WO-121.jpg",
     codigo: "WO121",
     item: "FILTRO DE ÓLEO WO121 WEGA",
     referencia: "WO121",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 118,
     img:"https://wega.com.ar/uploads/WO-205.jpg",
     codigo: "WO205",
     item: "FILTRO DE ÓLEO WO205 WEGA",
     referencia: "WO205",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 119,
     img:"https://images.tcdn.com.br/img/img_prod/1027273/filtro_de_oleo_lubrificante_tecfil_psl76_749_1_3e3218c9a4840daef686fb386c6f2717_20221031175046.jpg",
     codigo: "PSL76",
     item: "FILTRO DE ÓLEO PSL76 TECFIL",
     referencia: "PSL76",
     marca: "TECFIL",
     quantidadeMin: 1,
     quantidade: 0
    },
    {
     id: 120,
     img:"https://wega.com.ar/uploads/WO-200.jpg",
     codigo: "WO200",
     item: "FILTRO DE ÓLEO WO200 WEGA",
     referencia: "WO200",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 121,
     img:"https://images.cws.digital/produtos/gg/82/66/filtro-de-oleo-1036682-1372122956659.jpg",
     codigo: "PH5796",
     item: "FILTRO DE ÓLEO PH5796 FRAM ",
     referencia: "PH5796",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 122,
     img:"https://decorpecas.fbitsstatic.net/img/p/filtro-de-oleo-do-motor-mahle-ox1018d-cruze-2011-a-2018-tracker-2014-a-2016-sonic-72140/258650.jpg?w=520&h=520&v=no-change&qs=ignore",
     codigo: "OX1018D",
     item: "FILTRO DE ÓLEO OX1018D MAHLE",
     referencia: "OX1018D",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 123,
     img:"https://wega.com.ar/uploads/WOE-313.jpg",
     codigo: "WOE313",
     item: "FILTRO DE WOE313 WEGA",
     referencia: "WOE313",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 124,
     img:"https://a-static.mlcdn.com.br/1500x1500/filtro-de-oleo-mahle-ox1041d-corolla-1-8-2-0/almanaquedaspecas/25029corolla/fcf97422c0b5bc380657190a5ad802a5.jpeg",
     codigo: "OX1041D",
     item: "FILTRO DE ÓLEO OX1041D MAHLE ",
     referencia: "OX1041D",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 125,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_de_oleo_fram_ph4967_linha_toyota_corolla_etios_suzuki_lifan_83_1_1feed41fae8328472c9d9d23e089117c.jpg",
     codigo: "PH4967",
     item: "FILTRO DE ÓLEO PH4967 FRAM",
     referencia: "PH4967",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 126,
     img:"https://i0.wp.com/hiperbr.com.br/wp-content/uploads/2022/05/840-2.jpg?fit=1280%2C960&ssl=1",
     codigo: "PH4967A",
     item: "FILTRO DE ÓLEO PH4967A FRAM",
     referencia: "PH4967A",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 127,
     img:"https://wega.com.ar/uploads/WO-133.jpg",
     codigo: "WO133",
     item: "FILTRO DE ÓLEO WO133 WEGA",
     referencia: "WO133",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 128,
     img:"https://wega.com.ar/uploads/WO-181.jpg",
     codigo: "WO181",
     item: "FILTRO DE ÓLEO WO181 WEGA",
     referencia: "WO181",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 129,
     img:"https://wega.com.ar/uploads/WO-139.jpg",
     codigo: "WO139",
     item: "FILTRO DE ÓLEO WO139 WEGA",
     referencia: "WO139",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 130,
     img:"https://http2.mlstatic.com/D_NQ_NP_609993-MLB52507190750_112022-V.jpg",
     codigo: "OX175D",
     item: "FILTRO DE ÓLEO OX175D MAHLE",
     referencia: "OX175D",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 131,
     img:"https://wega.com.ar/uploads/WO-156.jpg",
     codigo: "WO156",
     item: "FILTRO DE ÓLEO WO156 WEGA",
     referencia: "WO156",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 132,
     img:"https://images.tcdn.com.br/img/img_prod/1027273/filtro_de_oleo_lubrificante_hyundai_hb20_hb20s_creta_nissan_versa_e_renault_captur_duster_duster_oro_713_1_16515510efcdc7a3289d14b60bb34684_20221031175106.jpg",
     codigo: "JFOH00",
     item: "FILTRO DE ÓLEO JFOH00 WEGA",
     referencia: "JFOH00",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 133,
     img:"https://wega.com.ar/uploads/JFO%20H01.jpg",
     codigo: "JFO0H01",
     item: "FILTRO DE ÓLEO JFO0H01 WEGA",
     referencia: "JFO0H01",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 134,
     img:"https://a-static.mlcdn.com.br/1500x1500/filtro-de-oleo-lubrificante-mahle-metalleve-oc600/evolutionstorejpcasabona1/117/4866cc31854520f34a839bb321b52527.jpg",
     codigo: "OC100",
     item: "FILTRO DE ÓLEO OC100 MAHLE",
     referencia: "OC100",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 135,
     img:"https://wega.com.ar/uploads/JFO%20F03.jpg",
     codigo: "JFO0F03",
     item: "FILTRO DE ÓLEO JFO0F03 WEGA",
     referencia: "JFO0F03",
     marca: "WEGA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 136,
     img:"https://raceking.com.br/media/catalog/product/cache/3/image/650x/040ec09b1e35df139433887a97daa66f/p/h/ph3614_3.jpg",
     codigo: "PH3614",
     item: "FILTRO DE ÓLEO PH3614 FRAM",
     referencia: "PH3614",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 137,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_de_oleo_fram_ph5566_peugeot_106_206_208_307_renault_laguna_subaru_impreza_85_1_8c6d4a5433379365f0bb26f3c055959f.jpg",
     codigo: "PH5566",
     item: "FILTRO DE ÓLEO PH5566 FRAM",
     referencia: "PH5566",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 138,
     img:"https://http2.mlstatic.com/D_NQ_NP_928274-MLB53099842542_122022-O.jpg",
     codigo: "PH3593A",
     item: "FILTRO DE ÓLEO PH3593A FRAM",
     referencia: "PH3593A",
     marca: "FRAM",
     quantidadeMin: 4,
     quantidade: 4
    },
    {
     id: 139,
     img:"https://http2.mlstatic.com/D_NQ_NP_824428-MLB27584197963_062018-O.webp",
     codigo: "OC205",
     item: "FILTRO DE ÓLEO OC205 MAHLE",
     referencia: "OC205",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 140,
     img:"https://http2.mlstatic.com/D_NQ_NP_870730-MLB51481994870_092022-O.webp",
     codigo: "OC504",
     item: "FILTRO DE ÓLEO OC504 MAHLE",
     referencia: "OC504",
     marca: "MAHLE",
     quantidadeMin: 5,
     quantidade: 8
    },
    {
     id: 141,
     img:"https://decorpecas.fbitsstatic.net/img/p/filtro-de-oleo-do-motor-mahle-oc506-audi-fiat-147-uno-escort-focus-ecosport-ka-fiesta-hilux-72206/258716.jpg?w=520&h=520&v=no-change&qs=ignore",
     codigo: "OC506",
     item: "FILTRO DE ÓLEO OC506 MAHLE",
     referencia: "OC506",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 5
    },
    {
     id: 142,
     img:"https://http2.mlstatic.com/D_NQ_NP_893927-MLB51498396142_092022-O.jpg",
     codigo: "OC600",
     item: "FILTRO DE ÓLEO OC600 MAHLE",
     referencia: "OC600",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 6
    },
    {
     id: 143,
     img:"https://vitoriacenterparts.com/wp-content/uploads/2020/01/filtro-de-oleo-gol-g4-g5-voyage-saveiro-10-16-1500683964.jpg",
     codigo: "OC522",
     item: "FILTRO DE ÓLEO OC522 MAHLE",
     referencia: "OC522",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 144,
     img:"https://http2.mlstatic.com/D_NQ_NP_896663-MLA53661754069_022023-V.jpg",
     codigo: "PH10908",
     item: "FILTRO DE ÓLEO PH10908 MIX 3\/2-2 FRAM",
     referencia: "PH10908",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 145,
     img:"https://http2.mlstatic.com/D_NQ_NP_683686-MLB47428967953_092021-V.jpg",
     codigo: "M70KD",
     item: "BATERIA MOURA M70KD",
     referencia: "M79KD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 146,
     img:"https://http2.mlstatic.com/D_NQ_NP_648964-MLB49576472451_042022-O.jpg",
     codigo: "M60GD",
     item: "BATERIA MOURA M60GD",
     referencia: "M60GD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 147,
     img:"",
     codigo: "M60GI",
     item: "BATERIA MOURA M60GI",
     referencia: "M60GI",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 148,
     img:"",
     codigo: "MF60AD",
     item: "BATERIA MOURA MF60AD",
     referencia: "MF60AD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 149,
     img:"",
     codigo: "M80RD",
     item: "BATERIA MOURA M80RD",
     referencia: "M80RD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 150,
     codigo: "M75LD",
     item: "BATERIA MOURA M75LD",
     referencia: "M75LD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 151,
     codigo: "M60AD",
     item: "BATERIA MOURA M60AD",
     referencia: "M60AD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 152,
     codigo: "M40SD",
     item: "BATERIA MOURA M40SD",
     referencia: "M40SD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 4
    },
    {
     id: 153,
     codigo: "M48FD",
     item: "BATERIA MOURA M48FD",
     referencia: "M48FD",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 3
    },
    {
     id: 154,
     codigo: "M50ED",
     item: "BATERIA MOURA M50ED",
     referencia: "M50ED",
     marca: "MOURA",
     quantidadeMin: 1,
     quantidade: 9
    },
    {
     id: 155,
     img:"https://cdn.awsli.com.br/600x450/490/490850/produto/45372367/21a13a9a37.jpg",
     codigo: "KL635",
     item: "FILTRO DE COMBUSTIVEL KL635 MAHLE",
     referencia: "KL635",
     marca: "MAHLE",
     quantidadeMin: 4,
     quantidade: 1
    },
    {
     id: 156,
     img:"https://wega.com.ar/uploads/JFC-F00.jpg",
     codigo: "JFCF00",
     item: "FILTRO DE COMBUSTIVEL JFCF00 WEGA ",
     referencia: "JFCF00",
     marca: "WEGA",
     quantidadeMin: 4,
     quantidade: 1
    },
    {
     id: 157,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_de_combustivel_fram_g9889f_gm_2_0_2_4_03_119_1_f95c9b815ceb03c2ab50cfaf5f98280b.jpg",
     codigo: "G9889F",
     item: "FILTRO DE COMBUSTIVEL G9889F FRAM",
     referencia: "G9889F",
     marca: "FRAM",
     quantidadeMin: 4,
     quantidade: 3
    },
    {
     id: 158,
     img:"https://http2.mlstatic.com/D_NQ_NP_815395-MLB47981444396_102021-O.jpg",
     codigo: "KL582",
     item: "FILTRO DE COMBUSTIVEL KL582 MAHLE",
     referencia: "KL582",
     marca: "MAHLE",
     quantidadeMin: 5,
     quantidade: 20
    },
    {
     id: 159,
     img:"https://cf.shopee.com.br/file/3f476c65e578cd9dd7e1d6ea3b628146",
     codigo: "KL583",
     item: "FILTRO DE COMBUSTIVEL KL583 MAHLE",
     referencia: "KL583",
     marca: "MAHLE",
     quantidadeMin: 5,
     quantidade: 18
    },
    {
     id: 160,
     img:"https://a-static.mlcdn.com.br/1500x1500/filtro-de-combustivel-gol-corcel-fiat-gm-alcool-gasolina-fram/autopecasfama/120746/cf13e90fc9f6fc5f4e431c5ec1bab93f.jpeg",
     codigo: "G5188",
     item: "FILTRO DE COMBUSTIVEL G5188 FRAM",
     referencia: "G5188",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 1
    },
    {
     id: 161,
     img:"https://images.cws.digital/produtos/gg/36/22/filtro-de-combustivel-1352236-1628283927063.jpg",
     codigo: "KL420",
     item: "FILTRO DE COMBUSTIVEL KL420 MAHLE",
     referencia: "KL420",
     marca: "MAHLE",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 162,
     img:"https://images.tcdn.com.br/img/img_prod/1039962/filtro_combustivel_fram_g10226f_ford_123_2_b97ad403a81aef6ffca2cd4c42022c09.jpg",
     codigo: "G10226F",
     item: "FILTRO DE COMBUSTIVEL G10226F FRAM",
     referencia: "G10226F",
     marca: "FRAM",
     quantidadeMin: 1,
     quantidade: 2
    },
    {
     id: 163,
     img:"https://d3kgto4geuj773.cloudfront.net/Custom/Content/Products/20/74/20742_abracadeira-ac-rosca-s-fim-l-9mm-32-50-1144_m2_638051335258849450.png",
     codigo: 53903851,
     item: "ABRAÇADEIRA SEM FIM ZN 32X50X9",
     referencia: 53903851,
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 25
    },
    {
     id: 164,
     img:"https://images.tcdn.com.br/img/img_prod/1100542/abracadeira_rosca_sem_fim_super_25_38_fita_9mm_valor_un_metal_matrix_429_1_7df5e74f6e92e54e618396842c0553f8.jpg",
     codigo: 53902538,
     item: "ABRAÇADEIRA SEM FIM ZN 25X40X9",
     referencia: 53902538,
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 23
    },
    {
     id: 165,
     img:"https://images.tcdn.com.br/img/img_prod/1100542/abracadeira_rosca_sem_fim_super_25_38_fita_9mm_valor_un_metal_matrix_429_1_7df5e74f6e92e54e618396842c0553f8.jpg",
     codigo: 53901422,
     item: "ABRAÇADEIRA SEM FIM ZNB 12X22X9",
     referencia: 53901422,
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 25
    },
    {
     id: 166,
     img:"https://images.tcdn.com.br/img/img_prod/1100542/abracadeira_rosca_sem_fim_super_25_38_fita_9mm_valor_un_metal_matrix_429_1_7df5e74f6e92e54e618396842c0553f8.jpg",
     codigo: 53901216,
     item: "ABRAÇADEIRA SEM FIM ZN 10X16X9",
     referencia: 53901216,
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 25
    },
    {
     id: 167,
     img:"https://images.cws.digital/produtos/gg/87/27/trava-roscas-torque-alto-w777-10g-7492787-1677873411323.jpg",
     codigo: "W77",
     item: "TRAVA ROSCA W77 WURTH",
     referencia: "W77",
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 5
    },
    {
     id: 168,
     img:"https://varimax.fbitsstatic.net/img/p/arruela-de-vedacao-em-aluminio-14-x-20-x-1-5mm-50-unidades-81278/267797.jpg?w=420&h=420&v=no-change&qs=ignore",
     codigo: "A230764",
     item: "ARRUELA VED ALUMINIO 14.0X20.0 X1.5MM",
     referencia: "A230764",
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 50
    },
    {
     id: 169,
     img:"https://cdn.awsli.com.br/300x300/1820/1820493/produto/186142786c9ed5aae85.jpg",
     codigo: 892140127,
     item: "VERNIZ DE MOTOR WURTH 1L",
     referencia: 892140127,
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 170,
     img:"",
     codigo: "D3B5-9A299-AD",
     item: "EMISSOR DE COMBUSTIVEL FORD",
     referencia: "D3B5-9A299-AD",
     marca: "FORD",
     quantidadeMin: 0,
     quantidade: 6
    },
    {
     id: 171,
     img:"https://http2.mlstatic.com/D_NQ_NP_721605-MLB31199675225_062019-O.jpg",
     codigo: "T010140",
     item: "SENSOR DE COMBUSTIVEL TSA",
     referencia: "T010140",
     marca: "TSA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 172,
     img:"https://cf.shopee.com.br/file/bec2b792a7c241d80898d49d24c7fe56",
     codigo: "ARB10",
     item: "BOMBA DE COMBUSTIVEL EUROTEAM",
     referencia: "ARB10",
     marca: "EUROTEAM",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 173,
     img:"https://a-static.mlcdn.com.br/800x560/boia-sensor-nivel-combustivel-gol-voyage-saveiro-parati-original-bosch-f000te182b/sonnicparts/6479p/beec4dcef0dacad0a590ee20597fd184.jpeg",
     codigo: "F000TE176V",
     item: "SENSOR DE COMBUSTIVEL BOSCH",
     referencia: "F000TE176V",
     marca: "BOSCH",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 174,
     img:"https://images.cws.digital/produtos/gg/91/68/arruela-de-cobre-para-bujao-de-carter-nissan-11-x-17mm-pacote-com-50-unida-7526891-1677874656048.jpg",
     codigo: "**",
     item: "ARRUELA DE BUJÃO NISSAN",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 70
    },
    {
     id: 175,
     codigo: "**",
     item: "PRESILHA 15.3",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 176,
     codigo: "**",
     item: "PRESILHA 11.9",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 6
    },
    {
     id: 177,
     codigo: "**",
     item: "PRESILHA 11.3",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 178,
     codigo: "**",
     item: "PRESILHA 13.3",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 179,
     codigo: "**",
     item: "PRESILHA 14.8",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 180,
     codigo: "**",
     item: "PRESILHA 14.5",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 181,
     codigo: "**",
     item: "PRESILHA 12.3",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 182,
     codigo: "**",
     item: "JOINT 16X24 - 15",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 15
    },
    {
     id: 183,
     img:"https://images.tcdn.com.br/img/img_prod/424007/kit_20_anel_de_vedacao_preto_ks_aquecedores_oring_6875_2_70e4deae3ec75d7fc8f60232b03eb832_20220620092455.jpg",
     codigo: "**",
     item: "ANEL DE VEDAÇÃO PRETO",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 29
    },
    {
     id: 184,
     img:"https://lojachevroletnova.vteximg.com.br/arquivos/ids/12791566-799-799/12616850.jpg?v=637937704529070000",
     codigo: "**",
     item: "ANEL BUJÃO AZUL BORRACHA",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 13
    },
    {
     id: 185,
     img:"https://vipesbr.com/fotos/1/1/oring%20bujao%20original%20prisma%20gm%20nova%20linha.jpg",
     codigo: "**",
     item: "ANEL DE BUJÃO GM",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 0
    },
    {
     id: 186,
     img:"https://img.jocar.com.br/773197_500.jpg",
     codigo: "**",
     item: "ANEL DE BUJÃO FIAT",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 1
    },
    {
     id: 187,
     img:"https://http2.mlstatic.com/D_NQ_NP_854598-MLB40427021134_012020-O.webp",
     codigo: "**",
     item: "ANEL DE BUJÃO PEUGEOT",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 8
    },
    {
     id: 188,
     codigo: "**",
     item: "AENL DE BUJÃO RENAULT",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 11
    },
    {
     id: 189,
     codigo: "**",
     item: "ANEL DE BUJÃO FORD",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 18
    },
    {
     id: 190,
     codigo: "**",
     item: "ANEL DE BUJÃO HONDA",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 16
    },
    {
     id: 191,
     codigo: "**",
     item: "ANEL DE BUJÃO TOYOTA",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 24
    },
    {
     id: 192,
     codigo: "**",
     item: "ANEL DE BUJÃO VW",
     referencia: "**",
     marca: "**",
     quantidadeMin: 00,
     quantidade: 79
    },
    {
     id: 193,
     codigo: "**",
     item: "ARRUELA VEDA TUBO ",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 10
    },
    {
     id: 194,
     codigo: 3621,
     item: "ABRAÇADEIRA UNIVERSAL 12X16",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 195,
     codigo: 3640,
     item: "ABRAÇADEIRA UNIVERSAL 14X22",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 0
    },
    {
     id: 196,
     codigo: 3625,
     item: "ABRAÇADEIRA UNIVERSAL 19X27",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 21
    },
    {
     id: 197,
     codigo: 3643,
     item: "ABRAÇADEIRA UNIVERSAL 22X32",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 21
    },
    {
     id: 198,
     codigo: 870001,
     item: "ABRAÇADEIRA UNIVERSAL 9X13",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 199,
     codigo: 40833,
     item: "ABRAÇADEIRA COIFA 33X7",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 10
    },
    {
     id: 200,
     codigo: 3624,
     item: "ABRAÇADEIRA UNIVERSAL 25X38",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 201,
     codigo: "**",
     item: "ABRAÇADEIRA UNIVERSAL 38X51",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 202,
     codigo: "**",
     item: "ABRAÇADEIRA UNIVERSAL 26X38",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 203,
     codigo: 853,
     item: "ABRAÇADEIRA RED INCA 9MM 3\/4X1",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 204,
     codigo: 893556238,
     item: "SOLUÇÃO  DE ARREFECIMENTO ORGÂNICO WURTH",
     referencia: "**",
     marca: "WURTH",
     quantidadeMin: 0,
     quantidade: 12
    },
    {
     id: 205,
     codigo: "FAP4043",
     item: "FILTRO DE AR WEGA FAP4043",
     referencia: "FAP4043",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 206,
     codigo: "JFA0285",
     item: "FILTRO DE AR WEGA JFA0285",
     referencia: "JFA0285",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 207,
     codigo: "FAP4041",
     item: "FILTRO DE AR WEGA FAP4041",
     referencia: "FAP4041",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 208,
     codigo: "FAP6013",
     item: "FILTRO DE AR WEGA FAP6013",
     referencia: "FAP6013",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 209,
     codigo: "FAP9013",
     item: "FILTRO DE AR WEGA FAP9013",
     referencia: "FAP9013",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 210,
     codigo: "CA9315",
     item: "FILTRO DE AR WEGA CA9315",
     referencia: "CA9315",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 211,
     codigo: "FAP4811",
     item: "FILTRO DE AR WEGA FAP4811",
     referencia: "FAP4811",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 212,
     codigo: "FAP4871",
     item: "FILTRO DE AR WEGA FAP4871",
     referencia: "FAP4871",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 213,
     codigo: "FAP6000",
     item: "FILTRO DE AR WEGA FAP6000",
     referencia: "FAP6000",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 214,
     codigo: "JFA0428\/4",
     item: "FILTRO DE AR WEGA FAP0428\/4",
     referencia: "FAP6013",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 215,
     codigo: "JFA0428\/3",
     item: "FILTRO DE AR WEGA JFA0428\/3",
     referencia: "JFA9013",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 216,
     codigo: "JFA0438",
     item: "FILTRO DE AR WEGA FAP0438",
     referencia: "CA9315",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 217,
     codigo: "JFA0405",
     item: "FILTRO DE AR WEGA FAP0405",
     referencia: "FAP4811",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 218,
     codigo: "JFA0447",
     item: "FILTRO DE AR WEGA JFA0447",
     referencia: "FAP4871",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 219,
     codigo: "JFA0426",
     item: "FILTRO DE AR WEGA JFA0426",
     referencia: "FAP6000",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 220,
     codigo: "JFA0429",
     item: "FILTRO DE AR WEGA JFA0429",
     referencia: "JFA0428\/4",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 221,
     codigo: "JFA0440",
     item: "FILTRO DE AR WEGA JFA0440",
     referencia: "JFA0428\/3",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 0
    },
    {
     id: 222,
     codigo: "JFA0587",
     item: "FILTRO DE AR WEGA JFA0587",
     referencia: "JFA0438",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 223,
     codigo: "JFA0F17",
     item: "FILTRO DE AR WEGA JFA0F17",
     referencia: "JFA0405",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 224,
     codigo: "JFA0137",
     item: "FILTRO DE AR WEGA JFA0137",
     referencia: "JFA0447",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 225,
     codigo: "JFA0134",
     item: "FILTRO DE AR WEGA JFA0134",
     referencia: "JFA0426",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 226,
     codigo: "JFA0193",
     item: "FILTRO DE AR WEGA JFA0193",
     referencia: "JFA0429",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 227,
     codigo: "JFA0135",
     item: "FILTRO DE AR WEGA JFA0135",
     referencia: "JFA0440",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 228,
     codigo: "FAP9296",
     item: "FILTRO DE AR WEGA FAP9296",
     referencia: "JFA0587",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 229,
     codigo: "FAP9295",
     item: "FILTRO DE AR WEGA FAP9295",
     referencia: "JFA0F17",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 230,
     codigo: "FAP9003",
     item: "FILTRO DE AR WEGA FAP9003",
     referencia: "JFA0137",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 231,
     codigo: "FAP7019",
     item: "FILTRO DE AR WEGA FAP7019",
     referencia: "JFA0134",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 232,
     codigo: "FAP9286",
     item: "FILTRO DE AR WEGA FAP9286",
     referencia: "JFA0193",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 233,
     codigo: "ART6098",
     item: "FILTRO DE AR TECFIL ART6098",
     referencia: "JFA0135",
     marca: "TECFIL",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 234,
     codigo: "LX1780\/3",
     item: "FILTRO DE AR MAHLE LX1780\/3",
     referencia: "FAP9296",
     marca: "MAHLE",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 235,
     codigo: 97646,
     item: "VELA DE IGNIÇÃO NGK BKR7ESB-D",
     referencia: "BKR7ESB-D",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 12
    },
    {
     id: 236,
     codigo: 92277,
     item: "VELA DE IGNIÇÃO NGK LNAR7A-9G",
     referencia: "LNAR7A-9G",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 8
    },
    {
     id: 237,
     codigo: "LTR7A-10",
     item: "VELA DE IGNIÇÃO NGK LTR7A-10",
     referencia: "LTR7A-10",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 238,
     codigo: "SP411",
     item: "VELA DE IGNIÇÃO MOTOCRAFT AXFS22FM",
     referencia: "AXFS22FM",
     marca: "MOTORCRAFT",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 239,
     codigo: "KR8B-10D",
     item: "VELA DE IGNIÇÃO NGK KR8B-10D",
     referencia: "KR8B-10D",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 240,
     codigo: "BKR7E",
     item: "VELA DE IGNIÇÃO NGK BKR7E ",
     referencia: "BKR7E ",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 241,
     codigo: 97135,
     item: "VELA DE IGNIÇÃO BKR6E-D",
     referencia: "BKR6E-D",
     marca: "NGK",
     quantidadeMin: 4,
     quantidade: 0
    },
    {
     id: 242,
     codigo: 94477,
     item: "VELA DE IGNIÇÃO FR7D-DEG",
     referencia: "FR7D-DEG",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 8
    },
    {
     id: 243,
     codigo: 2288,
     item: "VELA DE IGNIÇÃO BKR6EK ",
     referencia: "BKR6EK",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 244,
     codigo: 96148,
     item: "VELA DE IGNIÇÃO BR6ES-D",
     referencia: "BR6ES-D",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 245,
     codigo: 97236,
     item: "VELA DE IGNIÇÃO LZKR7B-DE",
     referencia: "LZKR7B-DE",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 246,
     codigo: "FRGE-D",
     item: "VELA DE IGNIÇÃO FRGE-D",
     referencia: "FRGE-D",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 247,
     codigo: 93206675,
     item: "VELA DE IGNIÇÃO 93206675 ",
     referencia: 93206675,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 16
    },
    {
     id: 248,
     codigo: 93230926,
     item: "VELA DE IGNIÇÃO 93230926",
     referencia: 93230926,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 12
    },
    {
     id: 249,
     codigo: 93221446,
     item: "VELA DE IGNIÇÃO 93221446",
     referencia: 93221446,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 8
    },
    {
     id: 250,
     codigo: 17512,
     item: "CABOS DE IGNIÇÃO ST-V25",
     referencia: "ST-V25",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 251,
     codigo: 16437,
     item: "CABOS DE IGNIÇÃO SC-G101",
     referencia: "SC-G101",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 252,
     codigo: 16206,
     item: "CABOS DE IGNIÇÃO SC-R13",
     referencia: "SC-R13",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 253,
     codigo: 15795,
     item: "CABOS DE IGNIÇÃO SC-F35",
     referencia: "SC-F35",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 254,
     codigo: 18102,
     item: "CABOS DE IGNIÇÃO SC-G73",
     referencia: "SC-G73",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 255,
     codigo: 16206,
     item: "CABOS DE IGNIÇÃO SC-F30",
     referencia: "SC-F30",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 256,
     codigo: "BH1A-12280-AA-8",
     item: "CABOS DE IGNIÇÃO BH1A-12280-AA-8",
     referencia: "BH1A-12280-AA-8",
     marca: "FORD",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 257,
     codigo: 48551,
     item: "BOMBA DE IGNIÇÃO U2079",
     referencia: "U2079",
     marca: "NGK",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 258,
     codigo: "B10071MM1",
     item: "BOMBA DE IGNIÇÃO B10071MM1",
     referencia: "B10071MM1",
     marca: "MAGNETE MARELLI",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 259,
     codigo: "F000ZSO210",
     item: "BOMBA DE IGNIÇÃO F000ZSO210",
     referencia: "F000ZSO210",
     marca: "BOSCH",
     quantidadeMin: 0,
     quantidade: 2
    },
   /*  {
     id: 260,
     codigo: 50103402,
     item: "INJETOR DE COMBUSTIVEL VW",
     referencia: "**",
     marca: "MAGNETE MARELLI",
     quantidadeMin: 0,
     quantidade: 0
    }, */
    {
     id: 261,
     codigo: "ES20331-13B1",
     item: "SENSOR DE OXIGENIO ES20331-13B1",
     referencia: "ES20331-13B1",
     marca: "DELPHI",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 262,
     codigo: "FAP9299",
     item: "FILTRO DE AR WEGA FAP9299",
     referencia: "FAP9299",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 263,
     codigo: "FAP5218",
     item: "FILTRO DE AR WEGA FAP5218",
     referencia: "FAP5218",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 264,
     codigo: "FAP9273",
     item: "FILTRO DE AR WEGA FAP9273",
     referencia: "FAP9273",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 265,
     codigo: "FAP4054\/2",
     item: "FILTRO DE AR WEGA FAP4054\/2",
     referencia: "FAP4054\/2",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 266,
     codigo: "WR245",
     item: "FILTRO DE AR WEGA WR245",
     referencia: "WR245",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 267,
     codigo: "FAP3286",
     item: "FILTRO DE AR WEGA FAP3286",
     referencia: "FAP3286",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 268,
     codigo: "FAP3233",
     item: "FILTRO DE AR WEGA FAP3233",
     referencia: "FAP3233",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 5
    },
    {
     id: 269,
     codigo: "LX523",
     item: "FILTRO DE AR MAHLE LX523",
     referencia: "LX523",
     marca: "MAHLE",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 270,
     codigo: "FAP3289",
     item: "FILTRO DE AR WEGA FAP3289",
     referencia: "FAP3289",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 271,
     codigo: "FAP3280",
     item: "FILTRO DE AR WEGA FAP3280",
     referencia: "FAP3280",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 272,
     codigo: "FAP3261",
     item: "FILTRO DE AR WEGA FAP3261",
     referencia: "FAP3261",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 273,
     codigo: "LX1779",
     item: "FILTRO DE AR MAHLE LX1779",
     referencia: "LX1779",
     marca: "MAHLE",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 274,
     codigo: "FAP7007",
     item: "FILTRO DE AR WEGA FAP7007",
     referencia: "FAP7007",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 275,
     codigo: "WR196",
     item: "FILTRO DE AR WEGA WR196",
     referencia: "WR196",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 276,
     codigo: "FAP3599",
     item: "FILTRO DE AR WEGA FAP3599",
     referencia: "FAP3599",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 277,
     codigo: "FAP2219",
     item: "FIILTRO DE AR WEGA FAP2219",
     referencia: "FAP2219",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 278,
     codigo: "FAP3285",
     item: "FILTRO DE AR WEGA FAP3285",
     referencia: "FAP3285",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 279,
     codigo: "FAP3288",
     item: "FILTRO DE AR WEGA FAP3288",
     referencia: "FAP3288",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 280,
     codigo: "JFA0H21",
     item: "FILTRO DE AR WEGA JFA0H21",
     referencia: "JFA0H21",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 0
    },
    {
     id: 281,
     codigo: "LX3800",
     item: "FILTRO DE AR MAHLE LX3800",
     referencia: "LX3800",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 282,
     codigo: "JFA0K16",
     item: "FILTRO DE AR WEGA JFA0K16",
     referencia: "JFA0K16",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 283,
     codigo: "LX1785",
     item: "FILTRO DE AR MAHLE LX1785",
     referencia: "LX1785",
     marca: "MAHLE",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 284,
     codigo: "JFA0H26",
     item: "FILTRO DE AR WEGA JFA0H26 ",
     referencia: "JFA0H26",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 285,
     codigo: "JFA0H40",
     item: "FILTRO DE AR WEGA JFA0H40",
     referencia: "JFAOH40",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 286,
     codigo: "JFA0H29",
     item: "FILTRO DE AR WEGA JFA0H29",
     referencia: "JFA0H29",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 3
    },
    {
     id: 287,
     codigo: "JFA0H24",
     item: "FILTRO DE AR WEGA JFA0H24",
     referencia: "JFA0H24",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 288,
     codigo: "N-1272",
     item: "PASTILHA DE FREIO N-1272",
     referencia: "N-1272",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 289,
     codigo: "N-540",
     item: "PASTILHA DE FREIO N-540",
     referencia: "N-540",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 290,
     codigo: "N-547",
     item: "PASTILHA DE FREIO N-547",
     referencia: "N-547",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 291,
     codigo: "N-1770",
     item: "PASTILHA DE FREIO N-1770",
     referencia: "N-1770",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 292,
     codigo: "N-2131",
     item: "PASTILHA DE FREIO N-2131",
     referencia: "N-2131",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 293,
     codigo: "HQF2344AC",
     item: "PASTILHA DE FREIO HQF2344AC FERODO",
     referencia: "HQF2344AC",
     marca: "FERODO",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 294,
     codigo: "HQF2460",
     item: "PASTILHA DE FREIO HQF2460 FERODO",
     referencia: "HQF2460",
     marca: "FERODO",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 295,
     codigo: 1423,
     item: "PASTILHA DE FREIO 1423 SYL",
     referencia: 1423,
     marca: "S.Y.L",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 296,
     codigo: "N-252",
     item: "PASTILHA DE FREIO N-525 COBREG",
     referencia: "N-252",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 297,
     codigo: "N-288",
     item: "PASTILHA DE FREIO N-288 COBREG",
     referencia: "N-288",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 298,
     codigo: "HQJ-2356A",
     item: "PASTILHA DE FREIO HQJ-2356A JURID",
     referencia: "HQJ-2356A",
     marca: "JURID",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 299,
     codigo: "HQJ-2282A",
     item: "PASTILHA DE FREIO HQJ-2282A JURID",
     referencia: "HQJ-2282A",
     marca: "JURID",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 300,
     codigo: "N-1767",
     item: "PASTILHA DE FREIO N-1767 COBRAG",
     referencia: "N-1767",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 301,
     codigo: 3250,
     item: "PASTILHA DE FREIO 3250 S.Y.L",
     referencia: 3250,
     marca: "S.Y.L",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 302,
     codigo: "N-1344",
     item: "PASTILHA DE FREIO N-1344 COBREG",
     referencia: "N-1344",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 303,
     codigo: "N-1377",
     item: "PASTILHA DE FREIO N-1377 COBREG",
     referencia: "N-1377",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 304,
     codigo: "N-1368",
     item: "PASTILHA DE FREIO N-1368 COBREG",
     referencia: "N-1368",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 305,
     codigo: "HQJ-2288A",
     item: "PASTILHA DE FREIO HQJ-2288A JURID",
     referencia: "HQJ-2288A",
     marca: "JURID",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 306,
     codigo: "HQJ-2229A",
     item: "PASTILHA DE FREIO HQJ-2229A JURID",
     referencia: "HQJ-2229A",
     marca: "JURID",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 307,
     codigo: "N-1166",
     item: "PASTILHA DE FREIO N-1166 COBREG",
     referencia: "N-1166",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 308,
     codigo: "N-457",
     item: "PASTILHA DE FREIO N-457 COBREG",
     referencia: "N-457",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 309,
     codigo: 1359,
     item: "PASTILHA DE FREIO 1359 S.Y.L",
     referencia: 1359,
     marca: "S.Y.L",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 310,
     codigo: 2114,
     item: "PASTILHA DE FREIO 2114 S.Y.L",
     referencia: 2114,
     marca: "S.Y.L",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 311,
     codigo: "N-2031",
     item: "PASTILHA DE FREIO N-2031 COBREG",
     referencia: "N-2031",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 312,
     codigo: "N-378",
     item: "PASTILHA DE FREIO N-378 COBREG",
     referencia: "N-378",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 313,
     codigo: "N-305",
     item: "PASTILHA DE FREIO N-305 COBREG",
     referencia: "N-305",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 314,
     codigo: "N-377",
     item: "PASTILHA DE FREIO N-377 COBREG",
     referencia: "N-377",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 315,
     codigo: "N-367",
     item: "PASTILHA DE FREIO N-367 COBREG",
     referencia: "N-367",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 316,
     codigo: "N-152",
     item: "PASTILHA DE FREIO N-152 COBREG",
     referencia: "N-152",
     marca: "COBREG",
     quantidadeMin: 0,
     quantidade: 0
    },
    {
     id: 317,
     codigo: "MA60AD",
     item: "BATERIA MOURA MA60AD ",
     referencia: "MA60AD",
     marca: "MOURA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 318,
     codigo: "CB\/49-CPA",
     item: "SAPATOS COM LONAS PARA FREIOS CB\/49-CPA ",
     referencia: "CB\/49-CPA",
     marca: "FRANS.LE",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 319,
     codigo: "FD\/152-CPA",
     item: "SAPATOS COM LONAS PARA FREIOS FD\/152-CPA ",
     referencia: "FD\/152-CPA",
     marca: "FRANS.LE",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 320,
     codigo: "BWD6000:009",
     item: "CILINDRO DE RODA 19,05MM",
     referencia: "BWD6000:009",
     marca: "TRW",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 321,
     codigo: "ALK-4529",
     item: "KIT ROLAMENTO DE RODA ALK-4529",
     referencia: "ALK-4529",
     marca: "IMA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 322,
     codigo: "AKX1992",
     item: "FILTRO DE AR WEGA AKX1992 ",
     referencia: "AKX1992",
     marca: "WEGA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 323,
     codigo: "TS4121:009",
     item: "TERMINAL DE DIREÇÃO TS4121:009 TRW",
     referencia: "TS4121:009",
     marca: "TRW",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 324,
     codigo: "VKBA 4544A",
     item: "KIT ROLAMENTO DE RODA VKBA 4544 SKF",
     referencia: "VKBA4544A",
     marca: "SKF",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 325,
     codigo: 6013,
     item: "CILINDRO DE RODA 19MM 006013 ATF",
     referencia: 6013,
     marca: "ATF",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 326,
     codigo: 5841,
     item: "CILINDRO DE RODA 17MM 005841 ATF",
     referencia: 5841,
     marca: "ATF",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 327,
     codigo: "RCCR02860:019",
     item: "CILINDRO DE RODA RCCR02860:019 TRW",
     referencia: "RCCR02860:019",
     marca: "TRW",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 328,
     codigo: "RCCR02890:009",
     item: "CILINDRO DE RODA RCCR028990:009 TRW",
     referencia: "RCCR02890:009",
     marca: "TRW",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 329,
     codigo: "BWF6000:009",
     item: "CILINDRO DE RODA BWF6000:009 (SPIN) TRW",
     referencia: "BWF6000:009",
     marca: "TRW",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 330,
     codigo: "C-3430",
     item: "CILINDRO DE RODA C-3430 19,05MM CONTROIL",
     referencia: "C-3430",
     marca: "CONTROIL",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 331,
     codigo: "FD\/61-CPA ",
     item: "SAPATOS COM LONAS FD\/61-CPA ",
     referencia: "FD\/61-CPA ",
     marca: "FRANS.LE",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 332,
     codigo: "**",
     item: "COLA EPOXI ORBI QUIMICA",
     referencia: "**",
     marca: "ORBI QUIMICA",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 333,
     codigo: "**",
     item: "COLA DE SILICONE DRIKO ",
     referencia: "**",
     marca: "ORBI QUIMICA",
     quantidadeMin: 0,
     quantidade: 7
    },
    {
     id: 334,
     codigo: "**",
     item: "VEDA ESCAPE ORBI QUIMICA ",
     referencia: "**",
     marca: "ORBI QUIMICA",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 335,
     codigo: "E2868802652AD",
     item: "VALVULA TERMOSTATICA E2868802652AD WAHLER",
     referencia: "E2868802652AD",
     marca: "WAHLER",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 336,
     codigo: 4099,
     item: "PLUG ELETRONICO 4099 ",
     referencia: 4099,
     marca: "**",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 337,
     codigo: 93275736,
     item: "VALVULA DE EXPANSÃO TESMOSTATO",
     referencia: 93275736,
     marca: "**",
     quantidadeMin: 0,
     quantidade: 4
    },
    {
     id: 338,
     codigo: "RT1193",
     item: "TOMOSTATO RT1193",
     referencia: "RT1193",
     marca: "MOTORCRAFT",
     quantidadeMin: 0,
     quantidade: 1
    },
    {
     id: 339,
     codigo: 93373723,
     item: "PARAFUSO ROSCADO TENSOR CORREIA 93373723",
     referencia: 93373723,
     marca: "GM",
     quantidadeMin: 0,
     quantidade: 5
    },
    {
     id: 340,
     codigo: "**",
     item: "FRANELA AZUL",
     referencia: "AZUL",
     marca: "**",
     quantidadeMin: 10,
     quantidade: 120
    },
    {
     id: 341,
     codigo: "BD8930",
     item: "DISCO DE FREIO FREMAX BD8930",
     referencia: "BD8930",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 0
    },
    {
     id: 342,
     codigo: "BD3547",
     item: "DISCO DE FREIO FREMAX BD3547",
     referencia: 4099,
     z: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 343,
     codigo: "BD1440",
     item: "DISCO DE FREIO FREMAX BD1440",
     referencia: 93275736,
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 344,
     codigo: "BD5297",
     item: "DISCO DE FREIO FREMAX BD5297",
     referencia: "RT1193",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 345,
     codigo: "BD5602",
     item: "DISCO DE FREIO FREMAX BD5602",
     referencia: 93373723,
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 346,
     codigo: "BD3108",
     item: "DISCO DE FREIO FREMAX BD3108",
     referencia: 0,
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 347,
     codigo: "BD1700",
     item: "DISCO DE FREIO FREMAX BD1700",
     referencia: "BD8930",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 348,
     codigo: "BD1705",
     item: "DISCO DE FREIO FREMAX BD1705",
     referencia: "BD3547",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 349,
     codigo: "BD3545",
     item: "DISCO DE FREIO FREMAX BD3545",
     referencia: "BD1440",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 350,
     codigo: "BD8929",
     item: "DISCO DE FREIO FREMAX BD8929",
     referencia: "BD5297",
     marca: "FREMAX",
     quantidadeMin: 0,
     quantidade: 2
    },
    {
     id: 351,
     codigo: "MUH7",
     item: "LAMPADA MULTILASER H7 12V 55W",
     referencia: "H7",
     marca: "MULTILASER",
     quantidadeMin: 0,
     quantidade: 12,
     
    },
    {
     id: 352,
     codigo: "ETE7571",
     item: "ABRAÇADEIRA DE NYLON ETE7571 1,3MM PRETA",
     referencia: "BD3108",
     marca: "RAINHA DAS SETE",
     quantidadeMin: 0,
     quantidade: 58
    },
    {
     id: 353,
     codigo: "**",
     item: "ABRAÇADEIRA DE NYLON VERDE",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 18
    },
    {
     id: 354,
     codigo: "**",
     item: "ABRAÇADEIRA DE NYLON VERMELHA",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 46
    },
    {
     id: 355,
     codigo: "**",
     item: "ABRAÇADEIRA DE NYLON AMARELA",
     referencia: "**",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 100
    },
    {
     id: 356,
     codigo: "ETE7518",
     item: "ABRAÇADEIRA DE NYLON ETE7518 1,0MM PRETA",
     referencia: "ETE7518",
     marca: "**",
     quantidadeMin: 0,
     quantidade: 100
    },
    {
      id: 357,
      codigo: "**",
      item: "ABRAÇADEIRA DE NYLON BRANCA 1,45MM",
      referencia: "**",
      marca: "**",
      quantidadeMin: 0,
      quantidade: 7
    },
    {
      id: 358,
      codigo: "MO5W40",
      item: "ÓLEO PARA MOTOR MAXON LONGLIFE 5W40",
      referencia: "MO5W40",
      marca: "MAXON",
      quantidadeMin: 0,
      quantidade: 12
    },
    {
      id: 359,
      codigo:"JFA0H12",
      item:"FILTRO DE AR WEGA JFA0H12",
      referencia:"JFAOH12",
      marca:"WEGA",
      quantidadeMin: 0,
      quantidade: 1
    },
    {
      id: 360,
      codigo:"KER7A-8DEG",
      item:"VELA DE IGNIÇÃO NGK KER7A-8DEG",
      referencia:"KER7A-8DEG",
      marca:"NGK",
      quantidadeMin:4,
      quantidade: 8
    },
    {
      id: 361,
      codigo:"N-252",
      item:"PASTILHA DE FREIO N-252",
      referencia:"N-252",
      marca:"COBREQ",
      quantidadeMin:1,
      quantidade:1
    },
    {
      id: 362,
      codigo:"FAP9054",
      item:"FILTRO DE AR FAP9054 WEGA",
      referencia:"FAP9054",
      marca:"WEGA",
      quantidadeMin:1,
      quantidade:3

    },
    {
      id: 363,
      codigo:"98553886",
      item:"ÓLEO SINTÉTICO ACDELCO DEXOS 1 SAE 5W30 API SP",
      referencia:"5w30",
      marca:"ACDELCO",
      quantidadeMin:10,
      quantidade:48
    },
    {
      id: 388,
      codigo:" ",
      item:"ÓLEO PARA MOTOR PETRONAS SYNTIUM 800 SE SP 10W30",
      referencia:"10w30",
      marca:"PETRONAS",
      quantidadeMin: 02,
      quantidade: 19
    },
    {
      id: 389,
      codigo:"",
      item: "ANEL BUJÃO RENAULT",
      referencia: "",
      marca:"",
      quantidadeMin:10,
      quantidade:12
    },
    {
      id: 390,
      codigo:"10-3001",
      item: "ADITIVO CONCENTRADO PARAFLU ROSA",
      referencia: "ROSA",
      marca:"PARAFLU",
      quantidadeMin:10,
      quantidade:60
    },
    {
      id: 391,
      codigo:"10-3044",
      item: "ADITIVO CONCENTRADO PARAFLU AMARELO",
      referencia: "AMARELO",
      marca:"PARAFLU",
      quantidadeMin:10,
      quantidade:48
    },
    {
      id: 391,
      codigo:"10-3013",
      item: "ADITIVO CONCENTRADO PARAFLU VERDE",
      referencia: "VERDE",
      marca:"PARAFLU",
      quantidadeMin:10,
      quantidade:48
    },
    {
      id: 393,
      codigo:"",
      item: "CAR80 GRAFITE SPRAY",
      referencia: "",
      marca:"CAR80",
      quantidadeMin:1,
      quantidade:1
    },
    {
      id: 394,
      codigo:"",
      item: "CAR80 VASELINA",
      referencia: "",
      marca:"CAR80",
      quantidadeMin:1,
      quantidade:1
    },
    {
        id: 395,
        codigo:"WO412",
        item: "FILTRO DE ÓLEO WEGA WO412",
        referencia: "WO412",
        marca:"WEGA",
        quantidadeMin:1,
        quantidade:2
    }
    


   ]


   
function pesquisarProdutos  (termo) {
    return produtos.filter(function(produto) {
      return produto.item.toLowerCase().indexOf(termo.toLowerCase()) > -1;
    });
  }

  function gerarHtmlProdutos(produtos) {
    let html = '';
    for (let i = 0; i < produtos.length; i++) {
      html += '<div class="produto">';
      html += `<img class="imgprodutos" src="${produtos[i].img}" alt="">` 
      html += '<h2 class="tituloProduto">' + produtos[i].item + '</h2>';
      html += '<p class="infos">'+ "ID:   " + produtos[i].id + '</p>';
      html += '<p class="infos">'+ "Codigo:  " + produtos[i].codigo + '</p>';
      html += '<p class="infos">' +"Referencia:   "+ produtos[i].referencia + '</p>';
      html += '<p class="infos">'+ "Estoque:   " + produtos[i].quantidade + '</p>';
      /* html += '<button onclick="adicionarProdutoAoCarrinho(' + i + ')">Adicionar ao carrinho</button>'; */
      html += '</div>';
    }
    return html;
  }
  function pesquisar() {
    let termo = document.getElementById('termo').value;
    let resultados = pesquisarProdutos(termo);
    let html = gerarHtmlProdutos(resultados);
    document.getElementById('resultados').innerHTML = html;
  }