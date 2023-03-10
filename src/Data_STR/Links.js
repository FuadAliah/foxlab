const Links = () => {
  let links = [
    "https://www.figma.com/community/plugin/961270034818256057/Jitter-%C2%B7-Animate-your-Figma-designs",
    "https://n8n.io/integrations/n8n-nodes-base.notion",
    "https://retool.com/api-generator/",
    "https://www.framer.com/downloads/",
    "https://adaptr.com/",
    "https://docs.google.com/spreadsheets/d/12dHUTTQLQuy7HAOHbuv2LvCR9UKgbviWN-QpyYA1wyM/edit#gid=0",
    "https://www.corebook.io/studio/",
    "https://eurekasurveys.com/",
    "https://uizard.io/",
    "https://www.framer.com/input-kit/",
    "https://www.getdesign.io/products/flows",
    "https://penpot.app/",
    "https://www.opinionx.co/",
    "https://rev.webkul.design/emptystate/",
    "https://bedrock.mxstbr.com/",
    "https://toucantoco.com/en/saas-cpo-analytics-checklist.html",
    "https://www.n8n.cloud/",
    "https://www.beyta.co/",
    "https://bloouikit.com/",
    "https://tailblend.vercel.app/",
    "https://www.axure.com/",
    "https://www.framer.com/blog/posts/announcing-smart-components/",
    "https://stage.so/",
    "https://www.bicaforfigma.com/",
    "https://pory.io/",
    "https://icons8.com/l/plumpy/",
    "https://overflow.io/",
    "https://saffron.vc/",
    "https://quarkly.io/",
    "https://maze.co/platform/integrations/adobe-xd/",
    "https://flowuikit.com/",
    "https://caply.app/",
    "https://inspireframe.io/",
    "https://www.figma.com/community/plugin/908870217222043020/ProtoPie",
    "https://designmodo.com/startup/",
    "https://uranus.design/",
    "https://getpixelsnap.com/",
    "https://maze.co/platform/integrations/figma/",
    "https://www.macos-uikit.xyz/",
    "https://www.framer.com/volt/",
    "https://www.editorx.com/",
    "https://akaricons.com/",
    "https://uigiants.com/",
    "https://app.jiga3d.com/get-quote",
    "https://saasmanual.com/",
    "https://logo.shapefactory.co/",
    "https://tiiny.host/",
    "https://studio.design/",
    "https://draftium.com/",
    "https://pacaproduct.com/free-emoji-pack",
    "https://spiritapp.io/",
    "https://contrauikit.com/",
    "https://sheety.co/",
    "https://www.framer.com/motion/",
    "https://www.principle.app/",
    "https://www.protopie.io/promotions/protopie-version-5-launch",
    "https://getpixelsnap.com/",
    "https://www.sobieckipioneering.com/creativity-guide",
    "https://www.protopie.io/",
    "https://iosdesignkit.io/ios-14-gui/",
    "https://octopus.do/",
    "https://www.cnc.io/en/seed",
    "https://qlo.morflax.com/",
    "https://codesandbox.io/post/team-pro",
    "https://www.artyline.co/",
    "https://www.drama.app/",
    "https://ebooks.webflow.com/ebook/the-modern-web-design-process",
    "https://uicoach.io/",
    "https://3dbook.xyz/",
    "https://createwithflow.com/",
    "https://uiprint.co/",
    "https://apps.apple.com/app/sizey-aspect-ratio-calculator/id1409438334",
    "https://maze.co/",
    "https://loaders.io/",
    "https://www.figma.com/community/plugin/742764242781786818/Wireframe",
    "https://iosdesignkit.io/ios-13-gui/",
    "https://www.invisionapp.com/craft",
    "https://themeselection.com/products/exemplar-free-avatar-library-for-figma-and-sketch/",
    "https://www.getdesign.io/",
    "https://evolt.io/enterprise/",
    "https://mupixa.com/",
    "https://www.bravostudio.app/",
    "https://source.forpeople.studio/",
    "https://wip.co/",
    "https://framer.com/projects/",
    "https://www.namecheap.com/logo-maker/",
    "https://www.fonts.ninja/",
    "https://www.trymontage.com/",
    "https://www.figma.com/",
    "https://www.ideasdrop.com/",
    "https://www.framer.com/updates/2020-06-01/",
    "https://userflows.marvelapp.com/",
    "https://www.taskade.com/",
    "https://frontnd.io/",
    "https://kiteapp.co/",
    "https://canvas.fulcrum.rocks/",
    "https://websmith.digital/",
    "https://elementor.com/cloud/",
    "https://uijar.com/",
    "https://www.mock.video/",
    "https://www.deta.sh/",
    "https://chrome.google.com/webstore/detail/listly-data-scraper/ihljmnfgkkmoikgkdkjejbkpdpbmcgeh",
    "https://www.plectica.com/",
    "https://www.figma.com/",
    "https://products.ls.graphics/uxflow/",
    "https://origami.design/",
    "https://www.skaffolder.com/home",
    "https://stories.forpeople.studio/",
    "https://foundersbelt.com/",
    "https://www.meetinvr.com/",
    "https://octopus.do/",
    "https://protocapsule.com/",
    "https://webslides.tv/#slide=1",
    "https://uizard.io/",
    "https://bubble.io/",
    "https://mobile.waynumbersee.top/",
    "https://mockitt.wondershare.com/",
    "https://www.uxpin.com/",
    "https://replit.com/",
    "https://www.trymason.com/",
    "https://slice.design/web",
    "https://mockuptime.com/",
    "https://studio.design/",
    "https://mockuuups.studio/",
    "https://github.com/AMoreaux/Sketch-Icons",
    "https://eos-icons.com/",
    "https://uibakery.io/",
    "https://university.webflow.com/",
    "https://createwithflow.com/",
    "http://containerskit.com/",
    "https://smartmockups.com/",
    "https://www.adobe.com/products/xd.html",
    "https://gumroad.com/l/gHrTr",
    "https://marvelapp.com/user-testing",
    "https://pickle.run/",
    "https://rev.webkul.design/kit/",
    "https://www.lume-pad.com/",
    "https://www.protopie.io/",
    "https://webflow.com/cms",
    "http://palette.site/",
    "https://tiiny.host/",
    "https://centige.com/",
    "https://www.hellolayers.com/",
    "https://glitch.com/",
    "https://sideprojects.net/",
    "https://www.hellolayers.com/flows",
    "https://figma.bothrs.com/",
    "https://bootify.io/",
    "https://www.useberry.com/",
    "https://mockup.photos/",
    "https://wireflow.co/",
    "https://www.framer.com/blog/posts/figma-importer/",
    "https://pasteapp.com/",
    "https://react-native-bucks.epicpxls.com/",
    "https://www.figma.com/community/file/887892609124245416",
    "https://getideaseed.com/",
    "https://entrepreneur-tools.zeef.com/",
    "https://www.ideo.com/",
    "https://dimmy.club/",
    "https://source-kit.com/",
    "https://themockup.club/",
    "https://www.flinto.com/",
    "https://www.vectary.com/",
    "https://www.gigster.com/",
    "https://www.framer.com/",
    "https://www.microsoft.com/en-us/microsoft-365/microsoft-whiteboard/digital-whiteboard-app",
    "https://fiftythree.com/think",
    "https://principleformac.com/posts/principle-four.html",
    "https://balapastudio.co/frontendlist/",
    "https://principleformac.com/posts/principle-three.html",
    "http://www.fontfit.com/",
    "https://marvelapp.com/features/handoff",
    "https://www.layer.com/messaging-design-kit",
    "https://codelabs.rocks/it-solutions-for-enterprises/mvp-development",
    "https://marvelapp.com/enterprise",
    "https://marvelapp.com/",
    "http://www.designwithnapkin.com/",
    "https://www.livemockups.com/",
    "https://www.atomic.io/",
    "https://www.tabidoo.cloud/",
    "https://www.gildform.com/",
    "https://www.codejoh.com/",
    "https://evie.undraw.co/",
    "https://mosaic.forpeople.studio/",
    "https://diyahq.com/",
    "https://www.reshuffle.com/",
    "https://creativemarket.com/ilyamiskov/1818461-Designer-Mockups-1.1",
    "https://dunnnk.com",
    "https://www.figma.com/organization/",
    "https://www.edisonplan.com/",
    "https://paperprototype.tools/",
    "https://mixedanalytics.com/api-connector/",
    "http://scheme.kkuistore.com/",
    "https://fundlifyapp.com/",
    "https://chrome.google.com/webstore/detail/aiml-papers-with-code-eve/aikkeehnlfpamidigaffhfmgbkdeheil",
    "https://zecoda.com/product",
    "http://critq.co/",
    "https://famous.co/",
    "https://webflow.com/grid",
    "https://www.flinto.com/",
    "https://scoops.io/",
    "https://uxflow.co/",
    "https://www.designermill.com/",
    "https://www.atomic.io/",
    "https://get.foundation/",
    "https://platforma.ws/",
    "https://www.kapwing.com/mobile-mockup",
    "https://community-canvas.org/",
    "https://seedproof.com/sprouts/",
    "https://platforma.ws/",
    "https://lickability.com/",
    "http://3d-transforms.webflow.com/",
    "https://www.invisionapp.com/cloud/prototype",
    "https://www.gigster.com/",
    "https://notivize.com/",
    "https://www.sourcify.com/factory-confirm-extension/",
    "https://marvelapp.com/features/prototyping/",
    "https://miro.com/",
    "https://vercel.com/blog/zeit-is-now-vercel",
    "https://gumroad.com/l/gradients",
    "https://theorem.js.org/",
    "https://files.design/",
    "https://thestempedia.com/product/pictoblox/pictoblox-mobile-app/",
    "https://principleformac.com/",
    "https://calmind.com/",
    "http://create.mobi/",
    "https://www.lightly.ai/",
    "https://jig.space/jigpro.html",
    "https://screenpeek.io/",
    "https://balsamiq.cloud/",
    "https://glitch.com/",
    "http://www.betatesta.xyz/",
    "https://sketch.expo.io/",
    "https://uisketcher.permitto-development.de/",
    "https://www.bitblox.me/",
    "https://prototypr.io/home/",
    "https://grapedrop.com/",
    "https://branch.io/deepviews/",
    "https://www.invisionapp.com/",
    "https://www.mycompiler.io/",
    "https://interface.market/superior/framework",
    "https://iosdesignkit.io/",
    "https://method.blue/",
    "https://appstarter.io/",
    "https://google.github.io/inspectorspacetime/",
    "https://www.glyphish.com/sounds/",
    "https://cabanadesignsystem.com/",
    "https://canvasflip.com",
    "http://www.trytailor.com/",
    "https://getrepresent.com/",
    "https://grupa.io/",
    "https://squareknot.com/",
    "https://vueds.com/",
    "https://dashboard.marvelapp.com/",
    "https://marvelapp.com/ios",
    "https://diffgram.com/",
    "http://ios10.greatsimple.io/",
    "https://www.uxpower.tools/",
    "https://codemagic.io/",
    "https://interface.market/",
    "https://ios.platforma.ws/",
    "https://m33labs.com/",
    "https://www.davinciapps.com/",
    "https://retest.app/",
    "https://www.webitapp.co/",
    "https://murkstom.com/",
    "https://www.atomic.io/",
    "https://www.bootsketch.com/",
    "https://preely.com/",
    "https://www.jexia.com/en/",
    "http://insprdesign.com/",
    "https://www.epicpxls.com/",
    "http://www.jasonclient.org/",
    "https://uxtricks.design/blogs/invision-studio/",
    "https://www.gridbox.io/",
    "https://iosdesignkit.io/ios-gui/",
    "https://grid.kkuistore.com/",
    "https://webflow.com/",
    "https://marvelapp.com/apps",
    "https://drzzle.app/",
    "http://moduleframework.com/",
    "https://userstory.co/",
    "https://creolabs.com/creo",
    "https://www.devicemockups.co/",
    "https://serfo.com/",
    "https://toolbird.com/index.php",
    "https://www.yttrium.app/",
    "https://mockadillo.com/",
    "https://www.uinotebook.com/",
    "https://www.taskade.com/",
    "https://marvelapp.com/integrations/sketch/",
    "https://www.ux-map.com/",
    "https://www.silk.co/importio",
    "https://principleformac.com/posts/principle-two.html",
    "https://getstream.io/activity-feeds/ui-kit/",
    "https://www.loom.com/",
    "https://sections.pixsellz.io/",
    "https://webcodesk.com/",
    "https://www.framer.com/templates/",
    "https://mockflow.com/",
    "https://marvelapp.com/embed-prototypes/",
    "https://proto.io/en/features/",
    "https://arc.dev/",
    "https://www.invisionapp.com/inside-design/tours-take-your-design-presentations-to-the-next-level/",
    "https://doly.io/",
    "http://www.tsterapp.com/",
    "https://www.sopost.com/",
    "https://www.glidr.io/",
    "https://blog.framer.com/framer-cloud-a-workflow-for-the-modern-designer-993d0727af2a",
    "https://balsamiq.com/wireframes/desktop/next/",
    "https://www.powermockup.com/",
    "http://elasticode.com/",
    "https://designmodo.com/slides/",
    "http://paperkit.net/",
    "https://akashj.pw/stylish",
    "https://apps.apple.com/us/app/checkman-the-mobile-app-design-checker/id1247361179",
    "https://www.kickstarter.com/projects/1055129788/gary-20-earphones-and-cables-automatic-organizer-0",
    "https://wbo.ophir.dev/",
    "https://principlerepo.com/",
    "https://materialdesignkit.com/",
    "https://www.superside.com/",
    "https://thestempedia.com/product/pictoblox/",
    "https://zenplates.co/",
    "https://nfnlabs.in/demonstrate/",
    "https://craftwork.design/downloads/hero-mobile-mockups/",
    "https://www.framer.com/blog/posts/introducing-the-page-tool/",
    "https://www.publisheet.com/",
    "https://getatmo.com",
    "http://www.pixate.com/",
    "https://glitch.com/",
    "https://startglobal.co/",
    "https://getstream.io/activity-feeds/ui-kit/",
    "https://play.google.com/store/apps/details?id=io.dabbleapp",
    "https://mindnode.com/",
    "https://protonapp.com",
    "https://prototypr.io/time-machine/",
    "https://www.atomic.io/sketch/",
    "https://marvelapp.com/examples/",
    "https://www.axure.com/",
    "https://apps.apple.com/us/app/annotate-by-driftt-capture/id994933038",
    "https://interface.market/rawson-design-system",
    "https://greysonevins.github.io/spotify-mosaic/#/login",
    "https://placeit.net/c/apparel",
    "http://www.wearebridge.co/ux-tools/Axure-MATERIAL-UI-Kit/home.html?",
    "https://mockupsjar.com/",
    "https://www.framer.com/support/using-framer/preview-window/",
    "https://www.gravitysketch.com/",
    "https://www.invisionapp.com/inside-design/design-resources/relate/",
    "https://gridprint.in/",
    "https://demo.eventornado.com/",
    "https://nativebase.io/sketch-template",
    "https://www.text2mindmap.com/",
    "https://www.skaffolder.com/",
    "https://uniot.io/",
    "https://apps.apple.com/app/apple-store/id329515634",
    "http://www.handsomeheaders.in/",
    "http://chriscastillo.me/gravitykits/wireframe",
    "https://www.dusthq.com/",
    "https://blog.glitch.com/post/you-got-this-zine-2",
    "https://timurnurutdinov.github.io/framerinventory/",
    "https://cominsoon.io/",
    "http://get.deekit.com/",
    "https://www.invisionapp.com/inside-design/invision-v5-chapter-1-better-faster-believe-it/",
    "https://rnpixel.com/",
    "https://www.mockupworld.co/",
    "http://www.buildwithgrid.com/",
    "https://www.deekit.com/",
    "https://gumroad.com/l/LAyuz",
    "http://knowlium.com/",
    "https://sitemod.io/chrome",
    "https://www.uxpin.com/studio/ebooks/guide-to-wireframing/",
    "https://sitechime.com/",
    "http://www.mocktotype.com/",
    "https://presentator.io/",
    "https://www.dailybitsof.com/courses/hacking-human-nature-for-good",
    "https://www.afternic.com/forsale/CANVASFLIP.COM?utm_source=TDFS&utm_medium=sn_affiliate_click&utm_campaign=TDFS_GoDaddy_DLS&traffic_type=TDFS&traffic_id=GoDaddy_DLS",
    "https://ionicsketch.com/",
    "https://keynotopia.com/",
    "https://www.baronfig.com/pages/mosaic",
    "http://whiteboard.drewwilson.com/",
    "http://field.folstudio.com/",
    "https://www.sketchize.com/",
    "https://makeprintable.com/",
    "https://tools.hackastory.com/",
    "https://www.toolabs.com/xdplugin/",
    "https://www.smallvictori.es/",
    "http://personapp.io/",
    "https://www.figma.com/community/plugin/829240879167560536/Khoj",
    "https://littleplaneapp.com/",
    "http://www.dragonera.com/",
    "https://prototypebrewery.io/",
    "https://blog.framerjs.com/posts/introducing-autocode-animation.html",
    "http://www.prototypingtools.design/",
    "https://material.io/",
    "https://mattermark.com/mobile/",
    "https://www.ux-app.com/",
    "https://producttactics.com/",
    "https://mockoon.com/",
    "https://3dsimo.com/",
    "http://directory.hardwareclub.co/",
    "https://blog.framer.com/facebook-sound-kit-now-in-framer-eb8a22f88bfd",
    "https://psd.photos/",
    "https://chrome.google.com/webstore/detail/tag-search-summarize/ppkllkgaohmlklimlbciggekhhcgcoda?authuser=0",
    "https://textografo.com/",
    "http://drawattention.co/",
    "https://torrenegra.medium.com/experimento-a-practical-product-management-framework-f533648d74b6",
    "https://www.juiceanalytics.com/",
    "https://apps.apple.com/app/protosketch-vector-graphic/id913091834",
    "https://github.com/IBAnimatable/IBAnimatable",
    "http://www.silk.co/googlesheetsync",
    "https://www.uxpin.com/",
    "https://artiosapp.com/",
    "http://webapptoapp.com/",
    "http://canvasflip.com",
    "https://apps.apple.com/us/app/looksee-vr/id1093268628",
    "http://desktopfruit.com/",
    "https://avocode.com/",
    "https://apps.apple.com/gb/app/adobe-comp-cc/id970725481",
    "http://stakes.github.io/Frameless/",
    "https://www.uxpin.com/",
    "https://whereto.ski/",
    "https://www.kickstarter.com/projects/1849283018/makerarm-the-first-robotic-arm-that-makes-anything",
    "https://www.tersasteam.com/",
    "https://www.invisionapp.com/inside-design/apple-watch-and-android-wear-prototyping-is-here/",
    "https://codeblox.io/",
    "https://mockitt.wondershare.com/mockingbot-is-upgraded-to-mockitt.html",
    "https://marvelapp.com/apple-watch-prototyping",
    "https://www.kickstarter.com/projects/eforge/eforge-3d-print-electronics-on-demand",
    "http://opstarts.com/",
    "https://marvelapp.com/blog/marvel-for-apple-tv-v2/",
    "https://prototyp.in/",
    "http://www.graspwise.com/",
    "http://www.smockups.com/",
    "http://prototypingtools.co/",
    "https://mockup.zone/",
    "https://www.justinmind.com/",
    "https://sketchapp.tv/",
    "https://www.kickstarter.com/projects/northlion/veego-stand-the-easy-ergonomic-companion-for-your",
    "https://www.invisionapp.com/inside-design/prototyping-with-photoshop-layer-comps/",
    "https://developer.apple.com/watchos/",
    "https://sedo.com/search/details/",
    "https://filestage.io/",
    "https://github.com/perrysmotors/photo-grid",
    "http://www.uimagnets.com/",
    "https://verifyapp.com/",
    "https://nex.tt/experiments",
    "https://spaces.proto.io/",
    "https://ecloniq.com/360-frases-e-mensagens-de-feliz-aniversario/",
    "https://taplytics.com/state-of-product-management-on-customer-feedback-study",
    "https://sculptura.app/",
    "https://eye.js.org/",
    "http://www.dunnnk.com/",
    "https://dscout.com/",
    "https://www.pricify.co/",
    "https://garage.fueled.com/",
    "https://www.dragoninnovation.com/",
    "http://imockps.com/",
    "https://concepts.app/en/",
    "http://getobsidian.io/",
    "https://userlook.co/",
    "https://marvelapp.com/android-app-builder",
    "https://www.swayyhammocks.com/insulated-hammock",
    "https://dan.concept.ly/",
    "http://snorecirclemask.letscrowdcreate.com/",
    "https://blog.voodoomfg.com/2018/02/20/large-format-3d-printing-service/",
    "https://www.aeolus-aero.com/",
    "http://fashion.folstudio.com/",
    "https://koncepted.com/",
    "https://fragments.pixsellz.io/",
    "https://www.mamp.info/en/windows/",
    "https://blog.hotgloo.com/",
    "https://vrbookreader.petrovicstefan.rs/cgi-sys/suspendedpage.cgi",
    "https://mupixa.com/",
    "https://www.mockable.io/",
    "https://concepts.app/en/",
    "https://appsource.microsoft.com/en-us/product/office/WA104381222",
    "https://arguiot.com/Descartes/",
    "https://www.paperlesspost.com/",
    "https://myzirui.com/",
    "https://ameyt.com/",
    "https://www.uxpin.com/uxpin-and-slack",
    "https://www.mockuptiger.com/",
    "https://www.cometchat.com/pro-ui-kits",
    "https://themmed.com/sketch-app-essentials/",
    "https://www.monkop.com/",
    "https://www.non-app.com/mockup/",
    "https://www.invisionapp.com/inside-design/craft-sync-photoshop/",
    "https://www.intuiface.com/",
    "https://thinkapps.com/apple-watch/",
    "https://www.breaker.audio/builders",
    "http://www.dtingsmart.com/",
    "https://ninjamock.com/",
    "http://obsrvapp.com/",
    "http://www.getquill.com/",
    "https://www.kickstarter.com/projects/voltera/voltera-your-circuit-board-prototyping-machine",
    "https://framerbook.com/",
    "http://www.tapcaseapp.com/",
    "https://fizzyo.github.io/",
    "https://paperproto.com/",
    "https://www.kickstarter.com/projects/chipsetter/chipsetter-one-a-desktop-pick-and-place-machine",
    "https://blog.prottapp.com/post/en/interaction-map-beta",
    "https://artefactshop.com/",
    "http://hellotechpros.com/gret-glyer-technology",
    "https://www.fluidui.com/",
    "https://crtv.st/",
    "https://userdefenders.com/podcast/022-the-little-details-can-make-a-big-difference-with-jordan-dobson/",
    "https://www.think-board.com/",
    "https://davidbruno.podbean.com/e/ep-11-hacking-corporate-innovation-makerzone",
    "https://userdefenders.com/podcast/024-seeing-the-invisible-with-francisco-inchauste/",
    "https://peterjavidpour.itch.io/musclecoach",
  ];

  return (
    <div>
      {links.map((link, i) => (
        <div>{`"${i}",`}</div>
      ))}
    </div>
  );
};

export default Links;
