const produtos = [
  
    {
     id: 1,
     codigo: 98550378,
     item: "ÓLEO ACDELCO SEMISINTÉTICO SAE 5W3O API SN",
     referencia: "5W30",
     marca: "ACDELCO",
     quantidadeMinima: 12,
     quantidadeEstoque: 15
    },
    {
     id: 2,
     codigo: 98550168,
     item: "ÓLEO ACDELCO SINTÉTICO 5W30 API SN",
     referencia: "5W30",
     marca: "ACDELCO",
     quantidadeMinima: 12,
     quantidadeEstoque: 70
    },
    {
     id: 3,
     codigo: 98550549,
     item: "ÓLEO ACDELCO SINTÉTICO 0W20 API SN",
     referencia: "0W20",
     marca: "ACDELCO",
     quantidadeMinima: 12,
     quantidadeEstoque: 26
    },
    {
     id: 4,
     codigo: 20141,
     item: "ÓLEO PETRONAS SYNTIUM 3000XS 5W30 SINTÉTICO",
     referencia: "5W30",
     marca: "PETRONAS",
     quantidadeMinima: 12,
     quantidadeEstoque: 11
    },
    {
     id: 5,
     codigo: 7092612,
     item: "ÓLEO CLASSIC LINE SINTÉTICO 5W30",
     referencia: "5W30",
     marca: "CLASSIC LINE",
     quantidadeMinima: 12,
     quantidadeEstoque: 7
    },
    {
     id: 6,
     codigo: 22040238,
     item: "ÓLEO PARA MOTOR A DIESEL MAXON 5W30",
     referencia: "5W30",
     marca: "MAXON",
     quantidadeMinima: 12,
     quantidadeEstoque: 21
    },
    {
     id: 7,
     codigo: 20127,
     item: "ÓLEO PETRONAS SYNTIUM 7000 HYBRID 0W20",
     referencia: "0W20",
     marca: "PETRONAS",
     quantidadeMinima: 12,
     quantidadeEstoque: 22
    },
    {
     id: 8,
     codigo: "ATE6092",
     item: "FLUIDO DE FREIO ATE DOT 4 0,5L ",
     referencia: "DOT 4",
     marca: "ATE",
     quantidadeMinima: 12,
     quantidadeEstoque: 21
    },
    {
     id: 9,
     codigo: 98550134,
     item: "FLUIDO PARA TRANSMISSÃO AUTOMÁTICA E DIREÇÃO HIDRAULICA DEXRON VI",
     referencia: "DEXRON",
     marca: "ACDELCO",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 10,
     codigo: 9909,
     item: "ÓLEO PARA SISTEMAS PNEUMÁTICOS ARC-C10",
     referencia: "ARC-10",
     marca: "ARCDAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 11,
     codigo: 98550868,
     item: "LUBRIFICANTE MINERAL PARA TRASMISSÃO AUTOMATICA E DIREÇÃO HIDRAULICA",
     referencia: "GM",
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 12,
     codigo: 94728699,
     item: "ÓLEO PARA TRANSMISSÃO MECÂNICA 75W85 ACDELCO ",
     referencia: "75W85",
     marca: "ACDELCO",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 13,
     codigo: 14261,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU ROSA",
     referencia: "ROSA",
     marca: "PARAFLU",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 14,
     codigo: 23020207,
     item: "LUBRIFICANTE SEMISSINTÉTICO PARA TRANSMISSÃO E DIFERENCIAL75W80",
     referencia: "75W80",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 25
    },
    {
     id: 15,
     codigo: 21060135,
     item: "FLUIDO LUBRIFICANTE PARA TRASMISSÃO AUTOMÁTICA E SISTEMAS DE DIREÇÃO HIDRÁULICA ATF DEXRON III",
     referencia: "DEXRON III",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 6
    },
    {
     id: 16,
     codigo: 19371,
     item: "ÓLEO PETRONAS SELENIA PERFORM SAE 5W40 API SN PLUS",
     referencia: "5W40",
     marca: "PETRONAS",
     quantidadeMinima: 12,
     quantidadeEstoque: 21
    },
    {
     id: 17,
     codigo: "G S55 553 R2 BRA",
     item: "ÓLEO DE MOTOR ORIGINAL VOLKSWAGEN MAXI PERFORMANCE SAE 5W40 ",
     referencia: "5W40",
     marca: "VOLSKWAGEM",
     quantidadeMinima: 12,
     quantidadeEstoque: 8
    },
    {
     id: 18,
     codigo: "BXO-5W20-CA",
     item: "ÓLEO PARA MOTOR SYNTHETIC MOTOR OIL MOTORCRAFT 5W20",
     referencia: "5W20",
     marca: "MOTORCRAFT",
     quantidadeMinima: 12,
     quantidadeEstoque: 24
    },
    {
     id: 19,
     codigo: 16525,
     item: "ÓLEO PARA MOTOR PETRONAS SYNTIUM 1000 10W40",
     referencia: "10W40",
     marca: "PETRONAS",
     quantidadeMinima: 12,
     quantidadeEstoque: 19
    },
    {
     id: 20,
     codigo: 20095,
     item: "ÓLEO PETRONAS SYNTIUM 800 SE SP 15W40",
     referencia: "15W40",
     marca: "PETRONAS",
     quantidadeMinima: 12,
     quantidadeEstoque: 8
    },
    {
     id: 21,
     codigo: 7691801,
     item: "ÓLEO PARA MOTOR PRO HONDA SAE 10W30",
     referencia: "10W30",
     marca: "HONDA",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 22,
     codigo: 18120,
     item: "ÓLEO PARA MOTOR DE MOTOCICLETA PETRONAS SPRINTA F500 10W50",
     referencia: "10W50",
     marca: "PETRONAS",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 23,
     codigo: "BXO-5W30-GA",
     item: "ÓLEO PARA MOTOR SYNTHETIC MOTOR OIL MOTORCRAFT 5W30",
     referencia: "5W30",
     marca: "MOTORCRAFT",
     quantidadeMinima: 12,
     quantidadeEstoque: 44
    },
    {
     id: 24,
     codigo: 103047,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU AMARELA",
     referencia: "AMARELO",
     marca: "PARAFLU",
     quantidadeMinima: 0,
     quantidadeEstoque: 31
    },
    {
     id: 25,
     codigo: 103016,
     item: "SOLUÇÃO ARREFECEDORA PARAFLU VERDE",
     referencia: "VERDE",
     marca: "PARAFLU",
     quantidadeMinima: 0,
     quantidadeEstoque: 27
    },
    {
     id: 26,
     codigo: "TRM-4",
     item: "LUBRIFICANTE MINERAL PARA TRASMISSÃO AUTOMOTIVA LUBRAX",
     referencia: "TRM-4",
     marca: "PETROBRAS",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 27,
     codigo: "7647401R-M",
     item: "ÓLEO LUBRIFICANTE PARA CAIXA DE MUDANÇA MECANICA ISAFLUIDO556",
     referencia: "ISAFLUIDO 556",
     marca: "IPIRANGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 6
    },
    {
     id: 28,
     codigo: "ON-075",
     item: "ÁGUA DESMINERALIZADA ONYX PLUS 1L",
     referencia: "ON-075",
     marca: "ONYX PLUS",
     quantidadeMinima: 0,
     quantidadeEstoque: 13
    },
    {
     id: 29,
     item: "METALSIL DESIX AROMATIZANTE DE USO GERAL",
     marca: "METASIL",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 30,
     codigo: "VKM4794",
     item: "POLIA VKM 4794 ",
     referencia: "W44W-AK",
     marca: "SKF",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 31,
     codigo: "5310525300A",
     item: "TENSOR INA",
     referencia: 979548,
     marca: "INA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 32,
     codigo: "CM5G-6K245-EB",
     item: "TENSOR FORD",
     referencia: "CM5G-6K245-EB",
     marca: "FORD",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 33,
     codigo: "PRPOFE177626CP",
     item: "ROLAMENTO PRO AUTOMOTIVE",
     marca: "PRO AUTO",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 34,
     codigo: 904571168,
     item: "TENSOR DA CORREIA GM",
     referencia: 93353848,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 5
    },
    {
     id: 35,
     codigo: 90531677,
     item: "CORREIA SINCRONIZADORA GM 90531677",
     referencia: 90531677,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 5
    },
    {
     id: 36,
     codigo: "KS210",
     item: "KIT DE TRASMISSÃO CORREIA E TENSOR KS210 ",
     referencia: 481486,
     marca: "GATES ",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 37,
     codigo: "CT 453",
     item: "CORREIA DENTADA CT 457 CONTINENTAL ",
     referencia: "CT 453",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 38,
     codigo: 21031759,
     item: "KIT CORREIA MV 6PK 762 ELAST CT ",
     referencia: "6PK762",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 39,
     codigo: 21031758,
     item: "KIT CORREIA MV 3PK 796 ELAST CT",
     referencia: "3PK796",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 40,
     codigo: 21031859,
     item: "KIT CORREIA MV 5PK 1051 ELAST CT",
     referencia: "5PK1051",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 41,
     codigo: 21031757,
     item: "KIT CORREIA MV 6PK 1200 ELAST CT ",
     referencia: "6PK1200",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 42,
     codigo: 21031510,
     item: "CORREIA MULTI V CORREIA ACANALADA 6PK 989 ELAST ",
     referencia: "6PK989",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 43,
     codigo: 21031750,
     item: "CORREIA MULTI V CORREIA ACANALADA 3PK 796 ELAST ",
     referencia: "3PK796",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 44,
     codigo: 24579487,
     item: "CORREIA DE TRANSMISSÃO",
     referencia: "GM",
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 45,
     item: "CORREIA POLY-V 6PK1560",
     referencia: "6PK1560",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 46,
     codigo: 21035085,
     item: "CORREIA MV 5PK 1770 IMP ",
     referencia: "5PK1770",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 47,
     codigo: 21031546,
     item: "CORREIA MULTI V CORREIA ACANALADA 6PK 1200 ELAST",
     referencia: "6PK1200",
     marca: "CONTINENTAL",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 48,
     codigo: 1165,
     item: "CORREIA POLY-V BELT 5PK1165 DAYCO",
     referencia: "5PK1165",
     marca: "DAYCO",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 49,
     codigo: 24579488,
     item: "CORREIA DE TRANSMISSÃO GM ",
     referencia: 24579488,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 50,
     codigo: "03212028CN",
     item: "CARCACA",
     referencia: "03212026CN",
     marca: "VOLSKWAGEM",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 51,
     codigo: "030103464A",
     item: "SEPARADOR ",
     referencia: "030103464A",
     marca: "VOLSKWAGEM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 52,
     codigo: "UB0162",
     item: "BOMBA D´ÁGUA URBA - FIAT\/GM",
     referencia: "UB0162",
     marca: "URBA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 53,
     codigo: "UB0630",
     item: "BOMBA D´ÁGUA URBA - VW",
     referencia: "UB0630",
     marca: "URBA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 54,
     codigo: "SBB271J",
     item: "BRONZINA DE BIELA SBB-271-J-0,25 SPA",
     marca: "METALLEVEL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 55,
     codigo: "SBC880J",
     item: "BRONZINA DE MANCAL SBC-880-J-0,25",
     marca: "METALLEVEL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 56,
     codigo: "AKX1965\/C",
     item: "FILTRO DE CABINE AKX 1965\/C WEGA",
     referencia: "AKX1965\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 4
    },
    {
     id: 57,
     codigo: "AKX2161",
     item: "FILTRO DE CABINE AKX2161 WEGA",
     referencia: "AKX2161",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 5
    },
    {
     id: 58,
     codigo: "AKX1937",
     item: "FILTRO DE CABINE AKX1937 WEGA",
     referencia: "AKXQ937",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 59,
     codigo: "AKX1939",
     item: "FILTRO DE CABINE AKX1939 WEGA",
     referencia: "AKX1939",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 60,
     codigo: "AKX35323",
     item: "FILTRO DE CABINE AKX35323 WEGA",
     referencia: "AKX35323",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 7
    },
    {
     id: 61,
     codigo: "AKX35321",
     item: "FILTRO DE CABINE AKX35321 WEGA",
     referencia: "AKX35321",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 62,
     codigo: "AKX1375",
     item: "FILTRO DE CABINE AKX1375 WEGA",
     referencia: "AKX1375",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 4
    },
    {
     id: 63,
     codigo: "AKX2108\/C",
     item: "FILTRO DE CABINE AKX 2108\/C WEGA",
     referencia: "AKX2108\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 64,
     codigo: "AKX35293",
     item: "FILTRO DE CABINE AKX35293 WEGA",
     referencia: "AKX35293",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 65,
     codigo: "AKX35723",
     item: "FILTRO DE CABINE AKX35723 WEGA",
     referencia: "AKX35723",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 5
    },
    {
     id: 66,
     codigo: "AKX3536",
     item: "FILTRO DE CABINE AKX3536 WEGA",
     referencia: "AKX3536",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 67,
     codigo: "AKX3562",
     item: "FILTRO DE CABINE AKX3562 WEGA",
     referencia: "AKX3562",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 68,
     codigo: "AKX35159",
     item: "FILTRO DE CABINE AKX35159 WEGA",
     referencia: "AKX35159",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 69,
     codigo: "AKX35280",
     item: "FILTRO DE CABINE AKX35280 WEGA",
     referencia: "AKX35280",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 70,
     codigo: "AKX35281\/C",
     item: "FILTRO DE CABINE AKX35281\/C WEGA",
     referencia: "AKX35281\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 71,
     codigo: "ACP312",
     item: "FILTRO DE CABINE ACP312 TECFIL",
     referencia: "ACP312",
     marca: "TECFIL",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 72,
     codigo: "AKX35163",
     item: "FILTRO DE CABINE AKX35163 WEGA",
     referencia: "AKX35163",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 73,
     codigo: "AKX35634",
     item: "FILTRO DE CABINE AKX35634 WEGA",
     referencia: "AKX35634",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 74,
     codigo: "AKX1113\/C",
     item: "FILTRO DE CABINE AKX1113\/C WEGA",
     referencia: "AKX1113\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 75,
     codigo: "AKX1129F",
     item: "FILTRO DE CABINE AKX1129F WEGA",
     referencia: "AKX1129F",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 5
    },
    {
     id: 76,
     codigo: "AKX1100\/C",
     item: "FILTRO DE CABINE AKX1100\/C WEGA",
     referencia: "AKX1100\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 77,
     codigo: "AKX2007",
     item: "FILTRO DE CABINE AKX2007 WEGA",
     referencia: "AKX2007",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 78,
     codigo: "AKX1963",
     item: "FILTRO DE CABINE AKX1963 WEGA",
     referencia: "AKX1963",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 79,
     codigo: "AKX2005",
     item: "FILTRO DE CABINE AKX2005 WEGA",
     referencia: "AKX2005",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 80,
     codigo: "AKX1974\/C",
     item: "FILTRO DE CABINE AKX1974\/C WEGA",
     referencia: "AKX1974\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 81,
     codigo: "AKX1958",
     item: "FILTRO DE CABINE AKX1958 WEGA",
     referencia: "AKX1958",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 82,
     codigo: "AKX1984",
     item: "FILTRO DE CABINE AKX1984 WEGA",
     referencia: "AKX1984",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 6
    },
    {
     id: 83,
     codigo: "LA301",
     item: "FILTRO DE CABINE LA301 MAHLE",
     referencia: "LA301",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 84,
     codigo: "AKX1998",
     item: "FILTRO DE CABINE AKX1998 WEGA",
     referencia: "AKX1998",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 85,
     codigo: "AKX2014",
     item: "FILTRO DE CABINE AKX2014 WEGA",
     referencia: "AKX2014",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 86,
     codigo: "AKX35347F",
     item: "FILTRO DE CABINE AKX35347F WEGA",
     referencia: "AKX35347F",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 87,
     codigo: "AKX1959",
     item: "FILTRO DE CABINE AKX1959 WEGA",
     referencia: "AKX1959",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 88,
     codigo: "AKX1446",
     item: "FILTRO DE CABINE AKX1446 WEGA",
     referencia: "AKX1446",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 89,
     codigo: "AKX1399",
     item: "FILTRO DE CABINE AKX1399 WEGA",
     referencia: "AKX1399",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 90,
     codigo: "AKX1397",
     item: "FILTRO DE CABINE AKX1397 WEGA",
     referencia: "AKX1397",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 9
    },
    {
     id: 91,
     codigo: "AKX1215",
     item: "FILTRO DE CABINE AKX1215 WEGA ",
     referencia: "AKX1215",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 92,
     codigo: "AKX1956",
     item: "FILTRO DE CABINE AKX1956 WEGA",
     referencia: "AKX1956",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 93,
     codigo: "AKX1995",
     item: "FILTRO DE CABINE AKX1995 WEGA",
     referencia: "AKX1995",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 94,
     codigo: "AKX1993\/C",
     item: "FILTRO DE CABINE AKX1993\/C WEGA",
     referencia: "AKX1993\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 95,
     codigo: "AKX35126",
     item: "FILTRO DE CABINE AKX35126 WEGA ",
     referencia: "AKX35126",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 96,
     codigo: "AKX1971",
     item: "FILTRO DE CABINE AKX1971 WEGA",
     referencia: "AKX1971",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 97,
     codigo: "AKX1701",
     item: "FILTRO DE CABINE AKX1701 WEGA",
     referencia: "AKX1701",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 98,
     codigo: "AKX35175F",
     item: "FILTRO DE CABINE AKX35175F WEGA",
     referencia: "AKX35175F",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 99,
     codigo: "LA1099\/S",
     item: "FILTRO DE CABINE LA1099\/S MAHLE",
     referencia: "LA1099\/S",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 100,
     codigo: "AKX35345-2",
     item: "FILTRO DE CABINE AKX35345-2 WEGA ",
     referencia: "AKX35345-2",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 101,
     codigo: "AKX35157",
     item: "FILTRO DE CABINE AKX35157 WEGA",
     referencia: "AKX35157",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 4
    },
    {
     id: 102,
     codigo: "M50JD",
     item: "BATERIA MOURA M50JD",
     referencia: "50JD",
     marca: "MOURA",
     quantidadeMinima: 3,
     quantidadeEstoque: 5
    },
    {
     id: 103,
     codigo: "MO2050",
     item: "ÓLEO PARA MOTOR MAXON MINERAL 20W50 API SL",
     referencia: "MO2050",
     marca: "MAXON",
     quantidadeMinima: 312,
     quantidadeEstoque: 8
    },
    {
     id: 104,
     codigo: "MO540",
     item: "ÓLEO PARA MOTOR MAXON SINTÉTICO 5W40 ",
     referencia: "MO540",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 20
    },
    {
     id: 105,
     codigo: "AKX1456\/C",
     item: "FILTRO DE CABINE AKX 1456\/C WEGA",
     referencia: "AKX1456\/C",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 106,
     codigo: "UB0167",
     item: "BOMBA D'ÁGUA UB0167",
     referencia: "UB0167",
     marca: "URBA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 107,
     codigo: "MO020",
     item: "ÓLEO PARA MOTOR MAXON SINTÉTICO 0W20",
     referencia: "MO020",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 25
    },
    {
     id: 108,
     codigo: "MO1030",
     item: "ÓLEO PARA MOTOR MAXON LONGLIFE 10W30 ",
     referencia: "MO1030",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 33
    },
    {
     id: 109,
     codigo: "MO530",
     item: "ÓLEO PARA MOTOR MAXON LONGLIFE 5W30",
     referencia: "MO530",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 16
    },
    {
     id: 110,
     codigo: 300200,
     item: "CAR LUB LUBRIFICANTE ANTIFERRUGEM CAR80 ",
     referencia: 300200,
     marca: "CAR80",
     quantidadeMinima: 0,
     quantidadeEstoque: 9
    },
    {
     id: 111,
     codigo: 300230,
     item: "CAR80 TUNE UP FORMULA PARA LIMPAR BICOS INJETORES CAR80",
     referencia: 300230,
     marca: "CAR80",
     quantidadeMinima: 0,
     quantidadeEstoque: 9
    },
    {
     id: 112,
     codigo: 300200,
     item: "CAR CONTATO LIMPA CONTATO CAR80",
     referencia: 300200,
     marca: "CAR80",
     quantidadeMinima: 0,
     quantidadeEstoque: 6
    },
    {
     id: 113,
     codigo: "PH11457",
     item: "FILTRO DE ÓLEO PH11457 FRAM ",
     referencia: "PH11457",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 114,
     codigo: "OC1449",
     item: "FILTRO DE ÓLEO OC1449 MAHLE",
     referencia: "OC1449",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 115,
     codigo: "OX339\/2D",
     item: "FILTRO DE ÓLEO OX339\/2D MAHLE",
     referencia: "OX339\/2D",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 116,
     codigo: "WOE624",
     item: "FILTRO DE ÓLEO WOE624 WEGA",
     referencia: "WOE624",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 117,
     codigo: "WO121",
     item: "FILTRO DE ÓLEO WO121 WEGA",
     referencia: "WO121",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 118,
     codigo: "WO205",
     item: "FILTRO DE ÓLEO WO205 WEGA",
     referencia: "WO205",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 4
    },
    {
     id: 119,
     codigo: "PSL76",
     item: "FILTRO DE ÓLEO PSL76 TECFIL",
     referencia: "PSL76",
     marca: "TECFIL",
     quantidadeMinima: 3,
     quantidadeEstoque: 0
    },
    {
     id: 120,
     codigo: "WO200",
     item: "FILTRO DE ÓLEO WO200 WEGA",
     referencia: "WO200",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 121,
     codigo: "PH5796",
     item: "FILTRO DE ÓLEO PH5796 FRAM ",
     referencia: "PH5796",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 122,
     codigo: "OX1018D",
     item: "FILTRO DE ÓLEO OX1018D  MAHLE",
     referencia: "OX1018D",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 123,
     codigo: "WOE313",
     item: "FILTRO DE WOE313 WEGA",
     referencia: "WOE313",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 124,
     codigo: "OX1041D",
     item: "FILTRO DE ÓLEO OX1041D MAHLE ",
     referencia: "OX1041D",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 125,
     codigo: "PH4967",
     item: "FILTRO DE ÓLEO PH4967 FRAM",
     referencia: "PH4967",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 126,
     codigo: "PH4967A",
     item: "FILTRO DE ÓLEO PH4967A FRAM",
     referencia: "PH4967A",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 127,
     codigo: "WO133",
     item: "FILTRO DE ÓLEO WO133 WEGA",
     referencia: "WO133",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 128,
     codigo: "WO181",
     item: "FILTRO DE ÓLEO WO181 WEGA",
     referencia: "WO181",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 129,
     codigo: "WO139",
     item: "FILTRO DE ÓLEO WO139 WEGA",
     referencia: "WO139",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 4
    },
    {
     id: 130,
     codigo: "OX175D",
     item: "FILTRO DE ÓLEO OX175D MAHLE",
     referencia: "OX175D",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 131,
     codigo: "WO156",
     item: "FILTRO DE ÓLEO WO156 WEGA",
     referencia: "WO156",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 132,
     codigo: "JFOH00",
     item: "FILTRO DE ÓLEO JFOH00 WEGA",
     referencia: "JFOH00",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 3
    },
    {
     id: 133,
     codigo: "JFO0H01",
     item: "FILTRO DE ÓLEO JFO0H01 WEGA",
     referencia: "JFO0H01",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 0
    },
    {
     id: 134,
     codigo: "OC100",
     item: "FILTRO DE ÓLEO OC100 MAHLE",
     referencia: "OC100",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 135,
     codigo: "JFO0F03",
     item: "FILTRO DE ÓLEO JFO0F03 FRAM",
     referencia: "JFO0F03",
     marca: "WEGA",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 136,
     codigo: "PH3614",
     item: "FILTRO DE ÓLEO PH3614 FRAM",
     referencia: "PH3614",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 137,
     codigo: "PH5566",
     item: "FILTRO DE ÓLEO PH5566 FRAM ",
     referencia: "PH5566",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 138,
     codigo: "PH3593A",
     item: "FILTRO DE ÓLEO PH3593A FRAM",
     referencia: "PH3593A",
     marca: "FRAM",
     quantidadeMinima: 4,
     quantidadeEstoque: 3
    },
    {
     id: 139,
     codigo: "OC205",
     item: "FILTRO DE ÓLEO OC205 MAHLE ",
     referencia: "OC205",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 140,
     codigo: "OC504",
     item: "FILTRO DE ÓLEO OC504 MAHLE",
     referencia: "OC504",
     marca: "MAHLE",
     quantidadeMinima: 5,
     quantidadeEstoque: 7
    },
    {
     id: 141,
     codigo: "OC506",
     item: "FILTRO DE ÓLEO OC506 MAHLE",
     referencia: "OC506",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 5
    },
    {
     id: 142,
     codigo: "OC600",
     item: "FILTRO DE ÓLEO OC600 MAHLE ",
     referencia: "OC600",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 11
    },
    {
     id: 143,
     codigo: "OC522",
     item: "FILTRO DE ÓLEO OC522 MAHLE",
     referencia: "OC522",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 11
    },
    {
     id: 144,
     codigo: "PH10908",
     item: "FILTRO DE ÓLEO PH10908 MIX 3\/2-2 FRAM",
     referencia: "PH10908",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 145,
     codigo: "M70KD",
     item: "BATERIA MOURA M79KD",
     referencia: "M79KD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 1
    },
    {
     id: 146,
     codigo: "M60GD",
     item: "BATERIA MOURA M60GD",
     referencia: "M60GD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 6
    },
    {
     id: 147,
     codigo: "M60GI",
     item: "BATERIA MOURA M60GI",
     referencia: "M60GI",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 1
    },
    {
     id: 148,
     codigo: "MF60AD",
     item: "BATERIA MOURA MF60AD",
     referencia: "MF60AD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 1
    },
    {
     id: 149,
     codigo: "M80RD",
     item: "BATERIA MOURA M80RD",
     referencia: "M80RD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 1
    },
    {
     id: 150,
     codigo: "M75LD",
     item: "BATERIA MOURA M75LD",
     referencia: "M75LD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 1
    },
    {
     id: 151,
     codigo: "M60AD",
     item: "BATERIA MOURA M60AD",
     referencia: "M60AD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 9
    },
    {
     id: 152,
     codigo: "M40SD",
     item: "BATERIA MOURA M40SD",
     referencia: "M40SD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 4
    },
    {
     id: 153,
     codigo: "M48FD",
     item: "BATERIA MOURA M48FD",
     referencia: "M48FD",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 3
    },
    {
     id: 154,
     codigo: "M50ED",
     item: "BATERIA MOURA M50ED",
     referencia: "M50ED",
     marca: "MOURA",
     quantidadeMinima: 2,
     quantidadeEstoque: 6
    },
    {
     id: 155,
     codigo: "KL635",
     item: "FILTRO DE COMBUSTIVEL KL635 MAHLE",
     referencia: "KL635",
     marca: "MAHLE",
     quantidadeMinima: 4,
     quantidadeEstoque: 8
    },
    {
     id: 156,
     codigo: "JFCF00",
     item: "FILTRO DE COMBUSTIVEL JFCF00 WEGA ",
     referencia: "JFCF00",
     marca: "WEGA",
     quantidadeMinima: 4,
     quantidadeEstoque: 1
    },
    {
     id: 157,
     codigo: "G9889F",
     item: "FILTRO DE COMBUSTIVEL G9889F FRAM",
     referencia: "G9889F",
     marca: "FRAM",
     quantidadeMinima: 4,
     quantidadeEstoque: 3
    },
    {
     id: 158,
     codigo: "KL582",
     item: "FILTRO DE COMBUSTIVEL KL582 MAHLE",
     referencia: "KL582",
     marca: "MAHLE",
     quantidadeMinima: 5,
     quantidadeEstoque: 44
    },
    {
     id: 159,
     codigo: "KL583",
     item: "FILTRO DE COMBUSTIVEL KL583 MAHLE",
     referencia: "KL583",
     marca: "MAHLE",
     quantidadeMinima: 5,
     quantidadeEstoque: 18
    },
    {
     id: 160,
     codigo: "G5188",
     item: "FILTRO DE COMBUSTIVEL G5188 FRAM",
     referencia: "G5188",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 1
    },
    {
     id: 161,
     codigo: "KL420",
     item: "FILTRO DE COMBUSTIVEL KL420 MAHLE ",
     referencia: "KL420",
     marca: "MAHLE",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 162,
     codigo: "G10226F",
     item: "FILTRO DE COMBUSTIVEL G10226F FRAM",
     referencia: "G10226F",
     marca: "FRAM",
     quantidadeMinima: 3,
     quantidadeEstoque: 2
    },
    {
     id: 163,
     codigo: 53903851,
     item: "ABRAÇADEIRA SEM FIM ZN 32X50X9",
     referencia: 53903851,
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 25
    },
    {
     id: 164,
     codigo: 53902538,
     item: "ABRAÇADEIRA SEM FIM ZN 25X40X9",
     referencia: 53902538,
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 23
    },
    {
     id: 165,
     codigo: 53901422,
     item: "ABRAÇADEIRA SEM FIM ZNB 12X22X9",
     referencia: 53901422,
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 25
    },
    {
     id: 166,
     codigo: 53901216,
     item: "ABRAÇADEIRA SEM FIM ZN 10X16X9",
     referencia: 53901216,
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 25
    },
    {
     id: 167,
     codigo: "W77",
     item: "TRAVA ROSCA W77 WURTH",
     referencia: "W77",
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 5
    },
    {
     id: 168,
     codigo: "A230764",
     item: "ARRUELA VED ALUMINIO 14.0X20.0 X1.5MM",
     referencia: "A230764",
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 50
    },
    {
     id: 169,
     codigo: 892140127,
     item: "VERNIZ DE MOTOR WURTH 1L",
     referencia: 892140127,
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 170,
     codigo: "D3B5-9A299-AD",
     item: "EMISSOR DE COMBUSTIVEL FORD ",
     referencia: "D3B5-9A299-AD",
     marca: "FORD",
     quantidadeMinima: 0,
     quantidadeEstoque: 6
    },
    {
     id: 171,
     codigo: "T010140",
     item: "SENSOR DE COMBUSTIVEL TSA",
     referencia: "T010140",
     marca: "TSA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 172,
     codigo: "ARB10",
     item: "BOMBA DE COMBUSTIVEL EUROTEAM",
     referencia: "ARB10",
     marca: "EUROTEAM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 173,
     codigo: "F000TE176V",
     item: "SENSOR DE COMBUSTIVEL BOSCH",
     referencia: "F000TE176V",
     marca: "BOSCH",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 174,
     item: "ARRUELA DE BUJÃO NISSAN",
     quantidadeMinima: 0,
     quantidadeEstoque: 70
    },
    {
     id: 175,
     item: "PRESILHA 15.3",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 176,
     item: "PRESILHA 11.9",
     quantidadeMinima: 0,
     quantidadeEstoque: 6
    },
    {
     id: 177,
     item: "PRESILHA 11.3",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 178,
     item: "PRESILHA 13.3",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 179,
     item: "PRESILHA 14.8",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 180,
     item: "PRESILHA 14.5",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 181,
     item: "PRESILHA 12.3",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 182,
     item: "JOINT 16X24 - 15",
     quantidadeMinima: 0,
     quantidadeEstoque: 15
    },
    {
     id: 183,
     item: "ANEL DE VEDAÇÃO PRETO",
     quantidadeMinima: 0,
     quantidadeEstoque: 29
    },
    {
     id: 184,
     item: "ARRUELA DE BUJÃO AZUL",
     quantidadeMinima: 0,
     quantidadeEstoque: 13
    },
    {
     id: 185,
     item: "ARRUELA DE BUJÃO CHEVROLET",
     quantidadeMinima: 0,
     quantidadeEstoque: 40
    },
    {
     id: 186,
     item: "ARRUELA DE BUJÃO FIAT",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 187,
     item: "ARRUELA DE BUJÃO PEUGEOT",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 188,
     item: "ARRUELA DE BUJÃO RENAULT",
     quantidadeMinima: 0,
     quantidadeEstoque: 11
    },
    {
     id: 189,
     item: "ARRUELA DE BUJÃO FORD",
     quantidadeMinima: 0,
     quantidadeEstoque: 18
    },
    {
     id: 190,
     item: "ARRUELA DE BUJÃO HONDA",
     quantidadeMinima: 0,
     quantidadeEstoque: 14
    },
    {
     id: 191,
     item: "ARRUELA DE BUJÃO TOYOTA",
     quantidadeMinima: 0,
     quantidadeEstoque: 24
    },
    {
     id: 192,
     item: "ARRUELA DE BUJÃO VW",
     quantidadeMinima: 0,
     quantidadeEstoque: 77
    },
    {
     id: 193,
     item: "ARRUELA VEDA TUBO ",
     quantidadeMinima: 0,
     quantidadeEstoque: 10
    },
    {
     id: 194,
     codigo: 3621,
     item: "ABRAÇADEIRA UNIVERSAL 12X16",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 195,
     codigo: 3640,
     item: "ABRAÇADEIRA UNIVERSAL 14X22",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 196,
     codigo: 3625,
     item: "ABRAÇADEIRA UNIVERSAL 19X27",
     quantidadeMinima: 0,
     quantidadeEstoque: 21
    },
    {
     id: 197,
     codigo: 3643,
     item: "ABRAÇADEIRA UNIVERSAL 22X32",
     quantidadeMinima: 0,
     quantidadeEstoque: 21
    },
    {
     id: 198,
     codigo: 870001,
     item: "ABRAÇADEIRA UNIVERSAL 9X13",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 199,
     codigo: 40833,
     item: "ABRAÇADEIRA COIFA 33X7",
     quantidadeMinima: 0,
     quantidadeEstoque: 10
    },
    {
     id: 200,
     codigo: 3624,
     item: "ABRAÇADEIRA UNIVERSAL 25X38",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 201,
     item: "ABRAÇADEIRA UNIVERSAL 38X51",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 202,
     item: "ABRAÇADEIRA UNIVERSAL 26X38",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 203,
     codigo: 853,
     item: "ABRAÇADEIRA RED INCA 9MM 3\/4X1",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 204,
     codigo: 893556238,
     item: "SOLUÇÃO  DE ARREFECIMENTO ORGÂNICO WURTH",
     marca: "WURTH",
     quantidadeMinima: 0,
     quantidadeEstoque: 12
    },
    {
     id: 205,
     codigo: "FAP4043",
     item: "FILTRO DE AR WEGA FAP4043",
     referencia: "FAP4043",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 206,
     codigo: "JFA0285",
     item: "FILTRO DE AR WEGA JFA0285",
     referencia: "JFA0285",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 207,
     codigo: "FAP4041",
     item: "FILTRO DE AR WEGA FAP4041",
     referencia: "FAP4041",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 208,
     codigo: "FAP6013",
     item: "FILTRO DE AR WEGA FAP6013",
     referencia: "FAP6013",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 209,
     codigo: "FAP9013",
     item: "FILTRO DE AR WEGA FAP9013",
     referencia: "FAP9013",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 210,
     codigo: "CA9315",
     item: "FILTRO DE AR WEGA CA9315",
     referencia: "CA9315",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 211,
     codigo: "FAP4811",
     item: "FILTRO DE AR WEGA FAP4811",
     referencia: "FAP4811",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 212,
     codigo: "FAP4871",
     item: "FILTRO DE AR WEGA FAP4871",
     referencia: "FAP4871",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 213,
     codigo: "FAP6000",
     item: "FILTRO DE AR WEGA FAP6000",
     referencia: "FAP6000",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 214,
     codigo: "JFA0428\/4",
     item: "FILTRO DE AR WEGA FAP0428\/4",
     referencia: "FAP6013",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 215,
     codigo: "JFA0428\/3",
     item: "FILTRO DE AR WEGA FAP0428\/3",
     referencia: "FAP9013",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 216,
     codigo: "JFA0438",
     item: "FILTRO DE AR WEGA FAP0438",
     referencia: "CA9315",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 217,
     codigo: "JFA0405",
     item: "FILTRO DE AR WEGA FAP0405",
     referencia: "FAP4811",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 218,
     codigo: "JFA0447",
     item: "FILTRO DE AR WEGA JFA0447",
     referencia: "FAP4871",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 219,
     codigo: "JFA0426",
     item: "FILTRO DE AR WEGA JFA0426",
     referencia: "FAP6000",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 220,
     codigo: "JFA0429",
     item: "FILTRO DE AR WEGA JFA0429",
     referencia: "JFA0428\/4",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 221,
     codigo: "JFA0440",
     item: "FILTRO DE AR WEGA JFA0440",
     referencia: "JFA0428\/3",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 222,
     codigo: "JFA0587",
     item: "FILTRO DE AR WEGA JFA0587",
     referencia: "JFA0438",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 223,
     codigo: "JFA0F17",
     item: "FILTRO DE AR WEGA JFA0F17",
     referencia: "JFA0405",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 224,
     codigo: "JFA0137",
     item: "FILTRO DE AR WEGA JFA0137",
     referencia: "JFA0447",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 225,
     codigo: "JFA0134",
     item: "FILTRO DE AR WEGA JFA0134",
     referencia: "JFA0426",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 226,
     codigo: "JFA0193",
     item: "FILTRO DE AR WEGA JFA0193",
     referencia: "JFA0429",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 227,
     codigo: "JFA0135",
     item: "FILTRO DE AR WEGA JFA0135",
     referencia: "JFA0440",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 228,
     codigo: "FAP9296",
     item: "FILTRO DE AR WEGA FAP9296",
     referencia: "JFA0587",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 229,
     codigo: "FAP9295",
     item: "FILTRO DE AR WEGA FAP9295",
     referencia: "JFA0F17",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 230,
     codigo: "FAP9003",
     item: "FILTRO DE AR WEGA FAP9003",
     referencia: "JFA0137",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 231,
     codigo: "FAP7019",
     item: "FILTRO DE AR WEGA FAP7019",
     referencia: "JFA0134",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 232,
     codigo: "FAP9286",
     item: "FILTRO DE AR WEGA FAP9286",
     referencia: "JFA0193",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 233,
     codigo: "ART6098",
     item: "FILTRO DE AR TECFIL ART6098",
     referencia: "JFA0135",
     marca: "TECFIL",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 234,
     codigo: "LX1780\/3",
     item: "FILTRO DE AR MAHLE LX1780\/3",
     referencia: "FAP9296",
     marca: "MAHLE",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 235,
     codigo: 97646,
     item: "VELA DE IGNIÇÃO NGK BKR7ESB-D",
     referencia: "BKR7ESB-D",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 236,
     codigo: 92277,
     item: "VELA DE IGNIÇÃO NGK LNAR7A-9G",
     referencia: "LNAR7A-9G",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 237,
     item: "VELA DE IGNIÇÃO NGK LTR7A-10",
     referencia: "LTR7A-10",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 238,
     codigo: "SP411",
     item: "VELA DE IGNIÇÃO MOTOCRAFT AXFS22FM",
     referencia: "AXFS22FM",
     marca: "MOTORCRAFT",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 239,
     item: "VELA DE IGNIÇÃO NGK KR8B-10D",
     referencia: "KR8B-10D",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 240,
     item: "VELA DE IGNIÇÃO NGK BKR7E ",
     referencia: "BKR7E ",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 241,
     codigo: 97135,
     item: "VELA DE IGNIÇÃO BKR6E-D",
     referencia: "BKR6E-D",
     marca: "NGK",
     quantidadeMinima: 4,
     quantidadeEstoque: 0
    },
    {
     id: 242,
     codigo: 94477,
     item: "VELA DE IGNIÇÃO FR7D-DEG",
     referencia: "FR7D-DEG",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 243,
     codigo: 2288,
     item: "VELA DE IGNIÇÃO BKR6EK ",
     referencia: "BKR6EK",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 244,
     codigo: 96148,
     item: "VELA DE IGNIÇÃO BR6ES-D",
     referencia: "BR6ES-D",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 245,
     codigo: 97236,
     item: "VELA DE IGNIÇÃO LZKR7B-DE",
     referencia: "LZKR7B-DE",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 246,
     item: "VELA DE IGNIÇÃO FRGE-D",
     referencia: "FRGE-D",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 247,
     item: "VELA DE IGNIÇÃO 93206675 ",
     referencia: 93206675,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 20
    },
    {
     id: 248,
     item: "VELA DE IGNIÇÃO 93230926",
     referencia: 93230926,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 20
    },
    {
     id: 249,
     item: "VELA DE IGNIÇÃO 93221446",
     referencia: 93221446,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 250,
     codigo: 17512,
     item: "CABOS DE IGNIÇÃO ST-V25",
     referencia: "ST-V25",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 9
    },
    {
     id: 251,
     codigo: 16437,
     item: "CABOS DE IGNIÇÃO SC-G101",
     referencia: "SC-G101",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 252,
     codigo: 16206,
     item: "CABOS DE IGNIÇÃO SC-R13",
     referencia: "SC-R13",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 253,
     codigo: 15795,
     item: "CABOS DE IGNIÇÃO SC-F35",
     referencia: "SC-F35",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 254,
     codigo: 18102,
     item: "CABOS DE IGNIÇÃO SC-G73",
     referencia: "SC-G73",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 255,
     codigo: 16206,
     item: "CABOS DE IGNIÇÃO SC-F30",
     referencia: "SC-F30",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 256,
     item: "CABOS DE IGNIÇÃO BH1A-12280-AA-8",
     referencia: "BH1A-12280-AA-8",
     marca: "FORD",
     quantidadeMinima: 0,
     quantidadeEstoque: 8
    },
    {
     id: 257,
     codigo: 48551,
     item: "BOMBA DE IGNIÇÃO U2079",
     referencia: "U2079",
     marca: "NGK",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 258,
     item: "BOMBA DE IGNIÇÃO B10071MM1",
     referencia: "B10071MM1",
     marca: "MAGNETE MARELLI",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 259,
     item: "BOMBA DE IGNIÇÃO F000ZSO210",
     referencia: "F000ZSO210",
     marca: "BOSCH",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 260,
     codigo: 50103402,
     item: "INJETOR DE COMBUSTIVEL VW",
     marca: "MAGNETE MARELLI",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 261,
     item: "SENSOR DE OXIGENIO ES20331-13B1",
     referencia: "ES20331-13B1",
     marca: "DELPHI",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 262,
     codigo: "FAP9299",
     item: "FILTRO DE AR WEGA FAP9299",
     referencia: "FAP9299",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 263,
     codigo: "FAP5218",
     item: "FILTRO DE AR WEGA FAP5218",
     referencia: "FAP5218",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 264,
     codigo: "FAP9273",
     item: "FILTRO DE AR WEGA FAP9273",
     referencia: "FAP9273",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 265,
     codigo: "FAP4054\/2",
     item: "FILTRO DE AR WEGA FAP4054\/2",
     referencia: "FAP4054\/2",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 266,
     codigo: "WR245",
     item: "FILTRO DE AR WEGA WR245",
     referencia: "WR245",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 267,
     codigo: "FAP3286",
     item: "FILTRO DE AR WEGA FAP3286",
     referencia: "FAP3286",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 268,
     codigo: "FAP3233",
     item: "FILTRO DE AR WEGA FAP3233",
     referencia: "FAP3233",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 5
    },
    {
     id: 269,
     codigo: "LX523",
     item: "FILTRO DE AR MAHLE LX523",
     referencia: "LX523",
     marca: "MAHLE",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 270,
     codigo: "FAP3289",
     item: "FILTRO DE AR WEGA FAP3289",
     referencia: "FAP3289",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 271,
     codigo: "FAP3280",
     item: "FILTRO DE AR WEGA FAP3280",
     referencia: "FAP3280",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 272,
     codigo: "FAP3261",
     item: "FILTRO DE AR WEGA FAP3261",
     referencia: "FAP3261",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 273,
     codigo: "LX1779",
     item: "FILTRO DE AR MAHLE LX1779",
     referencia: "LX1779",
     marca: "MAHLE",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 274,
     codigo: "FAP7007",
     item: "FILTRO DE AR WEGA FAP7007",
     referencia: "FAP7007",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 275,
     codigo: "WR196",
     item: "FILTRO DE AR WEGA WR196",
     referencia: "WR196",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 276,
     codigo: "FAP3599",
     item: "FILTRO DE AR WEGA FAP3599",
     referencia: "FAP3599",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 277,
     codigo: "FAP2219",
     item: "FIILTRO DE AR WEGA FAP2219",
     referencia: "FAP2219",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 278,
     codigo: "FAP3285",
     item: "FILTRO DE AR WEGA FAP3285",
     referencia: "FAP3285",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 279,
     codigo: "FAP3288",
     item: "FILTRO DE AR WEGA FAP3288",
     referencia: "FAP3288",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 280,
     codigo: "JFA0H21",
     item: "FILTRO DE AR WEGA JFA0H21",
     referencia: "JFA0H21",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 281,
     codigo: "LX3800",
     item: "FILTRO DE AR MAHLE LX3800",
     referencia: "LX3800",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 282,
     codigo: "JFA0K16",
     item: "FILTRO DE AR WEGA JFA0K16",
     referencia: "JFA0K16",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 283,
     codigo: "LX1785",
     item: "FILTRO DE AR MAHLE LX1785",
     referencia: "LX1785",
     marca: "MAHLE",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 284,
     codigo: "JFA0H26",
     item: "FILTRO DE AR WEGA JFA0H26 ",
     referencia: "JFA0H26",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 285,
     codigo: "JFA0H40",
     item: "FILTRO DE AR WEGA JFA0H40",
     referencia: "JFAOH40",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 286,
     codigo: "JFA0H29",
     item: "FILTRO DE AR WEGA JFA0H29",
     referencia: "JFA0H29",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 287,
     codigo: "JFA0H24",
     item: "FILTRO DE AR WEGA JFA0H24",
     referencia: "JFA0H24",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 288,
     codigo: "N-1272",
     item: "PASTILHA DE FREIO N-1272",
     referencia: "N-1272",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 289,
     codigo: "N-540",
     item: "PASTILHA DE FREIO N-540",
     referencia: "N-540",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 290,
     codigo: "N-547",
     item: "PASTILHA DE FREIO N-547",
     referencia: "N-547",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 291,
     codigo: "N-1770",
     item: "PASTILHA DE FREIO N-1770",
     referencia: "N-1770",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 292,
     codigo: "N-2131",
     item: "PASTILHA DE FREIO N-2131",
     referencia: "N-2131",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 293,
     codigo: "HQF2344AC",
     item: "PASTILHA DE FREIO HQF2344AC FERODO",
     referencia: "HQF2344AC",
     marca: "FERODO",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 294,
     codigo: "HQF2460",
     item: "PASTILHA DE FREIO HQF2460 FERODO",
     referencia: "HQF2460",
     marca: "FERODO",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 295,
     codigo: 1423,
     item: "PASTILHA DE FREIO 1423 SYL",
     referencia: 1423,
     marca: "S.Y.L",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 296,
     codigo: "N-252",
     item: "PASTILHA DE FREIO N-525 COBREG",
     referencia: "N-252",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 297,
     codigo: "N-288",
     item: "PASTILHA DE FREIO N-288 COBREG",
     referencia: "N-288",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 298,
     codigo: "HQJ-2356A",
     item: "PASTILHA DE FREIO HQJ-2356A JURID",
     referencia: "HQJ-2356A",
     marca: "JURID",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 299,
     codigo: "HQJ-2282A",
     item: "PASTILHA DE FREIO HQJ-2282A JURID",
     referencia: "HQJ-2282A",
     marca: "JURID",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 300,
     codigo: "N-1767",
     item: "PASTILHA DE FREIO N-1767 COBRAG",
     referencia: "N-1767",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 301,
     codigo: 3250,
     item: "PASTILHA DE FREIO 3250 S.Y.L",
     referencia: 3250,
     marca: "S.Y.L",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 302,
     codigo: "N-1344",
     item: "PASTILHA DE FREIO N-1344 COBREG",
     referencia: "N-1344",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 303,
     codigo: "N-1377",
     item: "PASTILHA DE FREIO N-1377 COBREG",
     referencia: "N-1377",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 304,
     codigo: "N-1368",
     item: "PASTILHA DE FREIO N-1368 COBREG",
     referencia: "N-1368",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 305,
     codigo: "HQJ-2288A",
     item: "PASTILHA DE FREIO HQJ-2288A JURID",
     referencia: "HQJ-2288A",
     marca: "JURID",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 306,
     codigo: "HQJ-2229A",
     item: "PASTILHA DE FREIO HQJ-2229A JURID",
     referencia: "HQJ-2229A",
     marca: "JURID",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 307,
     codigo: "N-1166",
     item: "PASTILHA DE FREIO N-1166 COBREG",
     referencia: "N-1166",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 308,
     codigo: "N-457",
     item: "PASTILHA DE FREIO N-457 COBREG",
     referencia: "N-457",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 309,
     codigo: 1359,
     item: "PASTILHA DE FREIO 1359 S.Y.L",
     referencia: 1359,
     marca: "S.Y.L",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 310,
     codigo: 2114,
     item: "PASTILHA DE FREIO 2114 S.Y.L",
     referencia: 2114,
     marca: "S.Y.L",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 311,
     codigo: "N-2031",
     item: "PASTILHA DE FREIO N-2031 COBREG",
     referencia: "N-2031",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 312,
     codigo: "N-378",
     item: "PASTILHA DE FREIO N-378 COBREG",
     referencia: "N-378",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 313,
     codigo: "N-305",
     item: "PASTILHA DE FREIO N-305 COBREG",
     referencia: "N-305",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 314,
     codigo: "N-377",
     item: "PASTILHA DE FREIO N-377 COBREG",
     referencia: "N-377",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 315,
     codigo: "N-367",
     item: "PASTILHA DE FREIO N-367 COBREG",
     referencia: "N-367",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 316,
     codigo: "N-152",
     item: "PASTILHA DE FREIO N-152 COBREG",
     referencia: "N-152",
     marca: "COBREG",
     quantidadeMinima: 0,
     quantidadeEstoque: 0
    },
    {
     id: 317,
     codigo: "MA60AD",
     item: "BATERIA MOURA MA60AD ",
     referencia: "MA60AD",
     marca: "MOURA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 318,
     codigo: "CB\/49-CPA",
     item: "SAPATOS COM LONAS PARA FREIOS CB\/49-CPA ",
     referencia: "CB\/49-CPA",
     marca: "FRANS.LE",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 319,
     codigo: "FD\/152-CPA",
     item: "SAPATOS COM LONAS PARA FREIOS FD\/152-CPA ",
     referencia: "FD\/152-CPA",
     marca: "FRANS.LE",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 320,
     codigo: "BWD6000:009",
     item: "CILINDRO DE RODA 19,05MM",
     referencia: "BWD6000:009",
     marca: "TRW",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 321,
     codigo: "ALK-4529",
     item: "KIT ROLAMENTO DE RODA ALK-4529",
     referencia: "ALK-4529",
     marca: "IMA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 322,
     codigo: "AKX1992",
     item: "FILTRO DE AR WEGA AKX1992 ",
     referencia: "AKX1992",
     marca: "WEGA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 323,
     codigo: "TS4121:009",
     item: "TERMINAL DE DIREÇÃO TS4121:009 TRW",
     referencia: "TS4121:009",
     marca: "TRW",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 324,
     codigo: "VKBA 4544A",
     item: "KIT ROLAMENTO DE RODA VKBA 4544 SKF",
     referencia: "VKBA4544A",
     marca: "SKF",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 325,
     codigo: 6013,
     item: "CILINDRO DE RODA 19MM 006013 ATF",
     referencia: 6013,
     marca: "ATF",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 326,
     codigo: 5841,
     item: "CILINDRO DE RODA 17MM 005841 ATF",
     referencia: 5841,
     marca: "ATF",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 327,
     codigo: "RCCR02860:019",
     item: "CILINDRO DE RODA RCCR02860:019 TRW",
     referencia: "RCCR02860:019",
     marca: "TRW",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 328,
     codigo: "RCCR02890:009",
     item: "CILINDRO DE RODA RCCR028990:009 TRW",
     referencia: "RCCR02890:009",
     marca: "TRW",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 329,
     codigo: "BWF6000:009",
     item: "CILINDRO DE RODA BWF6000:009 (SPIN) TRW",
     referencia: "BWF6000:009",
     marca: "TRW",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 330,
     codigo: "C-3430",
     item: "CILINDRO DE RODA C-3430 19,05MM CONTROIL",
     referencia: "C-3430",
     marca: "CONTROIL",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 331,
     codigo: "FD\/61-CPA ",
     item: "SAPATOS COM LONAS FD\/61-CPA ",
     referencia: "FD\/61-CPA ",
     marca: "FRANS.LE",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 332,
     item: "COLA EPOXI ORBI QUIMICA",
     marca: "ORBI QUIMICA",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 333,
     item: "COLA DE SILICONE DRIKO ",
     marca: "ORBI QUIMICA",
     quantidadeMinima: 0,
     quantidadeEstoque: 7
    },
    {
     id: 334,
     item: "VEDA ESCAPE ORBI QUIMICA ",
     marca: "ORBI QUIMICA",
     quantidadeMinima: 0,
     quantidadeEstoque: 2
    },
    {
     id: 335,
     codigo: "E2868802652AD",
     item: "VALVULA TERMOSTATICA E2868802652AD WAHLER",
     referencia: "E2868802652AD",
     marca: "WAHLER",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 336,
     codigo: 4099,
     item: "PLUG ELETRONICO 4099 ",
     referencia: 4099,
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 337,
     codigo: 93275736,
     item: "VALVULA DE EXPANSÃO TESMOSTATO",
     referencia: 93275736,
     quantidadeMinima: 0,
     quantidadeEstoque: 4
    },
    {
     id: 338,
     codigo: "RT1193",
     item: "TOMOSTATO RT1193",
     referencia: "RT1193",
     marca: "MOTORCRAFT",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 339,
     codigo: 93373723,
     item: "PARAFUSO ROSCADO TENSOR CORREIA 93373723",
     referencia: 93373723,
     marca: "GM",
     quantidadeMinima: 0,
     quantidadeEstoque: 5
    },
    {
     id: 340,
     item: "FRANELA AZUL",
     referencia: "AZUL",
     quantidadeMinima: 20,
     quantidadeEstoque: 120
    },
    {
     id: 341,
     codigo: "BD8930",
     item: "DISCO DE FREIO FREMAX BD8930",
     referencia: "BD8930",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 342,
     codigo: "BD3547",
     item: "DISCO DE FREIO FREMAX BD3547",
     referencia: 4099,
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 343,
     codigo: "BD1440",
     item: "DISCO DE FREIO FREMAX BD1440",
     referencia: 93275736,
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 344,
     codigo: "BD5297",
     item: "DISCO DE FREIO FREMAX BD5297",
     referencia: "RT1193",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 345,
     codigo: "BD5602",
     item: "DISCO DE FREIO FREMAX BD5602",
     referencia: 93373723,
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 346,
     codigo: "BD3108",
     item: "DISCO DE FREIO FREMAX BD3108",
     referencia: 0,
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 347,
     codigo: "BD1700",
     item: "DISCO DE FREIO FREMAX BD1700",
     referencia: "BD8930",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 348,
     codigo: "BD1705",
     item: "DISCO DE FREIO FREMAX BD1705",
     referencia: "BD3547",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 349,
     codigo: "BD3545",
     item: "DISCO DE FREIO FREMAX BD3545",
     referencia: "BD1440",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 350,
     codigo: "BD8929",
     item: "DISCO DE FREIO FREMAX BD8929",
     referencia: "BD5297",
     marca: "FREMAX",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 351,
     codigo: "MUH7",
     item: "LAMPADA MULTILASER H7 12V 55W",
     referencia: "H7",
     marca: "MULTILASER",
     quantidadeEstoque: 48
    },
    {
     id: 352,
     codigo: "ETE7571",
     item: "ABRAÇADEIRA DE NYLON ETE7571 1,3MM PRETA",
     referencia: "BD3108",
     marca: "RAINHA DAS SETE",
     quantidadeMinima: 0,
     quantidadeEstoque: 58
    },
    {
     id: 353,
     item: "ABRAÇADEIRA DE NYLON VERDE",
     quantidadeEstoque: 18
    },
    {
     id: 354,
     item: "ABRAÇADEIRA DE NYLON VERMELHA",
     quantidadeEstoque: 46
    },
    {
     id: 355,
     item: "ABRAÇADEIRA DE NYLON AMARELA",
     quantidadeEstoque: 100
    },
    {
     id: 356,
     codigo: "ETE7518",
     item: "ABRAÇADEIRA DE NYLON ETE7518 1,0MM PRETA",
     referencia: "ETE7518",
     quantidadeEstoque: 100
    },
    {
     id: 357,
     item: "ABRAÇADEIRA DE NYLON BRANCA 1,45MM",
     quantidadeEstoque: 7
    },
    {
     id: 358,
     codigo: "MO5W40",
     item: "ÓLEO PARA MOTOR MAXON LONGLIFE 5W40",
     referencia: "MO5W40",
     marca: "MAXON",
     quantidadeMinima: 0,
     quantidadeEstoque: 12
    },
    {
     id: 359,
     codigo: "JFA0H12",
     item: "FILTRO DE AR WEGA JFA0H12 ",
     referencia: "JFA0H12",
     marca: "WEGA",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 360,
     codigo: "KER7A-8DEG",
     item: "VELA DE IGNIÇÃO NGK KER7A-8DEG",
     referencia: 0,
     marca: "NGK",
     quantidadeMinima: 4,
     quantidadeEstoque: 8
    },
    {
     id: 361,
     codigo: "N-252",
     item: "PASTILHA DE FREIO N-252",
     referencia: "N-252",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 362,
     codigo: "FAP9054",
     item: "FILTRO DE AR FAP9054 WEGA",
     referencia: "FAP9054",
     marca: "WEGA",
     quantidadeMinima: 1,
     quantidadeEstoque: 3
    },
    {
     id: 363,
     codigo: 98553886,
     item: "ÓLEO SINTÉTICO ACDELCO DEXOS 1 SAE 5W30 API SP",
     referencia: "5w30",
     marca: "ACDELCO",
     quantidadeMinima: 12,
     quantidadeEstoque: 48
    },
    {
     id: 364,
     codigo: "AU808",
     item: "LÂMPADA AUTOMOTIVA LINHA LEVE 5000K H7 12V C\/2",
     referencia: "H7",
     marca: "MULTILASER",
     quantidadeMinima: 20,
     quantidadeEstoque: 40
    },
    {
     id: 365,
     codigo: "AU814",
     item: "LÂMPADA AUTOMOTIVA LINHA LEVE 5000K HB4 12V C\/2",
     referencia: "HB4",
     marca: "MULTILASER",
     quantidadeMinima: 20,
     quantidadeEstoque: 40.5
    },
    {
     id: 366,
     codigo: "AU806",
     item: "LÂMPADA AUTOMOTIVA LINHA LEVE 5000K H4 12V C\/2",
     referencia: "H4",
     marca: "MULTILASER",
     quantidadeMinima: 20,
     quantidadeEstoque: 12
    },
    {
     id: 367,
     codigo: "9006CBI",
     item: "LÂMPADA AUTOMOTIVA HB4 COOL BLUE INTENSE 12V 51W P22 9006CBI C\/2",
     referencia: "HB4",
     marca: "OSRAM",
     quantidadeMinima: 0,
     quantidadeEstoque: 1
    },
    {
     id: 368,
     item: "LÂMPADA AUTOMOTIVA HB4 12V 51W GE",
     referencia: "HB4",
     marca: "GE",
     quantidadeMinima: 0,
     quantidadeEstoque: 0.5
    },
    {
     id: 369,
     codigo: 7506,
     item: "LÂMPADA HELLA 7506 12V P21W 2ZN CN",
     referencia: 7506,
     marca: "HELLA",
     quantidadeMinima: 0,
     quantidadeEstoque: 3
    },
    {
     id: 370,
     item: "LÂMPADA 3156 12V 27W ",
     referencia: 3156,
     quantidadeMinima: 20,
     quantidadeEstoque: 164
    },
    {
     id: 371,
     item: "LÂMPADA 3157 12V 27W ",
     quantidadeEstoque: 65
    },
    {
     id: 372,
     item: "LÂMPADA 7440 12V 21W ",
     quantidadeEstoque: 50
    },
    {
     id: 373,
     item: "LÂMPADA 7443 12V 5W ",
     quantidadeEstoque: 109
    },
    {
     id: 374,
     item: "LÂMPADA 921 12V 16W ",
     quantidadeEstoque: 110
    },
    {
     id: 375,
     item: "LÂMPADA 7507 12V 21W ",
     quantidadeEstoque: 10
    },
    {
     id: 376,
     item: "LÂMPADA3893 12V 4W ",
     quantidadeEstoque: 90
    },
    {
     id: 377,
     item: "LÂMPADA HELLA HB5 12V 65\/55W",
     quantidadeEstoque: 20
    },
    {
     id: 378,
     item: "LÂMPADA H16 12V 19W MULTILASER",
     quantidadeEstoque: 12
    },
    {
     id: 379,
     item: "LAMPADA HB3 12V 65W P20D PHILIPS ",
     quantidadeEstoque: 20
    },
    {
     id: 380,
     item: "LÂMPADA H27W\/2 12V 27W MULTILASER",
     quantidadeEstoque: 47
    },
    {
     id: 381,
     item: "LÂMPADA H8 12V 35W MULTILASER",
     quantidadeEstoque: 12
    },
    {
     id: 382,
     item: "LÂMPADA H8 12V 35W MOTORCARE",
     quantidadeEstoque: 10
    },
    {
     id: 383,
     item: "LÂMPADA H27W\/2 12V 27W MULTILASER",
     quantidadeEstoque: 6
    },
    {
     id: 384,
     item: "LÂMPADA HIR2 12V 55W PX22d PHILLIPS",
     quantidadeEstoque: 10
    },
    {
     id: 385,
     item: "LÂMPADA H11 12V 55W MULTILASER",
     quantidadeEstoque: 5
    },
    {
     id: 386,
     item: "LÂMPADA HIR2 12V 55W PX22d HELLA 9012LL",
     referencia: "9012LL",
     quantidadeEstoque: 20
    },
    {
     id: 387,
     item: "LÂMPADA HB3 12V 65W PX22d HELLA 9005",
     quantidadeEstoque: 0
    },
    {
     id: 388,
     item: "ÓLEO PARA MOTOR PETRONAS SYNTIUM 800 SE SP 10W30",
     quantidadeEstoque: 16
    },
    {
     id: 389,
     item: "ANEL DO BUJÃO RENAULT ",
     quantidadeEstoque: 11
    },
    {
     id: 390,
     codigo: 103001,
     item: "FLUIDO PARA RADIADOR PARAFLU CONCENTRADO ROSA",
     referencia: "ROSA",
     marca: "PARAFLU",
     quantidadeMinima: 10,
     quantidadeEstoque: 60
    },
    {
     id: 391,
     codigo: 103044,
     item: "FLUIDO PARA RADIADOR PARAFLU CONCENTRADO AMARELO",
     referencia: "AMARELO",
     marca: "PARAFLU",
     quantidadeMinima: 10,
     quantidadeEstoque: 48
    },
    {
     id: 392,
     codigo: 103013,
     item: "FLUIDO PARA RADIADOR PARAFLU CONCENTRADO VERDE",
     referencia: "VERDE",
     marca: "PARAFLU",
     quantidadeMinima: 10,
     quantidadeEstoque: 48
    },
    {
     id: 393,
     item: "CAR80 GRAFITE SPRAY LUBRIFICANTE SECO",
     referencia: "GRAFITE",
     marca: "CAR80",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 394,
     item: "CAR80 VASELINA SPRAY ",
     referencia: "VASELINA",
     marca: "CAR80",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 395,
     codigo: "wo412",
     item: "FILTRO DE ÓLEO WEGA WO412",
     referencia: "WO412",
     marca: "WEGA",
     quantidadeMinima: 1,
     quantidadeEstoque: 2
    },
    {
     id: 396,
     item: "CUPILHA ",
     quantidadeMinima: 10,
     quantidadeEstoque: 18
    },
    {
     id: 397,
     item: "KIT COIFA ABRAÇADEIRA",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 398,
     codigo: "N93036",
     item: "BIELETA N93036",
     referencia: "N93036",
     quantidadeMinima: 2,
     quantidadeEstoque: 4
    },
    {
     id: 399,
     codigo: "N6081",
     item: "BIELETA N6081",
     referencia: "N6081",
     quantidadeMinima: 2,
     quantidadeEstoque: 2
    },
    {
     id: 400,
     codigo: "N1068",
     item: "BIELETA N1068",
     referencia: "N1068",
     quantidadeMinima: 2,
     quantidadeEstoque: 8
    },
    {
     id: 401,
     codigo: "BR19353102136",
     item: "BIELETA BR19353102136",
     referencia: "BR19353102136",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 402,
     codigo: "KL156\/3",
     item: "FILTRO DE COMBUSTIVEL KL156\/3",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 403,
     codigo: "FAP601222",
     item: "FILTRO DE AR FAP60122",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 404,
     codigo: "OX379D",
     item: "FILTRO DE ÓLEO OX379D",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 405,
     item: "Bujão com Anel ",
     quantidadeMinima: 1,
     quantidadeEstoque: 3
    },
    {
     id: 406,
     item: "KIT AMORTECEDOR SUSPENÇÃO TRASEIRA SK422S ",
     quantidadeMinima: 1,
     quantidadeEstoque: 1
    },
    {
     id: 407,
     item: "KIT AMORTECEDOR SUSPENÇÃO DIANTEIRA SK409",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
    },
    {
     id: 408,
     item: "KIT DE REPARO PARA JUNTA HOMOC. LADO RODA 78619",
     quantidadeMinima: 1,
     quantidadeEstoque: 0
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
     /*  html += `<img class="imgprodutos" src="${produtos[i].img}" alt="">`  */
      html += '<h2 class="tituloProduto">' + produtos[i].item + '</h2>';
      html += '<p class="infos">'+ "ID:   " + produtos[i].id + '</p>';
      html += '<p class="infos">'+ "Codigo:  " + produtos[i].codigo + '</p>';
      html += '<p class="infos">' +"Referencia:   "+ produtos[i].referencia + '</p>';
      html += '<p class="infos">'+ "Estoque:   " + produtos[i].quantidadeEstoque + '</p>';
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