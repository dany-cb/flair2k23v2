import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <main id="home">
        <div className={styles["hero-container"]}>
          <video
            autoPlay
            loop
            muted
            className={styles["hero-background-video"]}
          >
            <source src="/space-theme.webm" type="video/webm" />
          </video>
          {/* <div class="hero-black-hole-stars">
            <div
              style="animation-duration:7.630824567743058s;animation-delay:2.1623895916078495s;top:75.02474307543298%;left:5.0763504191329245%;--transform:translate(283.0189923594626px, -157.65588137522778px)"
              q:key="0"
            ></div>
            <div
              style="animation-duration:13.210263299655605s;animation-delay:2.435209548952262s;top:21.329529933770818%;left:90.07584996087141%;--transform:translate(-252.47785475348985px, 180.62396141724383px)"
              q:key="1"
            ></div>
            <div
              style="animation-duration:10.543290125748772s;animation-delay:2.1129471412361998s;top:88.77133495367377%;left:81.96173079245057%;--transform:translate(-201.35890399243857px, -244.25941020814477px)"
              q:key="2"
            ></div>
            <div
              style="animation-duration:12.063048122959529s;animation-delay:2.4318769116603955s;top:66.38744075656842%;left:93.48077787808487%;--transform:translate(-273.9289006319347px, -103.24087676638102px)"
              q:key="3"
            ></div>
            <div
              style="animation-duration:12.326946192615809s;animation-delay:2.61393323870186s;top:2.513260148768337%;left:93.88076318418506%;--transform:translate(-276.4488080603659px, 299.16646106275954px)"
              q:key="4"
            ></div>
            <div
              style="animation-duration:11.156139786262894s;animation-delay:0.0063653726809409505s;top:76.98130868289698%;left:74.48324317509012%;--transform:translate(-154.24443200306777px, -169.982244702251px)"
              q:key="5"
            ></div>
            <div
              style="animation-duration:7.348557422756555s;animation-delay:2.253370795088526s;top:64.43090044240243%;left:6.201894222917015%;--transform:translate(275.92806639562286px, -90.91467278713532px)"
              q:key="6"
            ></div>
            <div
              style="animation-duration:7.745479411741282s;animation-delay:2.8731288687842325s;top:83.01559074244003%;left:85.80039312477108%;--transform:translate(-225.5424766860578px, -207.99822167737213px)"
              q:key="7"
            ></div>
            <div
              style="animation-duration:10.414126441336547s;animation-delay:2.0856757765022715s;top:37.75761182193644%;left:97.04908654886883%;--transform:translate(-296.4092452578737px, 77.12704552180041px)"
              q:key="8"
            ></div>
            <div
              style="animation-duration:11.162412873988739s;animation-delay:1.9975851618213047s;top:22.03191042601189%;left:79.32474450336767%;--transform:translate(-184.7458903712163px, 176.19896431612509px)"
              q:key="9"
            ></div>
            <div
              style="animation-duration:12.542197629350635s;animation-delay:1.3850991149366165s;top:21.99191093437449%;left:42.6649996675432%;--transform:translate(46.21050209447781px, 176.4509611134407px)"
              q:key="10"
            ></div>
            <div
              style="animation-duration:9.356542671794454s;animation-delay:4.552552302799477s;top:91.54574913723133%;left:64.6859665338924%;--transform:translate(-92.52158916352212px, -261.7382195645573px)"
              q:key="11"
            ></div>
            <div
              style="animation-duration:12.66593574620348s;animation-delay:1.072673761535038s;top:3.6560756852644483%;left:23.127311656843254%;--transform:translate(169.2979365618875px, 291.966723182834px)"
              q:key="12"
            ></div>
            <div
              style="animation-duration:11.469472498824s;animation-delay:1.989075056736962s;top:91.18546050877964%;left:4.009079356679801%;--transform:translate(289.74280005291723px, -259.4684012053118px)"
              q:key="13"
            ></div>
            <div
              style="animation-duration:11.913104822824616s;animation-delay:1.9490893318832359s;top:58.537433718749085%;left:16.0609118521281%;--transform:translate(213.81625533159297px, -53.78583242811925px)"
              q:key="14"
            ></div>
            <div
              style="animation-duration:8.129156342570994s;animation-delay:2.6807705027192252s;top:20.196231821811917%;left:90.4695536935313%;--transform:translate(-254.95818826924713px, 187.76373952258493px)"
              q:key="15"
            ></div>
            <div
              style="animation-duration:9.182315045619182s;animation-delay:1.1880734716890973s;top:95.90773250163964%;left:76.71622505566815%;--transform:translate(-168.31221785070935px, -289.21871476032976px)"
              q:key="16"
            ></div>
            <div
              style="animation-duration:13.923768664294323s;animation-delay:3.5979932250581426s;top:71.20498068094712%;left:24.29790856130929%;--transform:translate(161.92317606375147px, -133.59137828996683px)"
              q:key="17"
            ></div>
            <div
              style="animation-duration:11.23755850597816s;animation-delay:1.2253002809661229s;top:10.630485458261663%;left:39.02962389029761%;--transform:translate(69.11336949112508px, 248.02794161295154px)"
              q:key="18"
            ></div>
            <div
              style="animation-duration:10.988872693412912s;animation-delay:2.7340566655118934s;top:96.2829000875041%;left:78.1079100302835%;--transform:translate(-177.0798331907861px, -291.5822705512758px)"
              q:key="19"
            ></div>
            <div
              style="animation-duration:8.23984042003554s;animation-delay:3.481187462247828s;top:97.36897229371144%;left:8.013213360507375%;--transform:translate(264.5167558288035px, -298.4245254503821px)"
              q:key="20"
            ></div>
            <div
              style="animation-duration:10.23887033957396s;animation-delay:3.9401211618675536s;top:87.09629236294126%;left:78.171953753037%;--transform:translate(-177.48330864413313px, -233.70664188652987px)"
              q:key="21"
            ></div>
            <div
              style="animation-duration:12.716537442297275s;animation-delay:4.061197150979425s;top:18.93618207974064%;left:30.396920261186654%;--transform:translate(123.49940235452407px, 195.702052897634px)"
              q:key="22"
            ></div>
            <div
              style="animation-duration:10.084995178835717s;animation-delay:3.4251535729552254s;top:99.40599808189504%;left:7.954492302951888%;--transform:translate(264.8866984914031px, -311.2577879159387px)"
              q:key="23"
            ></div>
            <div
              style="animation-duration:12.95213143026806s;animation-delay:4.306195264668946s;top:79.25730323732918%;left:12.265655441060442%;--transform:translate(237.7263707213192px, -184.32101039517383px)"
              q:key="24"
            ></div>
            <div
              style="animation-duration:9.39309983902881s;animation-delay:1.608693431997662s;top:69.58191091249194%;left:81.47711554837751%;--transform:translate(-198.30582795477838px, -123.36603874869914px)"
              q:key="25"
            ></div>
            <div
              style="animation-duration:10.014944799874199s;animation-delay:0.8731779584865484s;top:77.90701515388629%;left:55.565101462470714%;--transform:translate(-35.06013921356547px, -175.81419546948365px)"
              q:key="26"
            ></div>
            <div
              style="animation-duration:11.221334192296595s;animation-delay:4.44447440237211s;top:80.25507529801936%;left:29.467976536794627%;--transform:translate(129.35174781819384px, -190.60697437752196px)"
              q:key="27"
            ></div>
            <div
              style="animation-duration:8.529981248001745s;animation-delay:2.46907218965577s;top:96.4914126094782%;left:30.87322967601547%;--transform:translate(120.49865304110256px, -292.8958994397127px)"
              q:key="28"
            ></div>
            <div
              style="animation-duration:10.271235366466065s;animation-delay:4.700460596603414s;top:76.1006439651463%;left:3.7466794270188952%;--transform:translate(291.395919609781px, -164.4340569804218px)"
              q:key="29"
            ></div>
            <div
              style="animation-duration:9.042619450640405s;animation-delay:3.449281995069271s;top:7.2027402705513%;left:27.876684085434377%;--transform:translate(139.3768902617634px, 269.6227362955268px)"
              q:key="30"
            ></div>
            <div
              style="animation-duration:12.844680820193808s;animation-delay:3.218322662895731s;top:1.5535865970317975%;left:97.36417547848136%;--transform:translate(-298.3943055144326px, 305.21240443869965px)"
              q:key="31"
            ></div>
            <div
              style="animation-duration:10.035094862867943s;animation-delay:4.616835307559262s;top:82.4892717083727%;left:82.2777228359196%;--transform:translate(-203.34965386629355px, -204.682411762748px)"
              q:key="32"
            ></div>
            <div
              style="animation-duration:7.778755614028718s;animation-delay:1.4906533459054538s;top:0.43977118223628153%;left:26.360413520417957%;--transform:translate(148.92939482136686px, 312.22944155191146px)"
              q:key="33"
            ></div>
            <div
              style="animation-duration:7.393824429008758s;animation-delay:3.4631254156073012s;top:93.39927616481529%;left:52.22993891764367%;--transform:translate(-14.04861518115514px, -273.41543983833634px)"
              q:key="34"
            ></div>
            <div
              style="animation-duration:13.610054547254245s;animation-delay:0.4662460301133742s;top:93.55086462349145%;left:5.628796725117047%;--transform:translate(279.5385806317626px, -274.37044712799616px)"
              q:key="35"
            ></div>
            <div
              style="animation-duration:8.235086453938312s;animation-delay:0.9489343815454232s;top:65.92431665124028%;left:24.70581351614576%;--transform:translate(159.35337484828173px, -100.32319490281377px)"
              q:key="36"
            ></div>
            <div
              style="animation-duration:7.810065811545008s;animation-delay:2.0435877024935345s;top:31.199104128131516%;left:95.38922205332277%;--transform:translate(-285.95209893593346px, 118.44564399277145px)"
              q:key="37"
            ></div>
            <div
              style="animation-duration:9.525389303169378s;animation-delay:1.779037771986356s;top:12.369280358566325%;left:2.38117515566163%;--transform:translate(299.9985965193318px, 237.07353374103215px)"
              q:key="38"
            ></div>
            <div
              style="animation-duration:12.259193831385321s;animation-delay:0.7387197840404292s;top:77.66502129750073%;left:64.11507433926779%;--transform:translate(-88.92496833738711px, -174.2896341742546px)"
              q:key="39"
            ></div>
            <div
              style="animation-duration:8.493550803159248s;animation-delay:2.0195123932943417s;top:75.67012618622297%;left:64.89374952582898%;--transform:translate(-93.83062201272257px, -161.7217949732047px)"
              q:key="40"
            ></div>
            <div
              style="animation-duration:7.165443852279905s;animation-delay:2.8601260617464264s;top:81.93236880503557%;left:53.260360361621515%;--transform:translate(-20.540270278215555px, -201.17392347172404px)"
              q:key="41"
            ></div>
            <div
              style="animation-duration:11.28511052158542s;animation-delay:2.525295474187695s;top:86.94183700241223%;left:65.63698334998685%;--transform:translate(-98.5129951049171px, -232.733573115197px)"
              q:key="42"
            ></div>
            <div
              style="animation-duration:10.027358728013123s;animation-delay:2.765175093345864s;top:9.558859753074644%;left:87.13713600006872%;--transform:translate(-233.96395680043295px, 254.77918355562974px)"
              q:key="43"
            ></div>
            <div
              style="animation-duration:7.90982282936371s;animation-delay:1.7795714488618053s;top:5.949474402250465%;left:59.092074091979875%;--transform:translate(-57.280066779473195px, 277.5183112658221px)"
              q:key="44"
            ></div>
            <div
              style="animation-duration:9.547121208556671s;animation-delay:3.1551667664387306s;top:57.48718043179621%;left:99.73102235611837%;--transform:translate(-313.30544084354574px, -47.16923672031613px)"
              q:key="45"
            ></div>
            <div
              style="animation-duration:13.993430195587148s;animation-delay:2.5089529679286446s;top:91.31660105124327%;left:98.12380110953625%;--transform:translate(-303.1799469900784px, -260.2945866228326px)"
              q:key="46"
            ></div>
            <div
              style="animation-duration:10.393433052081651s;animation-delay:2.706511007115263s;top:4.940842644179644%;left:40.2469765742987%;--transform:translate(61.444047581918184px, 283.87269134166826px)"
              q:key="47"
            ></div>
            <div
              style="animation-duration:10.27014894115748s;animation-delay:4.45486729712888s;top:52.10804736848487%;left:22.399366810521904%;--transform:translate(173.88398909371202px, -13.28069842145464px)"
              q:key="48"
            ></div>
            <div
              style="animation-duration:11.232078280239556s;animation-delay:1.3122613150152984s;top:99.548649469299%;left:89.02370261059546%;--transform:translate(-245.8493264467514px, -312.1564916565837px)"
              q:key="49"
            ></div>
            <div
              style="animation-duration:8.429563009113547s;animation-delay:0.010985856338463496s;top:0.6204317256062408%;left:17.46985737915221%;--transform:translate(204.93989851134108px, 311.0912801286807px)"
              q:key="50"
            ></div>
            <div
              style="animation-duration:13.275943334493581s;animation-delay:4.429857829634683s;top:17.62929852687405%;left:57.301469448618604%;--transform:translate(-45.99925752629721px, 203.9354192806935px)"
              q:key="51"
            ></div>
            <div
              style="animation-duration:8.405322211588583s;animation-delay:1.1149587519554827s;top:42.15435115855082%;left:80.92306593382183%;--transform:translate(-194.81531538307755px, 49.427587701129845px)"
              q:key="52"
            ></div>
            <div
              style="animation-duration:9.776999603691076s;animation-delay:1.738817351150579s;top:31.72733610241325%;left:7.563758591353076%;--transform:translate(267.34832087447563px, 115.11778255479653px)"
              q:key="53"
            ></div>
            <div
              style="animation-duration:13.33627557482087s;animation-delay:0.6388090716772543s;top:0.02633799648350532%;left:23.920583804386375%;--transform:translate(164.30032203236584px, 314.83407062215394px)"
              q:key="54"
            ></div>
            <div
              style="animation-duration:12.861338264188884s;animation-delay:0.12126034076754277s;top:77.9859538702294%;left:6.264696597503483%;--transform:translate(275.5324114357281px, -176.31150938244517px)"
              q:key="55"
            ></div>
            <div
              style="animation-duration:13.893644238140109s;animation-delay:2.2601041949721234s;top:18.701515636826848%;left:99.97486097291403%;--transform:translate(-314.8416241293584px, 197.18045148799087px)"
              q:key="56"
            ></div>
            <div
              style="animation-duration:8.243418306157542s;animation-delay:4.164629018159392s;top:96.49660786898198%;left:74.56785842309006%;--transform:translate(-154.77750806546743px, -292.9286295745865px)"
              q:key="57"
            ></div>
            <div
              style="animation-duration:12.813099779192672s;animation-delay:4.491063994470705s;top:13.834294826612425%;left:63.84170935509452%;--transform:translate(-87.20276893709551px, 227.84394259234173px)"
              q:key="58"
            ></div>
            <div
              style="animation-duration:12.282346004755482s;animation-delay:4.2619256449733856s;top:67.69326572600562%;left:98.81802562737903%;--transform:translate(-307.5535614524879px, -111.46757407383546px)"
              q:key="59"
            ></div>
            <div
              style="animation-duration:7.666980744352456s;animation-delay:4.0671808146669575s;top:82.34582749730077%;left:64.32404218655175%;--transform:translate(-90.24146577527597px, -203.77871323299487px)"
              q:key="60"
            ></div>
            <div
              style="animation-duration:9.76988669769748s;animation-delay:2.6785565054741145s;top:96.60369809274383%;left:67.41483680920355%;--transform:translate(-109.71347189798236px, -293.60329798428614px)"
              q:key="61"
            ></div>
            <div
              style="animation-duration:12.30550096020204s;animation-delay:1.8695983983662112s;top:0.19120835125112645%;left:8.75775523142137%;--transform:translate(259.8261420420454px, 313.7953873871179px)"
              q:key="62"
            ></div>
            <div
              style="animation-duration:10.164669398761486s;animation-delay:3.1483871386071325s;top:78.52435322907576%;left:73.42254101692025%;--transform:translate(-147.56200840659756px, -179.70342534317732px)"
              q:key="63"
            ></div>
            <div
              style="animation-duration:8.54985299163734s;animation-delay:2.903635200692163s;top:82.27965575688255%;left:72.87933119157198%;--transform:translate(-144.13978650690342px, -203.36183126836005px)"
              q:key="64"
            ></div>
            <div
              style="animation-duration:9.142656026880998s;animation-delay:3.3360943262321507s;top:39.96904998068595%;left:11.86562415182031%;--transform:translate(240.24656784353203px, 63.194985121678506px)"
              q:key="65"
            ></div>
            <div
              style="animation-duration:8.398069717773861s;animation-delay:3.0813498893422517s;top:91.74097771595373%;left:74.56461612312901%;--transform:translate(-154.75708157571282px, -262.96815961050856px)"
              q:key="66"
            ></div>
            <div
              style="animation-duration:10.656178654604613s;animation-delay:0.600336793187749s;top:60.30221328582186%;left:15.892529693180869%;--transform:translate(214.87706293296054px, -64.90394370067771px)"
              q:key="67"
            ></div>
            <div
              style="animation-duration:12.503035752208643s;animation-delay:2.8202395031315133s;top:88.44792605950961%;left:19.455071295091898%;--transform:translate(192.43305084092106px, -242.22193417491061px)"
              q:key="68"
            ></div>
            <div
              style="animation-duration:10.61903519228417s;animation-delay:3.3810693757306263s;top:21.159572448809683%;left:18.79452956937735%;--transform:translate(196.5944637129227px, 181.694693572499px)"
              q:key="69"
            ></div>
            <div
              style="animation-duration:10.438075255812915s;animation-delay:3.518761112414227s;top:31.084773075322538%;left:15.589728691183025%;--transform:translate(216.78470924554696px, 119.16592962546802px)"
              q:key="70"
            ></div>
            <div
              style="animation-duration:7.200635078351497s;animation-delay:3.1725399764946682s;top:48.96129154122328%;left:91.06865076231045%;--transform:translate(-258.7324998025559px, 6.543863290293302px)"
              q:key="71"
            ></div>
            <div
              style="animation-duration:8.415308884974623s;animation-delay:1.3931808645002897s;top:83.44274625108777%;left:74.73656380709687%;--transform:translate(-155.84035198471037px, -210.68930138185294px)"
              q:key="72"
            ></div>
            <div
              style="animation-duration:13.543129375247446s;animation-delay:0.48669209639233935s;top:12.538009058812527%;left:3.5627185150270524%;--transform:translate(292.55487335532956px, 236.0105429294811px)"
              q:key="73"
            ></div>
            <div
              style="animation-duration:7.514649595299069s;animation-delay:3.16881083703181s;top:82.7484130516805%;left:20.50386387211094%;--transform:translate(185.82565760570108px, -206.3150022255872px)"
              q:key="74"
            ></div>
            <div
              style="animation-duration:11.622986137496873s;animation-delay:0.2676375354385707s;top:88.5041123503537%;left:50.98271943879733%;--transform:translate(-6.1911324644231795px, -242.57590780722828px)"
              q:key="75"
            ></div>
            <div
              style="animation-duration:12.759185200621591s;animation-delay:0.8299650365491218s;top:73.43867175105817%;left:97.89250335757909%;--transform:translate(-301.72277115274824px, -147.6636320316664px)"
              q:key="76"
            ></div>
            <div
              style="animation-duration:9.66997798809854s;animation-delay:0.7280632735581938s;top:24.237884998862658%;left:23.64917716102064%;--transform:translate(166.01018388556997px, 162.30132450716525px)"
              q:key="77"
            ></div>
            <div
              style="animation-duration:11.30419183039746s;animation-delay:1.2898029278989587s;top:89.15545747937065%;left:9.303883612029228%;--transform:translate(256.3855332442159px, -246.67938212003514px)"
              q:key="78"
            ></div>
            <div
              style="animation-duration:10.76184649885939s;animation-delay:1.310204785300907s;top:98.18588529064456%;left:74.24378848820778%;--transform:translate(-152.73586747570906px, -303.57107733106074px)"
              q:key="79"
            ></div>
            <div
              style="animation-duration:13.473073552216608s;animation-delay:0.7463633164707073s;top:6.653635370159194%;left:19.360315568697416%;--transform:translate(193.03001191720628px, 273.08209716799706px)"
              q:key="80"
            ></div>
            <div
              style="animation-duration:11.92565920782363s;animation-delay:1.8114811681419152s;top:99.19256521877048%;left:67.87566427645093%;--transform:translate(-112.61668494164087px, -309.9131608782541px)"
              q:key="81"
            ></div>
            <div
              style="animation-duration:7.985599536328046s;animation-delay:3.4811539055910554s;top:56.09212052287431%;left:84.75328660927907%;--transform:translate(-218.9457056384582px, -38.380359294108146px)"
              q:key="82"
            ></div>
            <div
              style="animation-duration:11.262148354030616s;animation-delay:4.290243042429811s;top:17.04036626888157%;left:11.934036422829974%;--transform:translate(239.81557053617118px, 207.64569250604615px)"
              q:key="83"
            ></div>
            <div
              style="animation-duration:9.041155498244144s;animation-delay:2.361417573166226s;top:46.34929086737236%;left:99.74559243692408%;--transform:translate(-313.39723235262176px, 22.99946753555413px)"
              q:key="84"
            ></div>
            <div
              style="animation-duration:10.862198945906256s;animation-delay:2.783910602027475s;top:94.00591061422512%;left:20.95376446686561%;--transform:translate(182.99128385874664px, -277.2372368696183px)"
              q:key="85"
            ></div>
            <div
              style="animation-duration:10.996789001407048s;animation-delay:4.2540435395838605s;top:93.83309243857616%;left:19.617595596140024%;--transform:translate(191.40914774431783px, -276.1484823630298px)"
              q:key="86"
            ></div>
            <div
              style="animation-duration:13.14224417769234s;animation-delay:4.701366566745082s;top:17.586598287931366%;left:24.49093411410741%;--transform:translate(160.7071150811233px, 204.2044307860324px)"
              q:key="87"
            ></div>
            <div
              style="animation-duration:10.818007767847643s;animation-delay:0.5927177252387705s;top:75.55137804300016%;left:51.41503104345424%;--transform:translate(-8.914695573761731px, -160.97368167090102px)"
              q:key="88"
            ></div>
            <div
              style="animation-duration:13.915399119772802s;animation-delay:1.7449005006161722s;top:90.54684949064504%;left:73.05217008009464%;--transform:translate(-145.22867150459618px, -255.44515179106378px)"
              q:key="89"
            ></div>
            <div
              style="animation-duration:9.04271197285808s;animation-delay:3.5091344165167406s;top:38.47715761644734%;left:84.30425461279178%;--transform:translate(-216.11680406058827px, 72.59390701638175px)"
              q:key="90"
            ></div>
            <div
              style="animation-duration:8.906838539903625s;animation-delay:4.659391139639512s;top:51.301085531917124%;left:78.1084328387394%;--transform:translate(-177.08312688405823px, -8.196838851077883px)"
              q:key="91"
            ></div>
            <div
              style="animation-duration:7.197899381581427s;animation-delay:4.556435422697169s;top:80.79860030644754%;left:97.3440208474083%;--transform:translate(-298.26733133867225px, -194.03118193061954px)"
              q:key="92"
            ></div>
            <div
              style="animation-duration:12.89300822525444s;animation-delay:4.907333841876778s;top:81.59386316946009%;left:42.576462148332524%;--transform:translate(46.76828846550507px, -199.04133796759862px)"
              q:key="93"
            ></div>
            <div
              style="animation-duration:7.40644063745056s;animation-delay:4.514581341935358s;top:28.184944919920362%;left:3.58615566989251%;--transform:translate(292.40721927967724px, 137.4348470045017px)"
              q:key="94"
            ></div>
            <div
              style="animation-duration:11.116095783638158s;animation-delay:2.3727303215816775s;top:2.594104058475488%;left:85.14145836498518%;--transform:translate(-221.3911876994067px, 298.6571444316044px)"
              q:key="95"
            ></div>
            <div
              style="animation-duration:12.245436086818042s;animation-delay:0.857444681782692s;top:88.50193609931318%;left:89.86566113269609%;--transform:translate(-251.15366513598545px, -242.56219742567308px)"
              q:key="96"
            ></div>
            <div
              style="animation-duration:10.443364973673187s;animation-delay:4.943143567432433s;top:23.774617409835642%;left:38.46785976965519%;--transform:translate(72.6524834511723px, 165.21991031803546px)"
              q:key="97"
            ></div>
            <div
              style="animation-duration:10.946497123229395s;animation-delay:1.6490320591708874s;top:43.87376054310932%;left:3.0745141419527%;--transform:translate(295.630560905698px, 38.59530857841128px)"
              q:key="98"
            ></div>
            <div
              style="animation-duration:12.350195659886253s;animation-delay:0.42961029466068057s;top:68.30433815553658%;left:83.77431716294164%;--transform:translate(-212.77819812653235px, -115.31733037988049px)"
              q:key="99"
            ></div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default Hero;
