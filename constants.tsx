
import { PortfolioItem, TattooItem } from './types';

export const BRANDING_DATA: PortfolioItem[] = [
  { 
    id: 1, 
    title: '사사물물', 
    description: '창작자의 서사를 중심으로 사물과 콘텐츠를 함께 설계하는 기획 레이블', 
    imageUrl: 'https://i.imgur.com/fq5L6ry.png' 
  },
  { 
    id: 2, 
    title: '리멜라', 
    description: '백반증 환우의 자신감 있는 일상을 위한 색소케어 솔루션 코스메틱 브랜드', 
    imageUrl: 'https://i.imgur.com/3wHPBSS.png' 
  },
  { 
    id: 3, 
    title: '괜찮아마을', 
    description: '지역 정착 프로그램과 여행 서비스를 제공하는 전라남도 목포의 청년마을 브랜드', 
    imageUrl: 'https://i.imgur.com/sUw7UD7.png' 
  },
  { 
    id: 4, 
    title: '갑자기', 
    description: '실험하고 변화하는 삶을 위하여 다양한 각도의 삶을 조명하는 콘텐츠 브랜드', 
    imageUrl: 'https://i.imgur.com/dfM7H8A.png' 
  },
  { 
    id: 5, 
    title: '가이딩라이트', 
    description: '동화 속 주인공의 다양성을 추구하며 재해석 아트워크를 생산하는 인클루시브 브랜드', 
    imageUrl: 'https://i.imgur.com/whkMDe3.png' 
  },
  { 
    id: 6, 
    title: '아미퓨어', 
    description: '화학 성분 없이 수용성 아미노산과 다당류 원료를 사용한 워리프리 코스메틱 브랜드', 
    imageUrl: 'https://i.imgur.com/ajetCjy.png' 
  },
];

export const PLANNING_DATA: PortfolioItem[] = [
  { 
    id: 1, 
    title: '코리빙 브랜드 로컬스티치 〈오리지널스 통영〉', 
    description: '전통 장인과 신진 창작자의 교류 프로그램 기획 및 운영', 
    imageUrl: 'https://i.imgur.com/feGtkrZ.jpeg',
    imageUrls: [
      'https://i.imgur.com/feGtkrZ.jpeg',
      'https://i.imgur.com/tY3Uv2s.jpeg',
      'https://i.imgur.com/9llRb8Q.jpeg',
      'https://i.imgur.com/kxq2f0j.jpeg'
    ]
  },
  { 
    id: 2, 
    title: '청년마을 브랜드 〈일간·주간·월간 괜찮아마을〉', 
    description: '지역살이를 희망하는 청년을 위한 여행 프로그램 기획 및 운영', 
    imageUrl: 'https://i.imgur.com/ZkoB89C.jpeg',
    imageUrls: [
      'https://i.imgur.com/ZkoB89C.jpeg',
      'https://i.imgur.com/32ue0DZ.jpeg',
      'https://i.imgur.com/3OQoU1F.jpeg',
      'https://i.imgur.com/DM7FPIZ.jpeg'
    ]
  },
  { 
    id: 3, 
    title: 'KMI 지식경험 공유 컨퍼런스 〈갑자기 섬바다〉', 
    description: '청년 창업가를 위한 6주 온라인 강연 기획 및 운영', 
    imageUrl: 'https://i.imgur.com/I5oQT13.png',
    imageUrls: [
      'https://i.imgur.com/I5oQT13.png',
      'https://i.imgur.com/MXP10Eo.png'
    ]
  },
  { 
    id: 4, 
    title: '식음료 팝업 스토어 〈오묵〉', 
    description: '목포 어묵의 인지도 확대를 위한 팝업 공간 기획 및 운영', 
    imageUrl: 'https://i.imgur.com/1wmkCut.jpeg',
    imageUrls: [
      'https://i.imgur.com/1wmkCut.jpeg',
      'https://i.imgur.com/R8NvGIX.jpeg',
      'https://i.imgur.com/N68z0aR.jpeg',
      'https://i.imgur.com/37wCBMg.jpeg'
    ]
  },
];

export const PROJECTS_DATA: PortfolioItem[] = [
  { id: 1, title: '자연이 머물다 가는 곳 〈돌집〉', subtitle: 'Tumblbug Funding', description: '제품 기획 및 펀딩·홍보(SNS) 콘텐츠 기획 및 제작', imageUrl: 'https://i.imgur.com/B2BOgfe.jpeg' },
  { id: 2, title: 'BBC가 주목한 지역살이 〈괜찮아마을〉', subtitle: 'Wadiz Funding', description: '지역살이 프로그램 펀딩·홍보(SNS) 콘텐츠 기획 및 제작', imageUrl: 'https://i.imgur.com/O2MgEaP.jpeg' },
  { id: 3, title: '원스톱 인테리어 플랫폼 〈오늘의집〉', subtitle: 'Curation Exhibition', description: '1인 가구를 위한 큐레이션 기획전 운영·신규 브랜드 소싱', imageUrl: 'https://i.imgur.com/OrI8DfH.jpeg' },
  { id: 4, title: '스테이 〈카세트플레이어〉', subtitle: 'Space Decorating', description: '레트로 컨셉의 스테이 브랜드 기획 및 공간 조성', imageUrl: 'https://i.imgur.com/50Co3vR.jpeg' },
  { id: 5, title: '브랜드 콘텐츠 〈괜찮아마을에서 괜찮아졌다〉', subtitle: 'Brand Film', description: '청년마을 홍보를 위한 필름 및 티저 영상 기획', imageUrl: 'https://i.imgur.com/7ctuDUH.png' },
  { id: 6, title: '아트프린트 컬렉션 〈오픈에디션〉', subtitle: 'Brand Contents', description: '신규 상업 공간 인터뷰 콘텐츠 기획 및 제작', imageUrl: 'https://i.imgur.com/ZyTYp6N.png' },
];

export const TATTOO_DATA: TattooItem[] = [
  { id: 1, imageUrl: 'https://i.imgur.com/jOhA0Xm.jpeg' },
  { id: 2, imageUrl: 'https://i.imgur.com/9Ix8Jth.jpeg' },
  { id: 3, imageUrl: 'https://i.imgur.com/b7VHB6z.jpeg' },
  { id: 4, imageUrl: 'https://i.imgur.com/Apayuc1.jpeg' },
];

export const CONTACT_INFO = {
  headline: "새로운 연결과 소통을 기다립니다.",
  email: "bokeumche@gmail.com",
  socials: [
    { name: "click! (download)", url: "https://drive.google.com/file/d/1aOMdbj0tzjmP3ExSzoIRuXLWpefwdWJG/view?usp=sharing" }
  ],
  copyright: "© 2026 채보금. All rights reserved."
};

export const SPACING_CONFIG = {
  branding: {
    titleGap: 1,
    imageToTextGap: 1,
    indicatorGap: 4
  },
  planning: {
    titleGap: 6,
    itemGap: 12,
    imageToTitleGap: 4,
    titleToDescGap: 1
  },
  projects: {
    titleGap: 6,
    itemGap: 12,
    imageToTitleGap: 4,
    titleToDescGap: 1
  },
  tattoo: {
    titleGap: 6,
    itemGap: 4
  },
  contact: {
    titleGap: 2
  }
};
