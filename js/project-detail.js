"use strict";

const projects = {
  "wood-and-light-residence": {
    title: "WOOD AND LIGHT RESIDENCE",
    location: "Private Residence — Tokyo, Japan",
    lead: "既存の和の意匠を残しながら、素材の色合いと光の入り方を整えた架空の住宅改修です。",
    hero: "interior-01.png",
    images: ["interior-01.png"],
    copy: "障子や木部が持つ落ち着きを活かし、赤土を思わせる壁面と既存収納を組み合わせました。光の入り方や生活動線を整え、日常の中で自然にくつろげる空間を目指しています。"
  },
  "retail-interior": {
    title: "RETAIL TIMBER INTERIOR",
    location: "Retail Space — Tokyo, Japan",
    lead: "本と道具に囲まれて静かに仕事ができる、小さな書斎を想定した架空の内装計画です。",
    hero: "interior-02.png",
    images: ["interior-02.png"],
    copy: "既存の書棚と木部を活かし、限られた面積の中に落ち着いて過ごせる場所を整えました。天井から差し込む光が木目の表情を引き出すよう、内装の開口と照明の位置を調整しています。"
  },
  "interior-with-sound": {
    title: "INTERIOR WITH SOUND",
    location: "Listening Residence — Kanagawa, Japan",
    lead: "既存の木部を中心に、光と余白のバランスを整えた架空のリビング空間です。",
    hero: "interior-03.png",
    images: ["interior-03.png"],
    copy: "無垢材のサイドボードを空間の基準として、椅子や照明、植物が穏やかにつながる配置を考えました。素材の経年変化を楽しみながら、音楽や読書を落ち着いて過ごせる住空間を想定しています。"
  },
  "material-led-space": {
    title: "MATERIAL-LED SPACE",
    location: "Residential Interior — Tokyo, Japan",
    lead: "An interior study developed through the grain, tone, weight, and ageing of natural materials.",
    hero: "ChatGPT Image 2026年6月24日 16_56_35.png",
    images: ["topwork01.png", "work-interior.webp"],
    copy: "Material decisions were made in relation to touch, light, maintenance, and the atmosphere that emerges over time. The space remains restrained so that timber and crafted details can carry its character."
  },
  "wood-speaker-01": {
    title: "FLOOR SPEAKER 01",
    location: "OTOA Studio — Tokyo, Japan",
    lead: "広いリビングでも低音から高音まで自然に届くよう設計した、架空のフロア型スピーカーです。",
    hero: "speaker-01.png",
    images: ["speaker-01.png"],
    copy: "オーク材の縦方向の木目を活かし、住空間へ静かになじむ端正な箱型に仕上げました。設置する部屋の広さや壁との距離を想定し、音の広がりと輪郭のバランスを調整しています。"
  },
  "speaker-in-space": {
    title: "SPEAKER IN SPACE",
    location: "Private Listening Room — Tokyo, Japan",
    lead: "A speaker installation developed in direct response to the materials and atmosphere of the room.",
    hero: "ヒーローセクション02.png",
    images: ["hero-bg.webp.png", "ヒーローセクション02.png"],
    copy: "The speaker position and surrounding architecture were adjusted together to create a balanced listening environment without making the room feel like a conventional audio showroom."
  },
  "ototo-exhibition": {
    title: "OTOA EXHIBITION",
    location: "Exhibition Space — Tokyo, Japan",
    lead: "An installation presenting handcrafted sound objects within a temporary spatial composition.",
    hero: "11D79634-4893-41DF-AB45-A3CD9996A6FF.JPG",
    images: ["43CF8457-3048-48CD-8A2D-0B1BA6E02F84.JPG", "11D79634-4893-41DF-AB45-A3CD9996A6FF.JPG"],
    copy: "Sound, plants, timber, and suspended elements were arranged to invite visitors to move, listen, and encounter the speakers from changing distances."
  },
  "sound-object": {
    title: "SOUND OBJECT",
    location: "Installation — Tokyo, Japan",
    lead: "A suspended sound object exploring the boundary between speaker and spatial installation.",
    hero: "43CF8457-3048-48CD-8A2D-0B1BA6E02F84.JPG",
    images: ["11D79634-4893-41DF-AB45-A3CD9996A6FF.JPG", "43CF8457-3048-48CD-8A2D-0B1BA6E02F84.JPG"],
    copy: "The project treats sound as a material that shapes how the surrounding space is perceived. Its physical presence remains simple while its acoustic character changes the atmosphere around it."
  },
  "wood-speaker-02": {
    title: "COMPACT SPEAKER 01",
    location: "OTOA Studio — Tokyo, Japan",
    lead: "棚やデスクにも置ける大きさで、近い距離から心地よく聴ける架空の小型スピーカーです。",
    hero: "speaker-02.png",
    images: ["speaker-02.png"],
    copy: "角に丸みを持たせたオーク材の筐体に、濃色のちぎりをアクセントとして加えました。小さな音量でも声や楽器の質感が伝わるよう、箱の容量と開口部を細かく調整しています。"
  },
  "wood-audio-console": {
    title: "WOOD AUDIO CONSOLE",
    location: "OTOA Studio — Tokyo, Japan",
    lead: "音を聴くための機能を、暮らしの中に置ける静かな佇まいへまとめた架空のオーディオコンソールです。",
    hero: "speaker-03.png",
    images: ["speaker-03.png"],
    copy: "スピーカー、入力切替、音量調整の機能を一つの木製キャビネットに収めました。操作部分を必要最小限に整理し、音響機器としてだけでなく、日常の景色になじむ道具としてデザインしています。"
  },
  "making-process": {
    title: "MAKING PROCESS",
    location: "OTOA Workshop — Tokyo, Japan",
    lead: "A record of the making process behind OTOA’s handcrafted wooden speakers.",
    hero: "ChatGPT Image 2026年6月25日 17_50_49 (1).png",
    images: ["ChatGPT Image 2026年6月25日 17_50_52 (5).png", "ChatGPT Image 2026年6月25日 17_50_57 (8).png"],
    copy: "Material selection, cutting, assembly, sanding, tuning, and finishing are carried out as one continuous process. Small adjustments made by hand determine both the final sound and the presence of the object."
  }
};

const projectKey = new URLSearchParams(window.location.search).get("project");
const project = projects[projectKey] || projects["wood-and-light-residence"];
const assetPath = "../../assets/";

document.title = `${project.title} — OTOA`;
document.querySelector("[data-project-title]").textContent = project.title;
document.querySelector("[data-project-location]").textContent = project.location;
document.querySelector("[data-project-lead]").textContent = project.lead;
document.querySelector("[data-project-copy]").textContent = project.copy;

const hero = document.querySelector("[data-project-hero]");
hero.src = `${assetPath}${project.hero}`;
hero.alt = project.title;

const gallery = document.querySelector("[data-project-gallery]");
project.images.forEach((imageName, index) => {
  const image = document.createElement("img");
  image.className = "project-detail-image";
  image.src = `${assetPath}${imageName}`;
  image.alt = `${project.title} — view ${index + 2}`;
  gallery.appendChild(image);
});
