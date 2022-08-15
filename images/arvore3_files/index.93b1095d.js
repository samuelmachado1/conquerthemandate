!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequire3642;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){let o=i[e];delete i[e];let r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire3642=o);var r;r=()=>{try{return localStorage.setItem("test","test"),localStorage.removeItem("test","test"),sessionStorage.setItem("test","test"),sessionStorage.removeItem("test","test"),!0}catch(e){return!1}};var a,n=s(o("4tvrU")),l=s(o("2z1tS"));function s(e){return e&&e.__esModule?e:{default:e}}var c,u,d=o("17NnS"),g=o("5PTBZ");const{Promise:p}=TrelloPowerUp,m=async e=>{let t;try{t=await e.get("member","private","refresh")}catch(e){window.Sentry.captureException(e)}if(!t)throw new g.Unauthorized("Load Secret Failure");const i=await fetch("./refresh",{method:"POST",headers:{Authorization:`bearer ${t}`}});if(!i.ok)throw e.remove("member","private","refresh"),new g.Unauthorized("Refresh Failure");const o=await i.json();return sessionStorage.setItem("access_token",o.access_token),sessionStorage.setItem("id_token",o.id_token),sessionStorage.setItem("token_expiry",Date.now()+1e3*o.expires_in),o.access_token};u=e=>p.try((async()=>{let t;try{t=sessionStorage.getItem("access_token")}catch(e){throw new g.Unauthorized("SessionStorage Access Denied")}if(t){const i=sessionStorage.getItem("token_expiry");return Date.now()>parseInt(i,10)?m(e):t}return m(e)}));var h,w;g=o("5PTBZ");w=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],o.register("3HGnt",(function(e,t){"use strict";e.exports=["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.readonly","https://www.googleapis.com/auth/presentations"]}));const f=o("3HGnt").join(" "),y=TrelloPowerUp.Promise;window.gapiReady=null,h=new y((e=>{window.gapiReady=()=>{gapi.load("client:auth2",(()=>{gapi.client.init({clientId:"122616814543-hsdqkh69lmt11uou701693iq4k6tcu61.apps.googleusercontent.com",discoveryDocs:w,scope:f}).then((()=>{e(gapi)}),(()=>{}))})),window.gapiReady=null}}));const{Promise:v}=TrelloPowerUp;c=e=>v.try((async()=>{const t=await h,i=await u(e);if(!i)throw new g.Unauthorized;return t.client.setToken({access_token:i}),t}));g=o("5PTBZ");var z=o("4Wgud");l.default.addPlugin(n.default);const{Promise:_}=TrelloPowerUp;a=(e,t,i)=>_.try((()=>{const o=z.parse(t);return o.isGoogleDriveUrl?_.try((async()=>{if(!o.isFile&&!o.isFolder)return null;const t=l.default.get(o.id);if(t)return t;const i=await c(e);return(await d(i.client.drive.files.get({fields:"kind,id,name,teamDriveId,mimeType,trashed,explicitlyTrashed,webContentLink,webViewLink,iconLink,hasThumbnail,thumbnailLink,createdTime,modifiedTime,lastModifyingUser,size",fileId:o.id,supportsTeamDrives:!0}))).result})).then((e=>{if(null==e)return null;l.default.set(e.id,e,Date.now()+3e5);const t={image:{url:e.thumbnailLink,logo:!e.thumbnailLink,y:"top",size:"contain"},title:e.name,contentLink:e.webContentLink,size:e.size,created:Date.parse(e.createdTime),modified:Date.parse(e.modifiedTime),description:e.description,mimeType:e.mimeType,isFolder:o.isFolder};return e.lastModifyingUser&&e.lastModifyingUser.displayName&&(t.modifiedBy=e.lastModifyingUser.displayName),t})).catch(g.Unauthorized,(()=>({image:{url:"./images/icon.svg",logo:!0},title:i||t,uninitialized:!0}))).catch((()=>{throw e.NotHandled()})):null}));var b;g=o("5PTBZ"),z=o("4Wgud");b={defaultLocale:"en",supportedLocales:["cs","de","en","es","fi","fr","hu","it","ja","nb","nl","pl","pt-BR","ru","sv","th","tr","uk","vi","zh-Hans","zh-Hant"],resourceUrl:"./strings/6c60888e93eb/{locale}.json"};var T;T=e=>{const t=[" Bytes"," KB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];for(let i=1;i<t.length;i++)if(e<Math.pow(1024,i))return Math.round(e/Math.pow(1024,i-1)*100)/100+t[i-1];return e};const{Promise:k}=TrelloPowerUp,U="./images/icon.svg";TrelloPowerUp.initialize({"attachment-sections":(e,t)=>{if(!e.isMemberSignedIn())return[];const i=t.entries.filter((e=>z.isFolder(e.url)));return 0===i.length?[]:k.map(i,(t=>{const i=a(e,t.url,t.name).get("title").catch((()=>t.name||e.localizeKey("google_drive_folder")));return{id:t.id,claimed:[t],icon:U,title:()=>i,content:{type:"iframe",url:e.signUrl("./folder.html",{url:t.url})}}}))},"attachment-thumbnail":(e,t)=>k.try((async()=>{if(!e.isMemberSignedIn())throw e.NotHandled();let i;try{i=await a(e,t.url,t.name)}catch(e){}if(null==i)throw e.NotHandled();if(i.url=t.url,i.openText=e.localizeKey("open_in_google_drive"),i.image.url||(i.image.url=U),i.uninitialized){if(!r())throw e.NotHandled();i.initialize={type:"iframe",url:e.signUrl(TrelloPowerUp.util.relativeUrl("authorize-link.html"))}}return i})),"board-buttons":e=>[{icon:U,text:e.localizeKey("google_drive"),callback:e=>{const t=e=>e.popup({title:e.localizeKey("google_drive"),items:[{text:e.localizeKey("create_slides_presentation"),callback:e=>e.popup({title:e.localizeKey("generating_presentation"),url:"create-presentation.html",height:40})}]});return u(e).then((()=>t(e))).catch(g.Unauthorized,(()=>e.popup({title:e.localizeKey("authorize"),url:"authorize.html",callback:e=>t(e)})))}}],"card-buttons":e=>e.memberCanWriteToModel("card")?[{icon:U,text:e.localizeKey("google_drive"),callback:e=>e.popup({title:e.localizeKey("google_drive"),url:"card-menu.html",height:96})}]:[],"format-url":async(e,t)=>{if(!z.parse(t.url).isGoogleDriveUrl)throw e.NotHandled("Not a formattable URL");const i=await a(e,t.url);if(!i)throw e.NotHandled("Error retrieving data from URL");const{title:o,image:r,contentLink:n,size:l,mimeType:s,uninitialized:c,isFolder:u}=i;if(c)return{icon:U,text:t.url};if(u)return{icon:U,text:o,subtext:e.localizeKey("google_drive_folder"),...r.url&&{thumbnail:r.url}};const d=n&&!["application/vnd.google-apps.document"].includes(s);return{icon:U,text:o,subtext:((t,i)=>{if(l)return T(l);if(i.startsWith("application/vnd.google-apps."))switch(i.replace("application/vnd.google-apps.","")){case"document":return e.localizeKey("google_docs");case"spreadsheet":return e.localizeKey("google_sheets");case"presentation":return e.localizeKey("google_slides");case"form":return e.localizeKey("google_forms");case"drawing":return e.localizeKey("google_drawings");case"map":return e.localizeKey("google_my_maps");case"site":return e.localizeKey("google_sites");case"script":return e.localizeKey("google_apps_script");case"jam":return e.localizeKey("google_jamboard");default:return""}return""})(0,s),...r.url&&{thumbnail:r.url},...d&&{actions:[{text:e.localizeKey("download"),url:n}]}}},"remove-data":async e=>{const t=await u(e);await fetch(`https://oauth2.googleapis.com/revoke?token=${t}`,{method:"POST"}),sessionStorage.clear()},"show-settings":e=>e.popup({title:e.localizeKey("google_drive"),url:"auth-status.html"})},{targetOrigin:"https://trello.com",localization:b,Sentry:window.Sentry})}();
//# sourceMappingURL=index.93b1095d.js.map