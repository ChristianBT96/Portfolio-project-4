const speciesData = [
    {
        "SPECIES":"Unknown bird - small",
        "COUNT":46527
    },
    {
        "SPECIES":"Unknown bird - medium",
        "COUNT":37779
    },
    {
        "SPECIES":"Unknown bird",
        "COUNT":20663
    },
    {
        "SPECIES":"Mourning dove",
        "COUNT":13396
    },
    {
        "SPECIES":"Killdeer",
        "COUNT":8830
    },
    {
        "SPECIES":"Barn swallow",
        "COUNT":8707
    },
    {
        "SPECIES":"American kestrel",
        "COUNT":8104
    },
    {
        "SPECIES":"Gulls",
        "COUNT":7290
    },
    {
        "SPECIES":"Horned lark",
        "COUNT":7204
    },
    {
        "SPECIES":"European starling",
        "COUNT":5809
    },
    {
        "SPECIES":"Sparrows",
        "COUNT":4026
    },
    {
        "SPECIES":"Rock pigeon",
        "COUNT":3990
    },
    {
        "SPECIES":"Eastern meadowlark",
        "COUNT":3826
    },
    {
        "SPECIES":"Red-tailed hawk",
        "COUNT":3735
    },
    {
        "SPECIES":"Unknown bird - large",
        "COUNT":3576
    },
    {
        "SPECIES":"Cliff swallow",
        "COUNT":2664
    },
    {
        "SPECIES":"Western meadowlark",
        "COUNT":2265
    },
    {
        "SPECIES":"Ring-billed gull",
        "COUNT":2093
    },
    {
        "SPECIES":"Canada goose",
        "COUNT":2016
    },
    {
        "SPECIES":"American robin",
        "COUNT":1973
    },
    {
        "SPECIES":"Herring gull",
        "COUNT":1896
    },
    {
        "SPECIES":"Barn owl",
        "COUNT":1867
    },
    {
        "SPECIES":"Hawks",
        "COUNT":1603
    },
    {
        "SPECIES":"Swallows",
        "COUNT":1472
    },
    {
        "SPECIES":"Perching birds (y)",
        "COUNT":1442
    },
    {
        "SPECIES":"Chimney swift",
        "COUNT":1414
    },
    {
        "SPECIES":"Pacific golden-plover",
        "COUNT":1399
    },
    {
        "SPECIES":"Microbats",
        "COUNT":1396
    },
    {
        "SPECIES":"Blackbirds",
        "COUNT":1328
    },
    {
        "SPECIES":"Mallard",
        "COUNT":1292
    },
    {
        "SPECIES":"Savannah sparrow",
        "COUNT":1292
    },
    {
        "SPECIES":"White-tailed deer",
        "COUNT":1222
    },
    {
        "SPECIES":"Doves",
        "COUNT":1209
    },
    {
        "SPECIES":"Common nighthawk",
        "COUNT":1127
    },
    {
        "SPECIES":"Tree swallow",
        "COUNT":1126
    },
    {
        "SPECIES":"Laughing gull",
        "COUNT":1098
    },
    {
        "SPECIES":"Turkey vulture",
        "COUNT":1068
    },
    {
        "SPECIES":"Brazilian free-tailed bat",
        "COUNT":956
    },
    {
        "SPECIES":"Ducks",
        "COUNT":941
    },
    {
        "SPECIES":"Coyote",
        "COUNT":800
    },
    {
        "SPECIES":"Short-eared owl",
        "COUNT":791
    },
    {
        "SPECIES":"Cattle egret",
        "COUNT":785
    },
    {
        "SPECIES":"Meadowlarks",
        "COUNT":779
    },
    {
        "SPECIES":"Bank swallow",
        "COUNT":763
    },
    {
        "SPECIES":"Striped skunk",
        "COUNT":691
    },
    {
        "SPECIES":"Red-winged blackbird",
        "COUNT":687
    },
    {
        "SPECIES":"American crow",
        "COUNT":656
    },
    {
        "SPECIES":"Yellow-rumped warbler",
        "COUNT":568
    },
    {
        "SPECIES":"Osprey",
        "COUNT":567
    },
    {
        "SPECIES":"Peregrine falcon",
        "COUNT":563
    },
    {
        "SPECIES":"Great blue heron",
        "COUNT":561
    },
    {
        "SPECIES":"Black-tailed jackrabbit",
        "COUNT":546
    },
    {
        "SPECIES":"Swainsons thrush",
        "COUNT":518
    },
    {
        "SPECIES":"Western kingbird",
        "COUNT":505
    },
    {
        "SPECIES":"House sparrow",
        "COUNT":498
    },
    {
        "SPECIES":"Eastern red bat",
        "COUNT":497
    },
    {
        "SPECIES":"Cedar waxwing",
        "COUNT":496
    },
    {
        "SPECIES":"White-throated sparrow",
        "COUNT":460
    },
    {
        "SPECIES":"Geese",
        "COUNT":457
    },
    {
        "SPECIES":"Song sparrow",
        "COUNT":434
    },
    {
        "SPECIES":"Brown-headed cowbird",
        "COUNT":430
    },
    {
        "SPECIES":"Bald eagle",
        "COUNT":429
    },
    {
        "SPECIES":"Zebra dove",
        "COUNT":429
    },
    {
        "SPECIES":"Virginia opossum",
        "COUNT":420
    },
    {
        "SPECIES":"Snow bunting",
        "COUNT":412
    },
    {
        "SPECIES":"American coot",
        "COUNT":407
    },
    {
        "SPECIES":"Burrowing owl",
        "COUNT":400
    },
    {
        "SPECIES":"New World vultures",
        "COUNT":396
    },
    {
        "SPECIES":"Upland sandpiper",
        "COUNT":389
    },
    {
        "SPECIES":"Owls",
        "COUNT":389
    },
    {
        "SPECIES":"Gray catbird",
        "COUNT":382
    },
    {
        "SPECIES":"Hermit thrush",
        "COUNT":381
    },
    {
        "SPECIES":"Snowy owl",
        "COUNT":378
    },
    {
        "SPECIES":"Egrets",
        "COUNT":374
    },
    {
        "SPECIES":"Great horned owl",
        "COUNT":372
    },
    {
        "SPECIES":"Sandpipers",
        "COUNT":366
    },
    {
        "SPECIES":"Unknown bird or bat",
        "COUNT":362
    },
    {
        "SPECIES":"Dark-eyed junco",
        "COUNT":346
    },
    {
        "SPECIES":"American pipit",
        "COUNT":342
    },
    {
        "SPECIES":"Purple martin",
        "COUNT":334
    },
    {
        "SPECIES":"Little brown bat",
        "COUNT":333
    },
    {
        "SPECIES":"Scissor-tailed flycatcher",
        "COUNT":326
    },
    {
        "SPECIES":"Red-eyed vireo",
        "COUNT":315
    },
    {
        "SPECIES":"White-headed gull complex",
        "COUNT":311
    },
    {
        "SPECIES":"Common grackle",
        "COUNT":309
    },
    {
        "SPECIES":"Black vulture",
        "COUNT":309
    },
    {
        "SPECIES":"California gull",
        "COUNT":292
    },
    {
        "SPECIES":"Red fox",
        "COUNT":277
    },
    {
        "SPECIES":"Least sandpiper",
        "COUNT":273
    },
    {
        "SPECIES":"American golden-plover",
        "COUNT":270
    },
    {
        "SPECIES":"Spotted dove",
        "COUNT":257
    },
    {
        "SPECIES":"Western sandpiper",
        "COUNT":255
    },
    {
        "SPECIES":"Big brown bat",
        "COUNT":255
    },
    {
        "SPECIES":"Common yellowthroat",
        "COUNT":247
    },
    {
        "SPECIES":"Franklins gull",
        "COUNT":243
    },
    {
        "SPECIES":"Northern pintail",
        "COUNT":242
    },
    {
        "SPECIES":"Ruby-crowned kinglet",
        "COUNT":239
    },
    {
        "SPECIES":"Black-bellied plover",
        "COUNT":228
    },
    {
        "SPECIES":"Crows",
        "COUNT":219
    },
    {
        "SPECIES":"House finch",
        "COUNT":219
    },
    {
        "SPECIES":"Swainsons hawk",
        "COUNT":218
    },
    {
        "SPECIES":"Double-crested cormorant",
        "COUNT":216
    },
    {
        "SPECIES":"Snow goose",
        "COUNT":210
    },
    {
        "SPECIES":"Northern harrier",
        "COUNT":208
    },
    {
        "SPECIES":"Wilsons snipe",
        "COUNT":204
    },
    {
        "SPECIES":"Western gull",
        "COUNT":199
    },
    {
        "SPECIES":"Glaucous-winged gull",
        "COUNT":198
    },
    {
        "SPECIES":"Woodchuck",
        "COUNT":196
    },
    {
        "SPECIES":"Eastern cottontail",
        "COUNT":193
    },
    {
        "SPECIES":"Merlin",
        "COUNT":192
    },
    {
        "SPECIES":"Sandhill crane",
        "COUNT":191
    },
    {
        "SPECIES":"Ovenbird",
        "COUNT":190
    },
    {
        "SPECIES":"Northern flicker",
        "COUNT":189
    },
    {
        "SPECIES":"Northern mockingbird",
        "COUNT":187
    },
    {
        "SPECIES":"Vesper bats",
        "COUNT":187
    },
    {
        "SPECIES":"Chipping sparrow",
        "COUNT":186
    },
    {
        "SPECIES":"American woodcock",
        "COUNT":184
    },
    {
        "SPECIES":"Coopers hawk",
        "COUNT":184
    },
    {
        "SPECIES":"Hoary bat",
        "COUNT":181
    },
    {
        "SPECIES":"Raccoon",
        "COUNT":177
    },
    {
        "SPECIES":"Yellow bittern",
        "COUNT":174
    },
    {
        "SPECIES":"Swamp sparrow",
        "COUNT":174
    },
    {
        "SPECIES":"Great black-backed gull",
        "COUNT":173
    },
    {
        "SPECIES":"Wilsons warbler",
        "COUNT":171
    },
    {
        "SPECIES":"Grackles",
        "COUNT":170
    },
    {
        "SPECIES":"Free-tailed bats",
        "COUNT":169
    },
    {
        "SPECIES":"Lincolns sparrow",
        "COUNT":167
    },
    {
        "SPECIES":"Great egret",
        "COUNT":160
    },
    {
        "SPECIES":"Semipalmated sandpiper",
        "COUNT":157
    },
    {
        "SPECIES":"American goldfinch",
        "COUNT":156
    },
    {
        "SPECIES":"Yellow warbler",
        "COUNT":154
    },
    {
        "SPECIES":"Lark bunting",
        "COUNT":152
    },
    {
        "SPECIES":"Grasshopper sparrow",
        "COUNT":152
    },
    {
        "SPECIES":"Ducks",
        "COUNT":147
    },
    {
        "SPECIES":"Blackpoll warbler",
        "COUNT":146
    },
    {
        "SPECIES":"Common myna",
        "COUNT":145
    },
    {
        "SPECIES":"Black-crowned night-heron",
        "COUNT":145
    },
    {
        "SPECIES":"Dunlin",
        "COUNT":142
    },
    {
        "SPECIES":"Yellow-bellied sapsucker",
        "COUNT":139
    },
    {
        "SPECIES":"White-winged dove",
        "COUNT":139
    },
    {
        "SPECIES":"Palm warbler",
        "COUNT":137
    },
    {
        "SPECIES":"Eurasian skylark",
        "COUNT":137
    },
    {
        "SPECIES":"Semipalmated plover",
        "COUNT":135
    },
    {
        "SPECIES":"Northern shoveler",
        "COUNT":135
    },
    {
        "SPECIES":"White-tailed jackrabbit",
        "COUNT":134
    },
    {
        "SPECIES":"Northern rough-winged swallow",
        "COUNT":133
    },
    {
        "SPECIES":"Finches",
        "COUNT":133
    },
    {
        "SPECIES":"Rough-legged hawk",
        "COUNT":132
    },
    {
        "SPECIES":"American redstart",
        "COUNT":131
    },
    {
        "SPECIES":"Turtles",
        "COUNT":130
    },
    {
        "SPECIES":"Scaly-breasted munia",
        "COUNT":128
    },
    {
        "SPECIES":"Gadwall",
        "COUNT":128
    },
    {
        "SPECIES":"Green-winged teal",
        "COUNT":124
    },
    {
        "SPECIES":"New World wood-warblers",
        "COUNT":123
    },
    {
        "SPECIES":"Munias",
        "COUNT":122
    },
    {
        "SPECIES":"Fox sparrow",
        "COUNT":118
    },
    {
        "SPECIES":"Wild turkey",
        "COUNT":115
    },
    {
        "SPECIES":"Lapland longspur",
        "COUNT":113
    },
    {
        "SPECIES":"American wigeon",
        "COUNT":111
    },
    {
        "SPECIES":"Yellow-billed cuckoo",
        "COUNT":110
    },
    {
        "SPECIES":"Ring-necked pheasant",
        "COUNT":108
    },
    {
        "SPECIES":"White-crowned sparrow",
        "COUNT":108
    },
    {
        "SPECIES":"Ruddy duck",
        "COUNT":108
    },
    {
        "SPECIES":"Sora",
        "COUNT":106
    },
    {
        "SPECIES":"Vesper sparrow",
        "COUNT":106
    },
    {
        "SPECIES":"Varied thrush",
        "COUNT":106
    },
    {
        "SPECIES":"Plovers",
        "COUNT":103
    },
    {
        "SPECIES":"Wood duck",
        "COUNT":100
    },
    {
        "SPECIES":"Silver-haired bat",
        "COUNT":100
    },
    {
        "SPECIES":"White-/golden-crown sparrow complex",
        "COUNT":99
    },
    {
        "SPECIES":"White-throated swift",
        "COUNT":98
    },
    {
        "SPECIES":"Yellow-crowned night-heron",
        "COUNT":98
    },
    {
        "SPECIES":"Red-shouldered hawk",
        "COUNT":97
    },
    {
        "SPECIES":"Eastern kingbird",
        "COUNT":96
    },
    {
        "SPECIES":"Blue-winged teal",
        "COUNT":94
    },
    {
        "SPECIES":"Mule deer",
        "COUNT":91
    },
    {
        "SPECIES":"White-tailed kite",
        "COUNT":90
    },
    {
        "SPECIES":"Lesser scaup",
        "COUNT":89
    },
    {
        "SPECIES":"Brown pelican",
        "COUNT":88
    },
    {
        "SPECIES":"Wood thrush",
        "COUNT":88
    },
    {
        "SPECIES":"Black-tailed prairie dog",
        "COUNT":87
    },
    {
        "SPECIES":"Bonapartes gull",
        "COUNT":86
    },
    {
        "SPECIES":"Mew gull",
        "COUNT":86
    },
    {
        "SPECIES":"American black duck",
        "COUNT":86
    },
    {
        "SPECIES":"Brewers blackbird",
        "COUNT":86
    },
    {
        "SPECIES":"Gopher snake",
        "COUNT":86
    },
    {
        "SPECIES":"Western tanager",
        "COUNT":84
    },
    {
        "SPECIES":"Tennessee warbler",
        "COUNT":84
    },
    {
        "SPECIES":"Greater white-fronted goose",
        "COUNT":82
    },
    {
        "SPECIES":"Indigo bunting",
        "COUNT":82
    },
    {
        "SPECIES":"House wren",
        "COUNT":82
    },
    {
        "SPECIES":"Orange-crowned warbler",
        "COUNT":82
    },
    {
        "SPECIES":"Eurasian collared dove",
        "COUNT":82
    },
    {
        "SPECIES":"Black-and-white warbler",
        "COUNT":81
    },
    {
        "SPECIES":"Desert cottontail",
        "COUNT":81
    },
    {
        "SPECIES":"Chestnut munia",
        "COUNT":79
    },
    {
        "SPECIES":"Field sparrow",
        "COUNT":79
    },
    {
        "SPECIES":"Vauxs swift",
        "COUNT":78
    },
    {
        "SPECIES":"Golden-crowned kinglet",
        "COUNT":77
    },
    {
        "SPECIES":"Blue-gray gnatcatcher",
        "COUNT":77
    },
    {
        "SPECIES":"Common raven",
        "COUNT":76
    },
    {
        "SPECIES":"Raptors",
        "COUNT":74
    },
    {
        "SPECIES":"Boat-tailed grackle",
        "COUNT":74
    },
    {
        "SPECIES":"Northern parula",
        "COUNT":74
    },
    {
        "SPECIES":"Wrens",
        "COUNT":73
    },
    {
        "SPECIES":"Great-tailed grackle",
        "COUNT":73
    },
    {
        "SPECIES":"Buff-breasted sandpiper",
        "COUNT":72
    },
    {
        "SPECIES":"Bairds sandpiper",
        "COUNT":72
    },
    {
        "SPECIES":"Black-throated blue warbler",
        "COUNT":72
    },
    {
        "SPECIES":"Cave swallow",
        "COUNT":72
    },
    {
        "SPECIES":"Mountain bluebird",
        "COUNT":71
    },
    {
        "SPECIES":"Veery",
        "COUNT":71
    },
    {
        "SPECIES":"Northern waterthrush",
        "COUNT":70
    },
    {
        "SPECIES":"Tyrant (New World) flycatchers",
        "COUNT":70
    },
    {
        "SPECIES":"Evening bat",
        "COUNT":69
    },
    {
        "SPECIES":"Anhinga",
        "COUNT":68
    },
    {
        "SPECIES":"Rabbits",
        "COUNT":68
    },
    {
        "SPECIES":"Scarlet tanager",
        "COUNT":68
    },
    {
        "SPECIES":"Ruby-throated hummingbird",
        "COUNT":68
    },
    {
        "SPECIES":"Ferruginous hawk",
        "COUNT":67
    },
    {
        "SPECIES":"Loggerhead shrike",
        "COUNT":66
    },
    {
        "SPECIES":"Diamondback terrapin",
        "COUNT":66
    },
    {
        "SPECIES":"Nashville warbler",
        "COUNT":66
    },
    {
        "SPECIES":"Herons",
        "COUNT":64
    },
    {
        "SPECIES":"Thrushes",
        "COUNT":64
    },
    {
        "SPECIES":"Warbling vireo",
        "COUNT":64
    },
    {
        "SPECIES":"Pacific-slope flycatcher",
        "COUNT":64
    },
    {
        "SPECIES":"Brant",
        "COUNT":61
    },
    {
        "SPECIES":"Gray-cheeked thrush",
        "COUNT":61
    },
    {
        "SPECIES":"Pectoral sandpiper",
        "COUNT":60
    },
    {
        "SPECIES":"Common snapping turtle",
        "COUNT":59
    },
    {
        "SPECIES":"Painted turtle",
        "COUNT":58
    },
    {
        "SPECIES":"Magnolia warbler",
        "COUNT":58
    },
    {
        "SPECIES":"Falcons",
        "COUNT":57
    },
    {
        "SPECIES":"Pied-billed grebe",
        "COUNT":55
    },
    {
        "SPECIES":"Terns",
        "COUNT":54
    },
    {
        "SPECIES":"Domestic dog",
        "COUNT":54
    },
    {
        "SPECIES":"Nine-banded armadillo",
        "COUNT":54
    },
    {
        "SPECIES":"Western grebe",
        "COUNT":54
    },
    {
        "SPECIES":"Bobolink",
        "COUNT":54
    },
    {
        "SPECIES":"Common loon",
        "COUNT":53
    },
    {
        "SPECIES":"Eastern phoebe",
        "COUNT":53
    },
    {
        "SPECIES":"Snowy egret",
        "COUNT":52
    },
    {
        "SPECIES":"Spotted sandpiper",
        "COUNT":52
    },
    {
        "SPECIES":"Common tern",
        "COUNT":52
    },
    {
        "SPECIES":"American oystercatcher",
        "COUNT":52
    },
    {
        "SPECIES":"Rose-breasted grosbeak",
        "COUNT":51
    },
    {
        "SPECIES":"Ring-necked duck",
        "COUNT":51
    },
    {
        "SPECIES":"Yellow-breasted chat",
        "COUNT":51
    },
    {
        "SPECIES":"Broad-winged hawk",
        "COUNT":51
    },
    {
        "SPECIES":"Caspian tern",
        "COUNT":50
    },
    {
        "SPECIES":"Violet-green swallow",
        "COUNT":50
    },
    {
        "SPECIES":"Blue jay",
        "COUNT":49
    },
    {
        "SPECIES":"Lark sparrow",
        "COUNT":49
    },
    {
        "SPECIES":"Pine siskin",
        "COUNT":49
    },
    {
        "SPECIES":"Sanderling",
        "COUNT":48
    },
    {
        "SPECIES":"Shorebirds",
        "COUNT":48
    },
    {
        "SPECIES":"Domestic cat",
        "COUNT":47
    },
    {
        "SPECIES":"Barred owl",
        "COUNT":47
    },
    {
        "SPECIES":"Gopher tortoise",
        "COUNT":47
    },
    {
        "SPECIES":"Green heron",
        "COUNT":46
    },
    {
        "SPECIES":"Common ground dove",
        "COUNT":46
    },
    {
        "SPECIES":"American tree sparrow",
        "COUNT":46
    },
    {
        "SPECIES":"Marsh wren",
        "COUNT":46
    },
    {
        "SPECIES":"Sharp-shinned hawk",
        "COUNT":45
    },
    {
        "SPECIES":"Black-throated green warbler",
        "COUNT":45
    },
    {
        "SPECIES":"Alder flycatcher",
        "COUNT":45
    },
    {
        "SPECIES":"Brown thrasher",
        "COUNT":44
    },
    {
        "SPECIES":"Muskrat",
        "COUNT":44
    },
    {
        "SPECIES":"Glaucous gull",
        "COUNT":44
    },
    {
        "SPECIES":"Least flycatcher",
        "COUNT":44
    },
    {
        "SPECIES":"Greater sage-grouse",
        "COUNT":42
    },
    {
        "SPECIES":"Baltimore oriole",
        "COUNT":42
    },
    {
        "SPECIES":"Virginia rail",
        "COUNT":41
    },
    {
        "SPECIES":"Eastern wood-pewee",
        "COUNT":41
    },
    {
        "SPECIES":"Yellow-throated warbler",
        "COUNT":41
    },
    {
        "SPECIES":"Unknown terrestial mammal",
        "COUNT":40
    },
    {
        "SPECIES":"Least tern",
        "COUNT":40
    },
    {
        "SPECIES":"Pigeons",
        "COUNT":39
    },
    {
        "SPECIES":"Gray partridge",
        "COUNT":39
    },
    {
        "SPECIES":"Ruddy turnstone",
        "COUNT":39
    },
    {
        "SPECIES":"Pine warbler",
        "COUNT":39
    },
    {
        "SPECIES":"Cuckoos",
        "COUNT":39
    },
    {
        "SPECIES":"Foxes",
        "COUNT":38
    },
    {
        "SPECIES":"Bay-breasted warbler",
        "COUNT":38
    },
    {
        "SPECIES":"Eastern towhee",
        "COUNT":37
    },
    {
        "SPECIES":"Bufflehead",
        "COUNT":37
    },
    {
        "SPECIES":"Prairie falcon",
        "COUNT":37
    },
    {
        "SPECIES":"Dickcissel",
        "COUNT":37
    },
    {
        "SPECIES":"Chestnut-sided warbler",
        "COUNT":37
    },
    {
        "SPECIES":"Laysan albatross",
        "COUNT":36
    },
    {
        "SPECIES":"White ibis",
        "COUNT":35
    },
    {
        "SPECIES":"Cackling goose",
        "COUNT":35
    },
    {
        "SPECIES":"Mottled duck",
        "COUNT":35
    },
    {
        "SPECIES":"Green iguana",
        "COUNT":35
    },
    {
        "SPECIES":"Yellow-bellied flycatcher",
        "COUNT":35
    },
    {
        "SPECIES":"Tri-colored bat",
        "COUNT":35
    },
    {
        "SPECIES":"Blue-headed vireo",
        "COUNT":35
    },
    {
        "SPECIES":"Golden eagle",
        "COUNT":34
    },
    {
        "SPECIES":"Pigeons",
        "COUNT":34
    },
    {
        "SPECIES":"Great crested flycatcher",
        "COUNT":34
    },
    {
        "SPECIES":"Townsends warbler",
        "COUNT":34
    },
    {
        "SPECIES":"Black-headed grosbeak",
        "COUNT":34
    },
    {
        "SPECIES":"Blackburnian warbler",
        "COUNT":34
    },
    {
        "SPECIES":"American white pelican",
        "COUNT":33
    },
    {
        "SPECIES":"Snakes",
        "COUNT":33
    },
    {
        "SPECIES":"Eastern bluebird",
        "COUNT":32
    },
    {
        "SPECIES":"Lesser nighthawk",
        "COUNT":32
    },
    {
        "SPECIES":"Cape May warbler",
        "COUNT":32
    },
    {
        "SPECIES":"Canvasback",
        "COUNT":31
    },
    {
        "SPECIES":"Common box turtle",
        "COUNT":31
    },
    {
        "SPECIES":"Crested caracara",
        "COUNT":31
    },
    {
        "SPECIES":"Says phoebe",
        "COUNT":31
    },
    {
        "SPECIES":"Brewers sparrow",
        "COUNT":31
    },
    {
        "SPECIES":"Canada warbler",
        "COUNT":30
    },
    {
        "SPECIES":"American alligator",
        "COUNT":29
    },
    {
        "SPECIES":"Eared grebe",
        "COUNT":29
    },
    {
        "SPECIES":"Yellow-headed blackbird",
        "COUNT":29
    },
    {
        "SPECIES":"Black skimmer",
        "COUNT":28
    },
    {
        "SPECIES":"Band-tailed pigeon",
        "COUNT":28
    },
    {
        "SPECIES":"Wilsons phalarope",
        "COUNT":28
    },
    {
        "SPECIES":"Diving duck (Aythya)",
        "COUNT":28
    },
    {
        "SPECIES":"Greater yellowlegs",
        "COUNT":27
    },
    {
        "SPECIES":"Hammonds flycatcher",
        "COUNT":27
    },
    {
        "SPECIES":"Black-billed magpie",
        "COUNT":26
    },
    {
        "SPECIES":"Whimbrel",
        "COUNT":26
    },
    {
        "SPECIES":"Black-capped chickadee",
        "COUNT":26
    },
    {
        "SPECIES":"MacGillivrays warbler",
        "COUNT":26
    },
    {
        "SPECIES":"Wood stork",
        "COUNT":25
    },
    {
        "SPECIES":"Lesser yellowlegs",
        "COUNT":25
    },
    {
        "SPECIES":"White-tailed tropicbird",
        "COUNT":25
    },
    {
        "SPECIES":"Mississippi kite",
        "COUNT":25
    },
    {
        "SPECIES":"Zenaida dove",
        "COUNT":25
    },
    {
        "SPECIES":"Black noddy",
        "COUNT":25
    },
    {
        "SPECIES":"Tundra swan",
        "COUNT":24
    },
    {
        "SPECIES":"Golden-crowned sparrow",
        "COUNT":24
    },
    {
        "SPECIES":"American bittern",
        "COUNT":24
    },
    {
        "SPECIES":"Common gray fox",
        "COUNT":24
    },
    {
        "SPECIES":"White tern",
        "COUNT":24
    },
    {
        "SPECIES":"Black-bellied whistling-duck",
        "COUNT":24
    },
    {
        "SPECIES":"Winter wren",
        "COUNT":24
    },
    {
        "SPECIES":"Common swift",
        "COUNT":24
    },
    {
        "SPECIES":"Clay-colored sparrow",
        "COUNT":24
    },
    {
        "SPECIES":"Swifts",
        "COUNT":23
    },
    {
        "SPECIES":"Wedge-tailed shearwater",
        "COUNT":23
    },
    {
        "SPECIES":"Nightjars",
        "COUNT":23
    },
    {
        "SPECIES":"Sharp-tailed grouse",
        "COUNT":23
    },
    {
        "SPECIES":"Rufous hummingbird",
        "COUNT":23
    },
    {
        "SPECIES":"Hooded merganser",
        "COUNT":22
    },
    {
        "SPECIES":"Little blue heron",
        "COUNT":22
    },
    {
        "SPECIES":"Horned grebe",
        "COUNT":22
    },
    {
        "SPECIES":"White-faced ibis",
        "COUNT":22
    },
    {
        "SPECIES":"Seminole bat",
        "COUNT":22
    },
    {
        "SPECIES":"Long-eared owl",
        "COUNT":21
    },
    {
        "SPECIES":"North American porcupine",
        "COUNT":21
    },
    {
        "SPECIES":"Black drongo",
        "COUNT":21
    },
    {
        "SPECIES":"Greater scaup",
        "COUNT":20
    },
    {
        "SPECIES":"Short-billed dowitcher",
        "COUNT":20
    },
    {
        "SPECIES":"Willet",
        "COUNT":20
    },
    {
        "SPECIES":"Acadian flycatcher",
        "COUNT":20
    },
    {
        "SPECIES":"Budgerigar",
        "COUNT":20
    },
    {
        "SPECIES":"Chuck-wills-widow",
        "COUNT":20
    },
    {
        "SPECIES":"Gray kingbird",
        "COUNT":20
    },
    {
        "SPECIES":"Falcons",
        "COUNT":20
    },
    {
        "SPECIES":"Grebes",
        "COUNT":19
    },
    {
        "SPECIES":"Forsters tern",
        "COUNT":19
    },
    {
        "SPECIES":"Skunks",
        "COUNT":19
    },
    {
        "SPECIES":"Common poorwill",
        "COUNT":18
    },
    {
        "SPECIES":"Redhead",
        "COUNT":18
    },
    {
        "SPECIES":"Gunnisons prairie dog",
        "COUNT":18
    },
    {
        "SPECIES":"Black-necked stilt",
        "COUNT":18
    },
    {
        "SPECIES":"White-rumped sandpiper",
        "COUNT":18
    },
    {
        "SPECIES":"Red-necked phalarope",
        "COUNT":18
    },
    {
        "SPECIES":"Rusty blackbird",
        "COUNT":18
    },
    {
        "SPECIES":"Prairie warbler",
        "COUNT":18
    },
    {
        "SPECIES":"Kentucky warbler",
        "COUNT":18
    },
    {
        "SPECIES":"Northern bobwhite",
        "COUNT":17
    },
    {
        "SPECIES":"Eastern whip-poor-will",
        "COUNT":17
    },
    {
        "SPECIES":"Northern cardinal",
        "COUNT":17
    },
    {
        "SPECIES":"Solitary sandpiper",
        "COUNT":17
    },
    {
        "SPECIES":"Red-throated loon",
        "COUNT":17
    },
    {
        "SPECIES":"Northern yellow bat",
        "COUNT":17
    },
    {
        "SPECIES":"Sedge wren",
        "COUNT":17
    },
    {
        "SPECIES":"Common pauraque",
        "COUNT":17
    },
    {
        "SPECIES":"Hawaiian duck",
        "COUNT":16
    },
    {
        "SPECIES":"Belted kingfisher",
        "COUNT":16
    },
    {
        "SPECIES":"Clapper rail",
        "COUNT":16
    },
    {
        "SPECIES":"Deer",
        "COUNT":16
    },
    {
        "SPECIES":"Western bluebird",
        "COUNT":16
    },
    {
        "SPECIES":"Hummingbirds",
        "COUNT":16
    },
    {
        "SPECIES":"Black-billed cuckoo",
        "COUNT":16
    },
    {
        "SPECIES":"Rails",
        "COUNT":15
    },
    {
        "SPECIES":"Great frigatebird",
        "COUNT":15
    },
    {
        "SPECIES":"Woodpeckers",
        "COUNT":15
    },
    {
        "SPECIES":"Long-billed dowitcher",
        "COUNT":15
    },
    {
        "SPECIES":"Inca dove",
        "COUNT":15
    },
    {
        "SPECIES":"Purple finch",
        "COUNT":15
    },
    {
        "SPECIES":"Annas hummingbird",
        "COUNT":15
    },
    {
        "SPECIES":"Orchard oriole",
        "COUNT":15
    },
    {
        "SPECIES":"Blue grosbeak",
        "COUNT":15
    },
    {
        "SPECIES":"Mallard/American black duck complex",
        "COUNT":15
    },
    {
        "SPECIES":"Florida softshell turtle",
        "COUNT":14
    },
    {
        "SPECIES":"Carolina wren",
        "COUNT":14
    },
    {
        "SPECIES":"Willow flycatcher",
        "COUNT":14
    },
    {
        "SPECIES":"Ash-throated flycatcher",
        "COUNT":13
    },
    {
        "SPECIES":"Downy woodpecker",
        "COUNT":13
    },
    {
        "SPECIES":"Cinnamon teal",
        "COUNT":13
    },
    {
        "SPECIES":"Lagomorphs (rabbits",
        "COUNT":13
    },
    {
        "SPECIES":"Philadelphia vireo",
        "COUNT":13
    },
    {
        "SPECIES":"Brown noddy",
        "COUNT":13
    },
    {
        "SPECIES":"Cattle",
        "COUNT":12
    },
    {
        "SPECIES":"Wapiti (elk)",
        "COUNT":12
    },
    {
        "SPECIES":"Mute swan",
        "COUNT":12
    },
    {
        "SPECIES":"Megabats",
        "COUNT":12
    },
    {
        "SPECIES":"American avocet",
        "COUNT":12
    },
    {
        "SPECIES":"Long-billed curlew",
        "COUNT":12
    },
    {
        "SPECIES":"Bonin petrel",
        "COUNT":12
    },
    {
        "SPECIES":"Common waxbill",
        "COUNT":12
    },
    {
        "SPECIES":"Black-headed gull",
        "COUNT":12
    },
    {
        "SPECIES":"Pelicans",
        "COUNT":11
    },
    {
        "SPECIES":"Common merganser",
        "COUNT":11
    },
    {
        "SPECIES":"Tropicbirds",
        "COUNT":11
    },
    {
        "SPECIES":"Common gallinule",
        "COUNT":11
    },
    {
        "SPECIES":"Newells shearwater",
        "COUNT":11
    },
    {
        "SPECIES":"Pond slider",
        "COUNT":11
    },
    {
        "SPECIES":"Common goldeneye",
        "COUNT":11
    },
    {
        "SPECIES":"Lesser goldfinch",
        "COUNT":11
    },
    {
        "SPECIES":"Bullocks oriole",
        "COUNT":11
    },
    {
        "SPECIES":"Common wood-pigeon",
        "COUNT":11
    },
    {
        "SPECIES":"Mourning warbler",
        "COUNT":11
    },
    {
        "SPECIES":"White-eyed vireo",
        "COUNT":11
    },
    {
        "SPECIES":"Summer tanager",
        "COUNT":11
    },
    {
        "SPECIES":"Common redpoll",
        "COUNT":11
    },
    {
        "SPECIES":"Common snipe",
        "COUNT":11
    },
    {
        "SPECIES":"Northern saw-whet owl",
        "COUNT":10
    },
    {
        "SPECIES":"Ibises",
        "COUNT":10
    },
    {
        "SPECIES":"Black francolin",
        "COUNT":10
    },
    {
        "SPECIES":"Magnificent frigatebird",
        "COUNT":10
    },
    {
        "SPECIES":"Red-breasted merganser",
        "COUNT":10
    },
    {
        "SPECIES":"Western wood-pewee",
        "COUNT":10
    },
    {
        "SPECIES":"Small Indian mongoose",
        "COUNT":10
    },
    {
        "SPECIES":"Marbled godwit",
        "COUNT":10
    },
    {
        "SPECIES":"Tricolored heron",
        "COUNT":10
    },
    {
        "SPECIES":"Plovers",
        "COUNT":10
    },
    {
        "SPECIES":"LeContes sparrow",
        "COUNT":10
    },
    {
        "SPECIES":"Hooded warbler",
        "COUNT":10
    },
    {
        "SPECIES":"Long-billed thrasher",
        "COUNT":10
    },
    {
        "SPECIES":"Antillean palm swift",
        "COUNT":10
    },
    {
        "SPECIES":"Yellow-billed magpie",
        "COUNT":9
    },
    {
        "SPECIES":"Pronghorn",
        "COUNT":9
    },
    {
        "SPECIES":"New World quail",
        "COUNT":9
    },
    {
        "SPECIES":"Green-tailed towhee",
        "COUNT":9
    },
    {
        "SPECIES":"Lazuli bunting",
        "COUNT":9
    },
    {
        "SPECIES":"Royal tern",
        "COUNT":9
    },
    {
        "SPECIES":"Smiths longspur",
        "COUNT":9
    },
    {
        "SPECIES":"Black-throated sparrow",
        "COUNT":9
    },
    {
        "SPECIES":"Black tern",
        "COUNT":9
    },
    {
        "SPECIES":"Cassins sparrow",
        "COUNT":9
    },
    {
        "SPECIES":"Herons",
        "COUNT":9
    },
    {
        "SPECIES":"Spotted towhee",
        "COUNT":9
    },
    {
        "SPECIES":"Eagles",
        "COUNT":8
    },
    {
        "SPECIES":"Long-tailed duck",
        "COUNT":8
    },
    {
        "SPECIES":"Red-bellied woodpecker",
        "COUNT":8
    },
    {
        "SPECIES":"Sunda collared dove",
        "COUNT":8
    },
    {
        "SPECIES":"Gray francolin",
        "COUNT":8
    },
    {
        "SPECIES":"Black-footed albatross",
        "COUNT":8
    },
    {
        "SPECIES":"Red avadavat",
        "COUNT":8
    },
    {
        "SPECIES":"Harris sparrow",
        "COUNT":8
    },
    {
        "SPECIES":"Hares",
        "COUNT":8
    },
    {
        "SPECIES":"Sprague pipit",
        "COUNT":8
    },
    {
        "SPECIES":"Hermit warbler",
        "COUNT":8
    },
    {
        "SPECIES":"Swallow-tailed kite",
        "COUNT":8
    },
    {
        "SPECIES":"Worm-eating warbler",
        "COUNT":8
    },
    {
        "SPECIES":"Antillean nighthawk",
        "COUNT":8
    },
    {
        "SPECIES":"Ground squirrels",
        "COUNT":8
    },
    {
        "SPECIES":"Noddies",
        "COUNT":8
    },
    {
        "SPECIES":"California ground squirrel",
        "COUNT":8
    },
    {
        "SPECIES":"Gull-billed tern",
        "COUNT":7
    },
    {
        "SPECIES":"Glossy ibis",
        "COUNT":7
    },
    {
        "SPECIES":"Red-vented bulbul",
        "COUNT":7
    },
    {
        "SPECIES":"Nanday parakeet",
        "COUNT":7
    },
    {
        "SPECIES":"Willow ptarmigan",
        "COUNT":7
    },
    {
        "SPECIES":"American badger",
        "COUNT":7
    },
    {
        "SPECIES":"Southern lapwing",
        "COUNT":7
    },
    {
        "SPECIES":"Yellow-throated vireo",
        "COUNT":7
    },
    {
        "SPECIES":"Eurasian kestrel",
        "COUNT":7
    },
    {
        "SPECIES":"Bell sparrow",
        "COUNT":7
    },
    {
        "SPECIES":"Sooty tern",
        "COUNT":7
    },
    {
        "SPECIES":"Lesser black-backed gull",
        "COUNT":7
    },
    {
        "SPECIES":"Cactus wren",
        "COUNT":7
    },
    {
        "SPECIES":"Black-throated gray warbler",
        "COUNT":7
    },
    {
        "SPECIES":"Nelson sparrow",
        "COUNT":7
    },
    {
        "SPECIES":"Long-tailed jaeger",
        "COUNT":7
    },
    {
        "SPECIES":"Hudsonian godwit",
        "COUNT":7
    },
    {
        "SPECIES":"Connecticut warbler",
        "COUNT":7
    },
    {
        "SPECIES":"Baird sparrow",
        "COUNT":7
    },
    {
        "SPECIES":"Red-breasted nuthatch",
        "COUNT":7
    },
    {
        "SPECIES":"Pacific wren",
        "COUNT":7
    },
    {
        "SPECIES":"Black phoebe",
        "COUNT":7
    },
    {
        "SPECIES":"Cranes",
        "COUNT":7
    },
    {
        "SPECIES":"Arctic tern",
        "COUNT":6
    },
    {
        "SPECIES":"Orioles",
        "COUNT":6
    },
    {
        "SPECIES":"Red-crested cardinal",
        "COUNT":6
    },
    {
        "SPECIES":"Eastern screech-owl",
        "COUNT":6
    },
    {
        "SPECIES":"Purple gallinule",
        "COUNT":6
    },
    {
        "SPECIES":"Moose",
        "COUNT":6
    },
    {
        "SPECIES":"Swine (pigs)",
        "COUNT":6
    },
    {
        "SPECIES":"Black kite",
        "COUNT":6
    },
    {
        "SPECIES":"Common eider",
        "COUNT":6
    },
    {
        "SPECIES":"Rock wren",
        "COUNT":6
    },
    {
        "SPECIES":"Harris hawk",
        "COUNT":6
    },
    {
        "SPECIES":"Cassin vireo",
        "COUNT":6
    },
    {
        "SPECIES":"Red-naped sapsucker",
        "COUNT":6
    },
    {
        "SPECIES":"American mink",
        "COUNT":6
    },
    {
        "SPECIES":"Clark grebe",
        "COUNT":6
    },
    {
        "SPECIES":"Mountain chickadee",
        "COUNT":6
    },
    {
        "SPECIES":"Black-chinned hummingbird",
        "COUNT":6
    },
    {
        "SPECIES":"Wilson plover",
        "COUNT":6
    },
    {
        "SPECIES":"Gray flycatcher",
        "COUNT":6
    },
    {
        "SPECIES":"Yellow-bellied marmot",
        "COUNT":6
    },
    {
        "SPECIES":"Least bittern",
        "COUNT":6
    },
    {
        "SPECIES":"Painted bunting",
        "COUNT":6
    },
    {
        "SPECIES":"Western mastiff bat",
        "COUNT":6
    },
    {
        "SPECIES":"Red crossbill",
        "COUNT":6
    },
    {
        "SPECIES":"Alligator snapping turtle",
        "COUNT":6
    },
    {
        "SPECIES":"Sage thrasher",
        "COUNT":6
    },
    {
        "SPECIES":"Hawaiian goose",
        "COUNT":6
    },
    {
        "SPECIES":"Kites",
        "COUNT":6
    },
    {
        "SPECIES":"Canids",
        "COUNT":5
    },
    {
        "SPECIES":"Collared peccary",
        "COUNT":5
    },
    {
        "SPECIES":"Horse",
        "COUNT":5
    },
    {
        "SPECIES":"European golden-plover",
        "COUNT":5
    },
    {
        "SPECIES":"Roseate spoonbill",
        "COUNT":5
    },
    {
        "SPECIES":"Red-necked grebe",
        "COUNT":5
    },
    {
        "SPECIES":"White-winged crossbill",
        "COUNT":5
    },
    {
        "SPECIES":"Sulphur-bellied flycatcher",
        "COUNT":5
    },
    {
        "SPECIES":"Scaled quail",
        "COUNT":5
    },
    {
        "SPECIES":"Chestnut-collared longspur",
        "COUNT":5
    },
    {
        "SPECIES":"White-tailed hawk",
        "COUNT":5
    },
    {
        "SPECIES":"Greater roadrunner",
        "COUNT":5
    },
    {
        "SPECIES":"Northern goshawk",
        "COUNT":5
    },
    {
        "SPECIES":"White-throated munia",
        "COUNT":5
    },
    {
        "SPECIES":"Piping plover",
        "COUNT":5
    },
    {
        "SPECIES":"Black swift",
        "COUNT":5
    },
    {
        "SPECIES":"Sandwich tern",
        "COUNT":5
    },
    {
        "SPECIES":"Eurasian buzzard",
        "COUNT":5
    },
    {
        "SPECIES":"White-tailed prairie dog",
        "COUNT":5
    },
    {
        "SPECIES":"Indiana bat",
        "COUNT":5
    },
    {
        "SPECIES":"White-winged scoter",
        "COUNT":5
    },
    {
        "SPECIES":"Larks",
        "COUNT":5
    },
    {
        "SPECIES":"King rail",
        "COUNT":5
    },
    {
        "SPECIES":"Parrots",
        "COUNT":4
    },
    {
        "SPECIES":"Monk parakeet",
        "COUNT":4
    },
    {
        "SPECIES":"Red-tailed tropicbird",
        "COUNT":4
    },
    {
        "SPECIES":"Muscovy duck",
        "COUNT":4
    },
    {
        "SPECIES":"Chukar",
        "COUNT":4
    },
    {
        "SPECIES":"Snowy plover",
        "COUNT":4
    },
    {
        "SPECIES":"Red knot",
        "COUNT":4
    },
    {
        "SPECIES":"Vireos",
        "COUNT":4
    },
    {
        "SPECIES":"Kit fox",
        "COUNT":4
    },
    {
        "SPECIES":"Prothonotary warbler",
        "COUNT":4
    },
    {
        "SPECIES":"Pocketed free-tailed bat",
        "COUNT":4
    },
    {
        "SPECIES":"Ruffed grouse",
        "COUNT":4
    },
    {
        "SPECIES":"Waxbills",
        "COUNT":4
    },
    {
        "SPECIES":"North American beaver",
        "COUNT":4
    },
    {
        "SPECIES":"Cassin finch",
        "COUNT":4
    },
    {
        "SPECIES":"Great gray owl",
        "COUNT":4
    },
    {
        "SPECIES":"Hooded oriole",
        "COUNT":4
    },
    {
        "SPECIES":"Surf scoter",
        "COUNT":4
    },
    {
        "SPECIES":"Common chaffinch",
        "COUNT":4
    },
    {
        "SPECIES":"Red-breasted sapsucker",
        "COUNT":4
    },
    {
        "SPECIES":"Dusky flycatcher",
        "COUNT":4
    },
    {
        "SPECIES":"Tree Squirrels",
        "COUNT":4
    },
    {
        "SPECIES":"Western small-footed myotis",
        "COUNT":4
    },
    {
        "SPECIES":"Couch kingbird",
        "COUNT":4
    },
    {
        "SPECIES":"Fish crow",
        "COUNT":4
    },
    {
        "SPECIES":"Saffron finch",
        "COUNT":4
    },
    {
        "SPECIES":"Philippine collared dove",
        "COUNT":4
    },
    {
        "SPECIES":"Olive-sided flycatcher",
        "COUNT":4
    },
    {
        "SPECIES":"Red-footed booby",
        "COUNT":4
    },
    {
        "SPECIES":"Townsend solitaire",
        "COUNT":4
    },
    {
        "SPECIES":"Elegant tern",
        "COUNT":4
    },
    {
        "SPECIES":"Plains garter snake",
        "COUNT":4
    },
    {
        "SPECIES":"Finches",
        "COUNT":4
    },
    {
        "SPECIES":"Mallard/mottled duck complex",
        "COUNT":4
    },
    {
        "SPECIES":"Eurasian wigeon",
        "COUNT":3
    },
    {
        "SPECIES":"Helmeted guineafowl",
        "COUNT":3
    },
    {
        "SPECIES":"Ptarmigans",
        "COUNT":3
    },
    {
        "SPECIES":"Coastal plain cooter",
        "COUNT":3
    },
    {
        "SPECIES":"Swans",
        "COUNT":3
    },
    {
        "SPECIES":"Caribou",
        "COUNT":3
    },
    {
        "SPECIES":"Yellow-legged gull",
        "COUNT":3
    },
    {
        "SPECIES":"Old World vultures",
        "COUNT":3
    },
    {
        "SPECIES":"Carrion crow",
        "COUNT":3
    },
    {
        "SPECIES":"Iceland gull",
        "COUNT":3
    },
    {
        "SPECIES":"Hairy woodpecker",
        "COUNT":3
    },
    {
        "SPECIES":"Japanese white-eye",
        "COUNT":3
    },
    {
        "SPECIES":"Western screech-owl",
        "COUNT":3
    },
    {
        "SPECIES":"Bohemian waxwing",
        "COUNT":3
    },
    {
        "SPECIES":"Parasitic jaeger",
        "COUNT":3
    },
    {
        "SPECIES":"Cormorants",
        "COUNT":3
    },
    {
        "SPECIES":"Thick-billed longspur",
        "COUNT":3
    },
    {
        "SPECIES":"California towhee",
        "COUNT":3
    },
    {
        "SPECIES":"Carolina chickadee",
        "COUNT":3
    },
    {
        "SPECIES":"Florida red-bellied cooter",
        "COUNT":3
    },
    {
        "SPECIES":"Bewick wren",
        "COUNT":3
    },
    {
        "SPECIES":"White-crested elaenia",
        "COUNT":3
    },
    {
        "SPECIES":"Barrow goldeneye",
        "COUNT":3
    },
    {
        "SPECIES":"Crows",
        "COUNT":3
    },
    {
        "SPECIES":"Red phalarope",
        "COUNT":3
    },
    {
        "SPECIES":"Hawaiian hawk",
        "COUNT":3
    },
    {
        "SPECIES":"Jamaican fruit bat",
        "COUNT":3
    },
    {
        "SPECIES":"Cordilleran flycatcher",
        "COUNT":3
    },
    {
        "SPECIES":"Northern water snake",
        "COUNT":3
    },
    {
        "SPECIES":"Stilt sandpiper",
        "COUNT":3
    },
    {
        "SPECIES":"Long-legged myotis",
        "COUNT":3
    },
    {
        "SPECIES":"Eastern diamondback rattlesnake",
        "COUNT":3
    },
    {
        "SPECIES":"Northern shrike",
        "COUNT":3
    },
    {
        "SPECIES":"Great kiskadee",
        "COUNT":3
    },
    {
        "SPECIES":"Striped mud turtle",
        "COUNT":3
    },
    {
        "SPECIES":"Coypu (nutria)",
        "COUNT":3
    },
    {
        "SPECIES":"Louisiana waterthrush",
        "COUNT":3
    },
    {
        "SPECIES":"American black bear",
        "COUNT":3
    },
    {
        "SPECIES":"Pallas mastiff bat",
        "COUNT":3
    },
    {
        "SPECIES":"Limpkin",
        "COUNT":3
    },
    {
        "SPECIES":"Red-masked parakeet",
        "COUNT":3
    },
    {
        "SPECIES":"Partridges",
        "COUNT":3
    },
    {
        "SPECIES":"Western diamondback rattlesnake",
        "COUNT":3
    },
    {
        "SPECIES":"Costa Hummingbird",
        "COUNT":3
    },
    {
        "SPECIES":"Scaly-naped pigeon",
        "COUNT":3
    },
    {
        "SPECIES":"Black rat snake",
        "COUNT":3
    },
    {
        "SPECIES":"Short-tailed Hawk",
        "COUNT":3
    },
    {
        "SPECIES":"Prairie dogs",
        "COUNT":3
    },
    {
        "SPECIES":"Iguanas",
        "COUNT":3
    },
    {
        "SPECIES":"River otter",
        "COUNT":2
    },
    {
        "SPECIES":"Rock ptarmigan",
        "COUNT":2
    },
    {
        "SPECIES":"Heermann gull",
        "COUNT":2
    },
    {
        "SPECIES":"Emperor goose",
        "COUNT":2
    },
    {
        "SPECIES":"Great cormorant",
        "COUNT":2
    },
    {
        "SPECIES":"Pelagic cormorant",
        "COUNT":2
    },
    {
        "SPECIES":"Fork-tailed storm-petrel",
        "COUNT":2
    },
    {
        "SPECIES":"Trumpeter swan",
        "COUNT":2
    },
    {
        "SPECIES":"Black turnstone",
        "COUNT":2
    },
    {
        "SPECIES":"Curve-billed thrasher",
        "COUNT":2
    },
    {
        "SPECIES":"Black-legged kittiwake",
        "COUNT":2
    },
    {
        "SPECIES":"Gray heron",
        "COUNT":2
    },
    {
        "SPECIES":"Redwing",
        "COUNT":2
    },
    {
        "SPECIES":"Eurasian curlew",
        "COUNT":2
    },
    {
        "SPECIES":"Little tern",
        "COUNT":2
    },
    {
        "SPECIES":"Rock sandpiper",
        "COUNT":2
    },
    {
        "SPECIES":"White-breasted nuthatch",
        "COUNT":2
    },
    {
        "SPECIES":"Loons",
        "COUNT":2
    },
    {
        "SPECIES":"Gyrfalcon",
        "COUNT":2
    },
    {
        "SPECIES":"Northern hawk owl",
        "COUNT":2
    },
    {
        "SPECIES":"Allen hummingbird",
        "COUNT":2
    },
    {
        "SPECIES":"Calliope hummingbird",
        "COUNT":2
    },
    {
        "SPECIES":"Double-striped thick-knee",
        "COUNT":2
    },
    {
        "SPECIES":"Bushtit",
        "COUNT":2
    },
    {
        "SPECIES":"Antelope jackrabbit",
        "COUNT":2
    },
    {
        "SPECIES":"Brandt cormorant",
        "COUNT":2
    },
    {
        "SPECIES":"Yuma myotis",
        "COUNT":2
    },
    {
        "SPECIES":"Song thrush",
        "COUNT":2
    },
    {
        "SPECIES":"Nacunda nighthawk",
        "COUNT":2
    },
    {
        "SPECIES":"Hoary redpoll",
        "COUNT":2
    },
    {
        "SPECIES":"Long-eared myotis",
        "COUNT":2
    },
    {
        "SPECIES":"Common pipistrelle",
        "COUNT":2
    },
    {
        "SPECIES":"White-winged tern",
        "COUNT":2
    },
    {
        "SPECIES":"Meadow pipit",
        "COUNT":2
    },
    {
        "SPECIES":"Blue-winged warbler",
        "COUNT":2
    },
    {
        "SPECIES":"Yellow rail",
        "COUNT":2
    },
    {
        "SPECIES":"Quails",
        "COUNT":2
    },
    {
        "SPECIES":"Eared dove",
        "COUNT":2
    },
    {
        "SPECIES":"Egyptian goose",
        "COUNT":2
    },
    {
        "SPECIES":"Purple heron",
        "COUNT":2
    },
    {
        "SPECIES":"Thick-billed kingbird",
        "COUNT":2
    },
    {
        "SPECIES":"Morelet seedeater",
        "COUNT":2
    },
    {
        "SPECIES":"Eurasian sparrowhawk",
        "COUNT":2
    },
    {
        "SPECIES":"Swift",
        "COUNT":2
    },
    {
        "SPECIES":"Bicknell thrush",
        "COUNT":2
    },
    {
        "SPECIES":"Egyptian free-tailed bat",
        "COUNT":2
    },
    {
        "SPECIES":"Olive sparrow",
        "COUNT":2
    },
    {
        "SPECIES":"Blue-and-white swallow",
        "COUNT":2
    },
    {
        "SPECIES":"Indian pipistrelle",
        "COUNT":2
    },
    {
        "SPECIES":"Tropical kingbird",
        "COUNT":2
    },
    {
        "SPECIES":"Pallid swift",
        "COUNT":2
    },
    {
        "SPECIES":"African silverbill",
        "COUNT":2
    },
    {
        "SPECIES":"Flammulated owl",
        "COUNT":2
    },
    {
        "SPECIES":"Lawrence warbler",
        "COUNT":2
    },
    {
        "SPECIES":"Kentish plover",
        "COUNT":2
    },
    {
        "SPECIES":"White-crowned pigeon",
        "COUNT":2
    },
    {
        "SPECIES":"Lawrence goldfinch",
        "COUNT":2
    },
    {
        "SPECIES":"Thirteen-lined ground squirrel",
        "COUNT":2
    },
    {
        "SPECIES":"Eastern gray squirrel",
        "COUNT":2
    },
    {
        "SPECIES":"Ornate box turtle",
        "COUNT":2
    },
    {
        "SPECIES":"Brown-crested flycatcher",
        "COUNT":2
    },
    {
        "SPECIES":"Sagebrush sparrow",
        "COUNT":2
    },
    {
        "SPECIES":"Reddish egret",
        "COUNT":2
    },
    {
        "SPECIES":"Pacific loon",
        "COUNT":2
    },
    {
        "SPECIES":"Grouse",
        "COUNT":2
    },
    {
        "SPECIES":"Spotted Bat",
        "COUNT":2
    },
    {
        "SPECIES":"Gulls",
        "COUNT":2
    },
    {
        "SPECIES":"Rufous-tailed robin",
        "COUNT":2
    },
    {
        "SPECIES":"Black-headed gull complex",
        "COUNT":2
    },
    {
        "SPECIES":"Yellow-fronted canary",
        "COUNT":2
    },
    {
        "SPECIES":"Swainson warbler",
        "COUNT":2
    },
    {
        "SPECIES":"Common house-martin",
        "COUNT":2
    },
    {
        "SPECIES":"Mockingbirds",
        "COUNT":2
    },
    {
        "SPECIES":"Prairie dogs",
        "COUNT":2
    },
    {
        "SPECIES":"African collared dove",
        "COUNT":2
    },
    {
        "SPECIES":"Petrels",
        "COUNT":2
    },
    {
        "SPECIES":"Richardson ground squirrel",
        "COUNT":2
    },
    {
        "SPECIES":"White-nosed coati",
        "COUNT":1
    },
    {
        "SPECIES":"Northern lapwing",
        "COUNT":1
    },
    {
        "SPECIES":"Chicken turtle",
        "COUNT":1
    },
    {
        "SPECIES":"Chickadees",
        "COUNT":1
    },
    {
        "SPECIES":"Lappet-faced vulture",
        "COUNT":1
    },
    {
        "SPECIES":"White stork",
        "COUNT":1
    },
    {
        "SPECIES":"Bats",
        "COUNT":1
    },
    {
        "SPECIES":"Eastern small-footed myotis",
        "COUNT":1
    },
    {
        "SPECIES":"Wrentit",
        "COUNT":1
    },
    {
        "SPECIES":"Eastern mud turtle",
        "COUNT":1
    },
    {
        "SPECIES":"Roseate tern",
        "COUNT":1
    },
    {
        "SPECIES":"Northern pygmy-owl",
        "COUNT":1
    },
    {
        "SPECIES":"Philippine duck",
        "COUNT":1
    },
    {
        "SPECIES":"Hooded crow",
        "COUNT":1
    },
    {
        "SPECIES":"Common cuckoo",
        "COUNT":1
    },
    {
        "SPECIES":"White-bellied sea-eagle",
        "COUNT":1
    },
    {
        "SPECIES":"Evening grosbeak",
        "COUNT":1
    },
    {
        "SPECIES":"Gray-headed chickadee",
        "COUNT":1
    },
    {
        "SPECIES":"Whooping crane",
        "COUNT":1
    },
    {
        "SPECIES":"Red-legged kittiwake",
        "COUNT":1
    },
    {
        "SPECIES":"Red-legged partridge",
        "COUNT":1
    },
    {
        "SPECIES":"Tropical mockingbird",
        "COUNT":1
    },
    {
        "SPECIES":"Island canary",
        "COUNT":1
    },
    {
        "SPECIES":"Harlequin duck",
        "COUNT":1
    },
    {
        "SPECIES":"Big free-tailed bat",
        "COUNT":1
    },
    {
        "SPECIES":"McKay bunting",
        "COUNT":1
    },
    {
        "SPECIES":"Tricolored blackbird",
        "COUNT":1
    },
    {
        "SPECIES":"Canada jay",
        "COUNT":1
    },
    {
        "SPECIES":"Pine grosbeak",
        "COUNT":1
    },
    {
        "SPECIES":"Rook",
        "COUNT":1
    },
    {
        "SPECIES":"Little owl",
        "COUNT":1
    },
    {
        "SPECIES":"Florida bonneted bat",
        "COUNT":1
    },
    {
        "SPECIES":"Intermediate egret",
        "COUNT":1
    },
    {
        "SPECIES":"Black-faced bunting",
        "COUNT":1
    },
    {
        "SPECIES":"Eurasian coot",
        "COUNT":1
    },
    {
        "SPECIES":"Fox squirrel",
        "COUNT":1
    },
    {
        "SPECIES":"Great crested grebe",
        "COUNT":1
    },
    {
        "SPECIES":"Blackbirds",
        "COUNT":1
    },
    {
        "SPECIES":"Gray sac-winged bat",
        "COUNT":1
    },
    {
        "SPECIES":"Gray-crowned rosy-finch",
        "COUNT":1
    },
    {
        "SPECIES":"Band-rumped storm-petrel",
        "COUNT":1
    },
    {
        "SPECIES":"Ruddy ground dove",
        "COUNT":1
    },
    {
        "SPECIES":"Spruce grouse",
        "COUNT":1
    },
    {
        "SPECIES":"South American snipe",
        "COUNT":1
    },
    {
        "SPECIES":"Bar-tailed godwit",
        "COUNT":1
    },
    {
        "SPECIES":"Flying foxes",
        "COUNT":1
    },
    {
        "SPECIES":"Northern fulmar",
        "COUNT":1
    },
    {
        "SPECIES":"Shearwaters",
        "COUNT":1
    },
    {
        "SPECIES":"Red-headed woodpecker",
        "COUNT":1
    },
    {
        "SPECIES":"Western yellow bat",
        "COUNT":1
    },
    {
        "SPECIES":"Water moccasin",
        "COUNT":1
    },
    {
        "SPECIES":"Philippine drongo-cuckoo",
        "COUNT":1
    },
    {
        "SPECIES":"Olive-throated parakeet",
        "COUNT":1
    },
    {
        "SPECIES":"Pigeon guillemot",
        "COUNT":1
    },
    {
        "SPECIES":"Picazuro pigeon",
        "COUNT":1
    },
    {
        "SPECIES":"Yellow-headed caracara",
        "COUNT":1
    },
    {
        "SPECIES":"Eastern pine snake",
        "COUNT":1
    },
    {
        "SPECIES":"Gambel quail",
        "COUNT":1
    },
    {
        "SPECIES":"Vega gull",
        "COUNT":1
    },
    {
        "SPECIES":"Spotted flycatcher",
        "COUNT":1
    },
    {
        "SPECIES":"Mynas",
        "COUNT":1
    },
    {
        "SPECIES":"Hume short-toed lark",
        "COUNT":1
    },
    {
        "SPECIES":"Purple sandpiper",
        "COUNT":1
    },
    {
        "SPECIES":"Garden warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Storm-petrels",
        "COUNT":1
    },
    {
        "SPECIES":"Nuthatches",
        "COUNT":1
    },
    {
        "SPECIES":"Common murre",
        "COUNT":1
    },
    {
        "SPECIES":"Yellow-chevroned parakeet",
        "COUNT":1
    },
    {
        "SPECIES":"Indian flying fox",
        "COUNT":1
    },
    {
        "SPECIES":"Naked-rumped tomb bat",
        "COUNT":1
    },
    {
        "SPECIES":"Surfbird",
        "COUNT":1
    },
    {
        "SPECIES":"Gray-breasted martin",
        "COUNT":1
    },
    {
        "SPECIES":"Wood sandpiper",
        "COUNT":1
    },
    {
        "SPECIES":"Broad-tailed hummingbird",
        "COUNT":1
    },
    {
        "SPECIES":"Red-wattled lapwing",
        "COUNT":1
    },
    {
        "SPECIES":"Bare-eyed pigeon",
        "COUNT":1
    },
    {
        "SPECIES":"Black mastiff bat",
        "COUNT":1
    },
    {
        "SPECIES":"Kuhl pipistrelle",
        "COUNT":1
    },
    {
        "SPECIES":"Antillean fruit-eating bat",
        "COUNT":1
    },
    {
        "SPECIES":"Golden-winged warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Western red bat",
        "COUNT":1
    },
    {
        "SPECIES":"Bell vireo",
        "COUNT":1
    },
    {
        "SPECIES":"Ladder-backed woodpecker",
        "COUNT":1
    },
    {
        "SPECIES":"Long-tailed weasel",
        "COUNT":1
    },
    {
        "SPECIES":"Loggerhead kingbird",
        "COUNT":1
    },
    {
        "SPECIES":"Olivaceous Elaenia",
        "COUNT":1
    },
    {
        "SPECIES":"Lilac-crowned parrot",
        "COUNT":1
    },
    {
        "SPECIES":"Spectacled caiman",
        "COUNT":1
    },
    {
        "SPECIES":"Red-necked stint",
        "COUNT":1
    },
    {
        "SPECIES":"White-tufted grebe",
        "COUNT":1
    },
    {
        "SPECIES":"Alpine swift",
        "COUNT":1
    },
    {
        "SPECIES":"Tree pipit",
        "COUNT":1
    },
    {
        "SPECIES":"Yellow-browed warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Kelaart pipistrelle",
        "COUNT":1
    },
    {
        "SPECIES":"Prairie rattlesnake",
        "COUNT":1
    },
    {
        "SPECIES":"Oriental plover",
        "COUNT":1
    },
    {
        "SPECIES":"American red squirrel",
        "COUNT":1
    },
    {
        "SPECIES":"Pearly-eyed thrasher",
        "COUNT":1
    },
    {
        "SPECIES":"Bearded seal",
        "COUNT":1
    },
    {
        "SPECIES":"Cerulean warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Hawaiian petrel",
        "COUNT":1
    },
    {
        "SPECIES":"Spiny soft-shelled turtle",
        "COUNT":1
    },
    {
        "SPECIES":"Kirtland warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Wedge-tailed eagle",
        "COUNT":1
    },
    {
        "SPECIES":"Snowshoe hare",
        "COUNT":1
    },
    {
        "SPECIES":"Little red flying fox",
        "COUNT":1
    },
    {
        "SPECIES":"Piute ground squirrel",
        "COUNT":1
    },
    {
        "SPECIES":"Black redstart",
        "COUNT":1
    },
    {
        "SPECIES":"Kites",
        "COUNT":1
    },
    {
        "SPECIES":"African yellow bat",
        "COUNT":1
    },
    {
        "SPECIES":"Gray-tailed tattler",
        "COUNT":1
    },
    {
        "SPECIES":"Cardinals",
        "COUNT":1
    },
    {
        "SPECIES":"Olive-backed pipit",
        "COUNT":1
    },
    {
        "SPECIES":"Brown bear",
        "COUNT":1
    },
    {
        "SPECIES":"Western pipistrelle",
        "COUNT":1
    },
    {
        "SPECIES":"Northern Gannet",
        "COUNT":1
    },
    {
        "SPECIES":"Longspurs",
        "COUNT":1
    },
    {
        "SPECIES":"Angolan free-tailed bat",
        "COUNT":1
    },
    {
        "SPECIES":"Golden-fronted woodpecker",
        "COUNT":1
    },
    {
        "SPECIES":"Eurasian siskin",
        "COUNT":1
    },
    {
        "SPECIES":"Brown-throated parakeet",
        "COUNT":1
    },
    {
        "SPECIES":"Domestic sheep",
        "COUNT":1
    },
    {
        "SPECIES":"Tufted titmouse",
        "COUNT":1
    },
    {
        "SPECIES":"Lesser bulldog bat",
        "COUNT":1
    },
    {
        "SPECIES":"Greater Antillean grackle",
        "COUNT":1
    },
    {
        "SPECIES":"Java sparrow",
        "COUNT":1
    },
    {
        "SPECIES":"Greater spotted eagle",
        "COUNT":1
    },
    {
        "SPECIES":"Common ringed plover",
        "COUNT":1
    },
    {
        "SPECIES":"Sooty mustached bat",
        "COUNT":1
    },
    {
        "SPECIES":"Lesser sand-plover",
        "COUNT":1
    },
    {
        "SPECIES":"Eurasian moorhen",
        "COUNT":1
    },
    {
        "SPECIES":"Mauritian tomb bat",
        "COUNT":1
    },
    {
        "SPECIES":"Red-crowned amazon",
        "COUNT":1
    },
    {
        "SPECIES":"Brown booby",
        "COUNT":1
    },
    {
        "SPECIES":"Mink",
        "COUNT":1
    },
    {
        "SPECIES":"Horned puffin",
        "COUNT":1
    },
    {
        "SPECIES":"Broad-eared bat",
        "COUNT":1
    },
    {
        "SPECIES":"California kingsnake",
        "COUNT":1
    },
    {
        "SPECIES":"Speckled pigeon",
        "COUNT":1
    },
    {
        "SPECIES":"California myotis",
        "COUNT":1
    },
    {
        "SPECIES":"Greater prairie chicken",
        "COUNT":1
    },
    {
        "SPECIES":"Ross goose",
        "COUNT":1
    },
    {
        "SPECIES":"Little swift",
        "COUNT":1
    },
    {
        "SPECIES":"Neotropic cormorant",
        "COUNT":1
    },
    {
        "SPECIES":"Black-crowned sparrow lark",
        "COUNT":1
    },
    {
        "SPECIES":"European goldfinch",
        "COUNT":1
    },
    {
        "SPECIES":"Western hognose snake",
        "COUNT":1
    },
    {
        "SPECIES":"Corn Crake",
        "COUNT":1
    },
    {
        "SPECIES":"American crow (Corvus brachyrhynchos)",
        "COUNT":1
    },
    {
        "SPECIES":"Virginia warbler",
        "COUNT":1
    },
    {
        "SPECIES":"Mouse/Vole",
        "COUNT":1
    },
    {
        "SPECIES":"Bull Snake",
        "COUNT":1
    },
    {
        "SPECIES":"Spur-winged lapwing",
        "COUNT":1
    },
    {
        "SPECIES":"Black Tailed Jack Rabbit",
        "COUNT":1
    },
    {
        "SPECIES":"Dark-billed cuckoo",
        "COUNT":1
    },
    {
        "SPECIES":"Starlings",
        "COUNT":1
    },
    {
        "SPECIES":"American kestrel (Falco sparverius)",
        "COUNT":1
    },
    {
        "SPECIES":null,
        "COUNT":1
    },
    {
        "SPECIES":"Common grackle (Quiscalus quiscula)",
        "COUNT":1
    },
    {
        "SPECIES":"Australian pelican",
        "COUNT":1
    },
    {
        "SPECIES":"Gray bat",
        "COUNT":1
    },
    {
        "SPECIES":"Axis deer",
        "COUNT":1
    },
    {
        "SPECIES":"Barn swallow (Hirundo rustica)",
        "COUNT":1
    },
    {
        "SPECIES":"Spotted thick-knee",
        "COUNT":1
    },
    {
        "SPECIES":"Perching birds (y) (Passeriformes)",
        "COUNT":1
    }
]