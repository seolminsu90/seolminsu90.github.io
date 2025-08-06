const leftSvgHtml = "◀";
const rightSvgHtml = "▶";
const skills = {
    aws: "aws.png",
    conf: "conf.png",
    es: "es.png",
    git: "git.png",
    java: "java.jpg",
    jenkins: "jenkins.jpg",
    jira: "jira.png",
    kibara: "kibana.png",
    mariadb: "mariadb.png",
    mongo: "mongo.png",
    mssql: "mssql.jpg",
    mysql: "mysql.jpg",
    php: "php.jpg",
    rabbit: "rabbit.png",
    redis: "redis.png",
    scouter: "scouter.png",
    slack: "slack.png",
    spring: "spring.jpg",
    vue: "vue.png",
    web: "web.png",
};
// 데이터 설정
var careerData = [
    {
        src: "img/6.png",
        title: "스마일게이트알피지",
        level: "책임/팀원",
        start: "2023-10-23",
        end: getCurrentDateText(),
        work: "내부 서비스용 공용 GW/인증/봇 등, 다양한 사내 개발 지원 툴 개발(게임 데이터 버전 관리, 인하우스 앱 다운로드 센터, 업무현황 관리/통계 툴, 오토 테스트 빌더/통계 뷰어, 디바이스 관리 툴, 빌드관리툴 등)",
        tags: ["java", "spring", "web", "vuejs", "mysql", "jenkins", "gateway", "Electron", "Docker"],
    },
    {
        src: "img/4.jpg",
        title: "넷마블네오",
        level: "사원/팀원",
        start: "2022-05-30",
        end: "2023-10-20",
        work: "게임 운영툴, BI 시각화 도구, 기획데이터 DB화 툴 개발. 게임 서버 개발 지원",
        tags: ["java", "spring", "web", "vuejs", "mysql", "jenkins", ".Net-Core", "Docker"],
    },
    {
        src: "img/3.png",
        title: "엔픽셀",
        level: "사원/팀원",
        start: "2020-03-09",
        end: "2022-05-27",
        work: "게임 운영툴, 번역툴, 로그 수집기, 기획데이터 관리툴, 게임 커뮤니티, 알림 서비스 개발 등",
        tags: ["java", "spring", "web", "mariadb", "mysql", "mssql", "JPA", "Mybatis", "jenkins", "elasticsearch"],
    },
    {
        src: "img/2.jpg",
        title: "아이지에스",
        level: "사원/팀원",
        start: "2018-10-29",
        end: "2020-02-28",
        work: "커뮤니티 통합 운영 툴, 게시글 크롤러 개발, 기존 커뮤니티 대문 페이지 리뉴얼 등",
        tags: ["java", "spring", "web", "vuejs", "mysql", "JPA", "jenkins", "elasticsearch"],
    },
    {
        src: "img/1.jpg",
        title: "오엠에이코리아",
        level: "사원/팀장",
        start: "2014-09-30",
        end: "2018-10-25",
        work: "캐쥬얼 게임 서버 개발, 운영툴, 빌링, 푸시, 인증, 통계 사이트 개발, SNS 및 메신저, 앱/웹 백엔드 개발",
        tags: ["java", "spring", "thymeleaf", "web", "mysql", "Mybatis", "AWS", "mongoDB"],
    },
    {
        src: "img/5.png",
        title: "네오패드",
        level: "사원/팀장",
        start: "2013-11-18",
        end: "2014-09-19",
        work: "모바일 홈페이지 빌더 플랫폼 개발, 하이브리드 앱 개발",
        tags: ["nodejs", "web", "mysql"],
    },
];

var careerTextData = [
    {
        start: "2023-10",
        end: getCurrentDateText(true),
        content: [
            "<b>스마일게이트알피지 </b>입사",
            "게임데이터 버전 관리&DIFF 툴 개발",
            "오토테스트 빌드/모니터링/통계 툴 개발",
            "업무 현황 대시보드 개발",
            "빌드 관리 및 트리거 툴 개발",
            "디바이스 관리 툴 개발",
            "내부 개발 앱 다운로드 센터 개발",
            "Window Electron App 개발",
            "Jenkins 이용한 CI/CD 구축"
        ],
    },
    {
        start: "2022-05",
        end: "2023-10",
        content: [
            "<b>넷마블 네오 </b>입사",
            "제 2 의나라 게임 운영툴 개발",
            "리니지 2 레볼루션 게임 운영툴 개발",
            "킹오파 아레나 게임 운영툴 런칭 모델 구축",
            "기획데이터 관리 툴 개발",
            "BI 데이터 시각화 툴 개발",
            "신규 게임 프로젝트 서버 개발 지원",
            "Jenkins 이용한 CI/CD 구축"
        ],
    },
    {
        start: "2020-03",
        end: "2022-05",
        content: [
            "<b>엔픽셀 </b>입사",
            "그랑사가 게임 GM 운영 툴 개발",
            "그랑사가 게임 QA 지원 툴 개발",
            "그랑사가 게임 이벤트 관리 툴 개발",
            "그랑사가 게임 커뮤니티 서비스 개발",
            "게임 데이터 번역 툴 개발",
            "게임 기획 DB 데이터 변동 이력 추적 및 관리 툴 개발",
            "Notification 서비스 개발(메일, 슬랙 등 전사에서 사용하는 알림 채널)",
            "인앱결제 빌링 관리 툴 개발",
            "게임 로그 및 크래시 리포트 수집기 및 이슈 관리 툴 개발",
            "Gitlab, Jenkins 이용한 CI/CD 구축",
        ],
    },
    {
        start: "2019-02",
        end: "2020-02",
        content: ["넷마블 게임 운영 지원 툴 커뮤니티 관리, 이슈 공유 파트 개발", "넷마블 게임 운영 지원 툴 Selenium 기반 크롤링 모듈 개발 (각종 게임 커뮤니티 게시글 수집)"],
    },
    {
        start: "2018-10",
        end: "2019-02",
        content: ["<b>아이지에스 </b>입사", "넷마블 게임 글로벌 커뮤니티 모비럼 리뉴얼 작업", "Gitlab, Runner 이용한 CI/CD 구축"],
    },
    {
        start: "2018-04",
        end: "2018-10",
        content: ["좀비파우 퍼즐 게임 개발 (DB 설계, 웹 서버 API, 게임 운영툴, 인증, 빌링, 이벤트 등 플랫폼 기능 개발)", "퍼드럭 미국 병원 환자 대상 약 복용 체크 앱 관리 운영툴 페이지, API 서버 및 DB, 웹 담당"],
    },
    {
        start: "2017-07",
        end: "2018-03",
        content: [
            "컬러어스 글로벌 컬러링 북 게임 글로벌 버전 개발 및 출시",
            "장례도우미 장례 도우미 서비스 하이브리드 앱 서비스 재 구축, DB, REST API 개발",
            "파워피싱 모바일 캐쥬얼 낚시 게임 개발 (DB 설계, 웹 서버 API, 게임 운영툴, 인증, 빌링, 이벤트 등 플랫폼 기능 개발)",
            "공통 게임 로그 기능 개발 (RabbitMQ, Elasticsearch 기반)",
        ],
    },
    {
        start: "2016-08",
        end: "2017-06",
        content: [
            "HALLPASS 미국 학생 대상 SNS 서비스 개발 (DB, REST API, 웹 페이지 개발)",
            "컬러어스 for Kakao 컬러링 북 게임 개발 (DB 설계, 웹 서버 API, 게임 운영툴, 인증, 빌링, 이벤트 등 플랫폼 기능 개발)",
            "위컬러 컬러링 북 게임 중국 서비스 버전 개발 및 출시",
            "중국 텐센트 클라우드 및 AWS 기반의 환경 구축(Beanstalk, Route, LB, S3, EC2)",
        ],
    },
    {
        start: "2016-01",
        end: "2016-05",
        content: ["씽크매스 웹 이러닝 서비스 DB, REST API 개발", "코리아그랜드세일 해외 관광객 대상 면세점 쿠폰 발급 앱 서비스 데이터베이스, REST API, 운영툴 개발"],
    },
    {
        start: "2015-07",
        end: "2015-12",
        content: ["챗그랩 SNS 웹/앱 서비스 개발 (DB 구축, REST API, 웹 개발 담당)", "현대 글로비스 사내 물류 CCTV 관제 시스템 웹 서비스 개발", "슈퍼스타 게임즈 모바일 게임 메인 페이지/이벤트 웹 페이지 개발"],
    },
    {
        start: "2014-09",
        end: "2015-06",
        content: [
            "<b>오엠에이코리아 </b>입사",
            "썸톡 소개팅 어플리케이션 관리자 운영툴 페이지 개발",
            "Wehub 그룹채팅 어플리케이션 개발 (REST API, DB 구축, 웹 개발담당)",
            "보라툰 웹툰 사이트 개발 (웹, 웹앱 및 PG연동 개발 및 모바일 클라이언트 REST API 담당)",
        ],
    },
    {
        start: "2013-11",
        end: "2014-09",
        content: ["<b>네오패드 </b>입사", "나비야 개인용 모바일 홈페이지 제작 빌더 플랫폼 웹/하이브리드 앱 개발"],
    },
];

var portpolioData = [
    {
        src: ["img/noimage.jpg"],
        title: "개발실 지원 내부 툴 개발",
        start: "2023-10",
        end: getCurrentDateText(true),
        company: "스마일게이트알피지",
        desc: "내부 앱 다운로드 센터, 오토테스트 빌드/모니터/통계 툴, 게임 데이터 버전 관리 툴, 디바이스 관리툴, CICD 및 빌드 관리툴, 내부 업무현황 대시보드 등 개발실 내의 니즈를 충족하는 다양한 웹 툴 개발.",
        work: ["웹 백엔드 및 프론트엔드 개발", "서비스 DB 설계", "Wiki연동"],
        tag: ["Java", "Spring Boot", "Vuejs", "Nodejs", "Mysql", "Jenkins"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "BI 시각화 대시보드",
        start: "2022-12",
        end: "2023-10",
        company: "넷마블네오",
        desc: "게임 BI 지표들을 차트로 시각화하고 대시보드를 구성하는 툴로, <b>Tableau나, Kibana, Garapana</b>가 참조되었고 <b>Apexchart</b>를 사용하여 다양한 차트를 구현하고, 개인화된 대시보드 및 여러 데이터를 연동할 수 있도록 개발됨.",
        work: ["웹 프론트엔드", "서비스 DB 설계", "지표 데이터 백엔드 연동"],
        tag: ["Vuejs", ".Net", "ApexChart", "Mysql"],
    },
    {
        src: ["img/games/j.jpg"],
        title: "제2의나라 게임 운영툴",
        start: "2022-05",
        end: "2023-10",
        company: "넷마블네오",
        desc: "<b>제2의 나라</b> 운영툴의 국내 및 글로벌 환경의 백엔드 및 프론트엔드 개발을 담당함.",
        work: ["백엔드 API 및 프론트엔드", "DB 설계", "게임 서버 API 연동", "CI/CD"],
        tag: ["Java", "Spring", "Vuejs", "Mysql", "Jenkins", "Mybatis", "Redis"],
    },
    {
        src: ["img/games/kf.png"],
        title: "킹오파 아레나 운영툴",
        start: "2022-08-30",
        end: "2022-09-30",
        company: "넷마블네오",
        desc: "<b>킹오브파이터 아레나</b> 운영툴의 코어 설계 및 개발부터 런칭까지의 컨텐츠 개발을 담당함.",
        work: ["공용 운영툴 코어 프로젝트 설계", "공용 라이브러리 개발", "컨텐츠 개발"],
        tag: ["Java", "Spring Boot", "Vuejs", "Mssql", "JPA", "Mybatis", "Redis"],
    },
    {
        src: ["img/games/l.jpg"],
        title: "리니지2 레볼루션 운영툴",
        start: "2022-05-30",
        end: "2022-08-30",
        company: "넷마블네오",
        desc: "<b>리니지2 레볼루션</b> 운영툴의 국내 및 글로벌 환경의 백엔드 및 프론트엔드 개발을 담당함.",
        work: ["백엔드 API", "프론트엔드", "DB 스키마 및 구조 설계", "게임 서버 API 연동"],
        tag: ["PHP", "Vuejs", "Mysql"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "통합 운영 플랫폼 웹",
        start: "2020-03",
        end: "2022-05",
        company: "엔픽셀",
        desc: "운영툴부터 로그 관리 추적, 번역툴, 이벤트나 커뮤니티 관리 등 게임 운영에 필요한 플랫폼 전반적인 기능이 통합된 프로젝트로 여러개의 서비스로 구성된 MSA를 지향한 구조로 개발됨.",
        work: ["그랑사가 GM/QA 운영툴", "그랑사가 번역툴, 이벤트 관리", "그랑사가 포럼 운영툴", "게임 기획 데이터 관리/적용", "게임 크래시 조회/처리", "게임 로그 수집기 및 게임 로그 조회 툴", "공용 슬랙 알림 서비스", "스카우터 슬랙 플러그인"],
        tag: ["Java", "Spring Boot", "Spring Cloud", "Mssql", "Mysql", "JPA", "Mybatis", "Jenkins", "Redis"],
    },
    {
        src: ["img/npixel/forum.png"],
        title: "그랑사가 포럼",
        start: "2020-03",
        end: "2022-05",
        company: "엔픽셀",
        desc: "그랑사가 게임 운영 커뮤니티(https://forum.npixel.co.kr/gransaga)로 일반적인 커뮤니티와 구조적으로 동일함",
        work: ["커뮤니티 운영 API 개발", "커뮤니티 DB 구조 설계", "기타 백엔드 API 기능 개발", "Kafka 연동(게시글 ES 동기화)"],
        tag: ["Java", "Spring Boot", "Mssql", "JPA", "Jenkins", "Redis", "Elasticsearch", "kafka"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "TOP 운영 지원 툴",
        start: "2019-02",
        end: "2020-02",
        company: "아이지에스",
        desc: "운영/CM 관리자들이 효율적으로 커뮤니티 대응을 할 수 있도록 하는 <b>운영 지원 툴</b>로 내부의 여러가지 시스템 중 관리자들끼리 커뮤니티 상 게임의 이슈 등을 파악하여 서로 <b>이슈공유 및 이슈대응 하는 시스템</b>과, 전체 커뮤니티(카페, 인벤 등 여러 게임 커뮤니티) 통합해서 관리할 수 있도록 관리 페이지 및 Selenium기반의 <b>크롤러</b>를 개발함",
        work: ["웹 백엔드 API 및 프론트엔드", "DB 설계", "운영 이슈공유 페이지", "게임 커뮤니티 관리 페이지", "게임 커뮤니티 크롤러", "크롤러 상태 모니터링 도구"],
        tag: ["Java", "Spring Boot", "Vuejs", "Mysql", "JPA", "Selenium", "RabbitMQ", "Grafana", "Kibana"],
    },
    {
        src: ["img/igs/mobirum/1.png", "img/igs/mobirum/2.jpg"],
        isHorizontal: true,
        title: "모비럼 게임 커뮤니티",
        start: "2018-10",
        end: "2019-02",
        company: "아이지에스",
        desc: "넷마블에서 서비스하던 <b>게임 커뮤니티 사이트</b>를 리뉴얼하는 업무로 메인 대문 사이트를<b>리뉴얼 하는 업무</b> 를 담당함.",
        work: ["메인 대문 사이트 웹 백엔드 및 프론트엔드 개발", "메인 대문 사이트 통합검색 ES 구축 및 Monstache 동기화, 검색 구현"],
        tag: ["Java", "Spring Boot", "Elasticsearch", "Mongodb", "Freemaker", "Thymeleaf"],
    },
    {
        src: ["img/omakorea/zombiepoww/1.jpg", "img/omakorea/zombiepoww/2.png", "img/omakorea/zombiepoww/3.png", "img/omakorea/zombiepoww/4.png"],
        isHorizontal: true,
        title: "좀비파우 모바일 캐쥬얼 퍼즐 게임",
        start: "2018-04",
        end: "2018-10",
        company: "오엠에이코리아",
        desc: "<b>1vs1 기반의 퍼즐 대전 게임</b>으로. 장비 시스템, 소모 아이템 시스템 및 뽑기 시스템, 강화 시스템 등 <b>다양한 게임 요소</b>가 포함되어 있으며, 인게임 앱 클라이언트를 제외한 전체 시스템을 담당함.",
        work: [
            "웹/게임서버 백엔드 API",
            "DB 스키마 및 구조 설계",
            "게임소개, 이벤트, 관리자 페이지",
            "AWS (beanstalk, rds, s3, route)",
            "앱 Push 서버",
            "인앱 결제(ios/android)",
            "이벤트 및 스케쥴링",
            "랭킹 시스템(redis)",
            "장비 뽑기 시스템",
            "장비 강화 시스템(클래시로얄 방식)",
        ],
        tag: ["Java", "Spring Boot", "Spring Batch", "Mysql", "AWS", "Redis"],
    },
    {
        src: ["img/omakorea/pudluck/1.jpg", "img/omakorea/pudluck/2.jpg", "img/omakorea/pudluck/3.jpg", "img/omakorea/pudluck/4.jpg", "img/omakorea/pudluck/5.jpg", "img/omakorea/pudluck/6.jpg", "img/omakorea/pudluck/7.jpg"],
        isHorizontal: true,
        title: "퍼드럭 투약 관리 서비스",
        start: "2018-04",
        end: "2018-06",
        company: "오엠에이코리아",
        desc: "미국 병원 및 의사 대상으로 환자들의 <b>투약 상태를 관리하는 앱</b>으로, 클라이언트 앱 파트를 제외한 전반적인 개발을 담당함",
        work: ["앱 백엔드 API", "DB 스키마 및 구조 설계", "관리자, 통계 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버", "파워볼 API 연동"],
        tag: ["Java", "Spring Boot", "Mysql", "Mysql", "AWS"],
    },
    {
        src: ["img/omakorea/powerfishing/1.jpg", "img/omakorea/powerfishing/2.png", "img/omakorea/powerfishing/3.png", "img/omakorea/powerfishing/4.png"],
        title: "파워피싱 모바일 캐쥬얼 낚시 게임",
        start: "2017-07",
        end: "2018-03",
        company: "오엠에이코리아",
        desc: "낚시 게임 전문사인 '퍼플오션' 게임사와 협업하여 개발한 원터치 기반 캐쥬얼 <b>낚시 게임</b>으로 유니티 엔진 및 앱을 제외한 게임 전체적인 DB 설계 및 백엔드 API 개발을 담당함",
        work: ["웹/게임서버 백엔드 API", "DB 스키마 및 구조 설계", "관리자, 통계 페이지", "AWS (beanstalk, rds, s3, route)", "이벤트 및 스케쥴링", "랭킹 시스템 (redis)", "앱 Push 서버", "pvp 습격 시스템"],
        tag: ["Java", "Spring Boot", "Mysql", "AWS", "Redis"],
    },
    {
        src: ["img/omakorea/hallpass/1.png", "img/omakorea/hallpass/2.png", "img/omakorea/hallpass/3.png"],
        title: "홀패스 SNS 웹/앱 서비스",
        start: "2016-08-01",
        end: "2017-06-30",
        company: "오엠에이코리아",
        desc: "미국 대상 서비스로 <b>학생들만 전용으로 사용하는 소셜 웹/앱 서비스</b>로, 인스타그램을 모티브로 제작되어 <b>기본적인 소셜 기능</b>을 담고 있고 클라이언트 앱 파트를 제외한 전반적인 개발을 담당함.",
        work: ["웹/앱 백엔드 API", "DB 스키마 및 구조 설계", "관리자 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버", "학교/학생 랭킹 시스템 (redis)", "구독 및 팔로우 기능"],
        tag: ["Java", "Spring Boot", "Mysql", "Mysql", "AWS", "Redis"],
    },
    {
        src: [
            "img/omakorea/colorus/1.png",
            "img/omakorea/colorus/2.png",
            "img/omakorea/colorus/3.png",
            "img/omakorea/colorus/4.png",
            "img/omakorea/colorus/5.png",
            "img/omakorea/colorus/6.png",
            "img/omakorea/colorus/7.png",
            "img/omakorea/colorus/8.png",
        ],
        isHorizontal: true,
        title: "컬러어스 모바일 캐쥬얼 색칠 게임",
        start: "2016-08",
        end: "2017-06",
        company: "오엠에이코리아",
        desc: "<b>색칠 힐링 게임</b> 컬러링 북을 표방하는 캐쥬얼 게임을 지향 게임으로. 결제, 이벤트, 업적, 퀘스트, 레벨링 등 <b>기본적인 캐쥬얼 게임의 구성요소를 갖춘 어플리케이션</b>으로 카카오게임즈, 국내 및 중국 등 해외 서비스도 진행하였으며, 클라이언트 앱 파트를 제외한 전체적인 개발을 담당함",
        work: ["웹/게임서버 백엔드 API", "DB 스키마 및 구조 설계", "게임소개, 이벤트, 관리자 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버 (알림, 보상 등)", "인앱 결제(ios/android/tencent)", "게임대회 시스템, 이벤트 배치 및 스케쥴링"],
        tag: ["Java", "Spring Boot", "Spring Batch", "Mysql", "AWS", "Redis"],
    },
    {
        src: ["img/omakorea/grandsale/1.png", "img/omakorea/grandsale/2.png", "img/omakorea/grandsale/3.png", "img/omakorea/grandsale/4.png"],
        isHorizontal: true,
        title: "코리아 그랜드 세일 앱",
        start: "2016-01",
        end: "2016-05",
        company: "",
        desc: "외부 사업 중 하나로 중국 관광객 대상으로 <b>백화점 할인 쿠폰 등을 제공하는 앱 서비스</b>로 클라이언트 앱 파트 제외한 전반적인 개발을 담당함.",
        work: ["앱 백엔드 API", "DB 스키마 및 구조 설계", "관리자 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버", "위치 기반 할인 쿠폰 검색 등"],
        tag: ["Java", "Spring Boot", "Mysql", "AWS"],
    },
    {
        src: ["img/omakorea/chatgrab/A_main_0.png", "img/omakorea/chatgrab/A_main_1_0.png", "img/omakorea/chatgrab/A_main_1_1.png"],
        title: "챗그랩 소셜 서비스",
        start: "2015-07",
        end: "2015-12",
        company: "오엠에이코리아",
        desc: "채팅 대화를 공유하는 <b>SNS 웹/앱</b>으로 클라이언트 앱 파트를 제외한 전체적인 개발을 담당함.",
        work: ["웹/앱 백엔드 API 및 프론트엔드", "DB 스키마 및 구조 설계", "관리자 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버", "욕설 게시글 자동 블럭 처리 시스템"],
        tag: ["Java", "Spring Boot", "Spring Batch", "Mysql", "AWS"],
    },
    {
        src: ["img/omakorea/wehub/1.png", "img/omakorea/wehub/2.png", "img/omakorea/wehub/3.png", "img/omakorea/wehub/4.png", "img/omakorea/wehub/5.png"],
        isHorizontal: true,
        title: "위허브 메신저 앱 서비스",
        start: "2014-09",
        end: "2015-06",
        company: "오엠에이코리아",
        desc: "<b>그룹 채팅 어플리케이션</b>으로 <b>위치 기반으로 사용자들을 연계해서 그룹 채팅을 개설하는 시스템</b>이 주 된 기능으로. DB설계, 웹 및 백엔드 API 개발을 담당함",
        work: ["웹/앱 백엔드 API 및 프론트엔드", "DB 스키마 및 구조 설계", "지도 사용자 통계 및 관리자 페이지", "AWS (beanstalk, rds, s3, route)", "앱 Push 서버", "위치 기반 사용자 검색"],
        tag: ["Java", "Spring Boot", "Mysql", "AWS"],
    },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCurrentDateText(noDay) {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    if (noDay === undefined || !noDay) {
        const day = String(currentDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    } else return `${year}-${month}`;
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "container";
    addXButton(template, () => {
        careerData.splice(idx, 1);
        const containers = document.getElementsByClassName("container");
        while (containers.length > 0) {
            containers[0].parentNode.removeChild(containers[0]);
        }

        const areas = document.getElementsByClassName("area");
        while (areas.length > 0) {
            areas[0].parentNode.removeChild(areas[0]);
        }

        renderData(careerData);
        createGraph();
    });

    const leftSpace = document.createElement("div");
    leftSpace.className = "left-space";

    const image = document.createElement("img");
    image.src = data.src;

    leftSpace.appendChild(image);
    template.appendChild(leftSpace);

    const rightSpaces = document.createElement("div");
    rightSpaces.className = "right-spaces";

    const rightSpace1 = document.createElement("div");
    rightSpace1.className = "right-space";

    const companyTitle = document.createElement("p");
    companyTitle.className = "company-title";
    companyTitle.textContent = data.title;

    const companyLevel = document.createElement("p");
    companyLevel.className = "company-level";
    companyLevel.textContent = data.level;

    const companyDate = document.createElement("p");
    companyDate.className = "company-date";
    companyDate.textContent = `${formatDate(data.start)} ~ ${formatDate(data.end)} (${calculateYearMonth(data.start, data.end)})`;

    rightSpace1.appendChild(companyTitle);
    rightSpace1.appendChild(companyLevel);
    rightSpace1.appendChild(companyDate);
    rightSpaces.appendChild(rightSpace1);

    const rightSpace2 = document.createElement("div");
    rightSpace2.className = "right-space";

    const companyWork = document.createElement("p");
    companyWork.className = "company-work";
    companyWork.textContent = data.work;

    const companyTag = document.createElement("p");
    companyTag.className = "company-tag";
    /*
        let html = "";
        data.tags.forEach(tag => {
            if (skills[tag] === undefined) return;
            html += "<img class='skill' src='img/skill/" + skills[tag] + "'/>";
        });*/
    companyTag.textContent = data.tags.map((tag) => "#" + upperFirst(tag)).join(" ");

    rightSpace2.appendChild(companyWork);
    rightSpace2.appendChild(companyTag);
    rightSpaces.appendChild(rightSpace2);

    template.appendChild(rightSpaces);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderData(data) {
    const contentElement = document.getElementsByClassName("section-career")[0];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const template = createTemplate(item, i);
        contentElement.appendChild(template);
    }
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createCareerTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "career-period";

    addXButton(template, () => {
        careerTextData.splice(idx, 1);
        const containers = document.getElementsByClassName("career-period");
        while (containers.length > 0) {
            containers[0].parentNode.removeChild(containers[0]);
        }

        renderCareerData(careerTextData);
    });

    const date = document.createElement("p");
    date.className = "career-period-date";
    date.textContent = `📅 ${formatDate(data.start)} ~ ${formatDate(data.end)}`;

    const list = document.createElement("ul");
    list.className = "career-period-list";

    data.content.forEach((content) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = "→ " + content;
        list.appendChild(listItem);
    });

    template.appendChild(date);
    template.appendChild(list);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderCareerData(data) {
    const contentElement = document.getElementsByClassName("career-periods")[0];

    data.forEach((item, idx) => {
        const template = createCareerTemplate(item, idx);
        contentElement.appendChild(template);
    });
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createPortpolioTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "portpolio-wrap";

    addXButton(template, () => {
        portpolioData.splice(idx, 1);

        const ports = document.getElementsByClassName("portpolio-wrap");
        while (ports.length > 0) {
            ports[0].parentNode.removeChild(ports[0]);
        }

        renderPortpolioData(portpolioData);
    });

    const sliderContainer = document.createElement("div");
    sliderContainer.className = "slider-container";
    sliderContainer.classList.add(`slider-container-${data.index}`);

    const slider = document.createElement("div");
    slider.className = "slider";
    slider.classList.add(`slider-${data.index}`);

    data.src.forEach((src) => {
        const slide = document.createElement("div");
        slide.className = "slide";

        const image = document.createElement("img");
        image.src = src;
        image.alt = "Slide";

        if (data.isHorizontal) image.className = "horizontal";

        slide.appendChild(image);
        slider.appendChild(slide);
    });

    if (data.src.length > 1) {
        const prevButton = document.createElement("div");
        prevButton.className = "prev-button";
        prevButton.classList.add(`prev-button-${data.index}`);
        prevButton.innerHTML = leftSvgHtml;

        const nextButton = document.createElement("div");
        nextButton.className = "next-button";
        nextButton.classList.add(`next-button-${data.index}`);
        nextButton.innerHTML = rightSvgHtml;

        sliderContainer.appendChild(prevButton);
        sliderContainer.appendChild(nextButton);
    }

    sliderContainer.appendChild(slider);

    const projectInfo = document.createElement("div");
    projectInfo.className = "w50 pl10";

    const titleWrap = document.createElement("div");
    titleWrap.className = "project-title-wrap";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project-title";
    projectTitle.textContent = data.title;

    const projectDate = document.createElement("p");
    projectDate.className = "project-date";
    projectDate.textContent = `${formatDate(data.start)} ~ ${formatDate(data.end)}`;

    const projectName = document.createElement("p");
    projectName.className = "project-name";
    projectName.textContent = data.company;

    titleWrap.appendChild(projectTitle);
    titleWrap.appendChild(projectDate);
    titleWrap.appendChild(projectName);

    const projectDesc = document.createElement("div");
    projectDesc.className = "project-desc";
    projectDesc.innerHTML = data.desc;

    const workList = document.createElement("ul");
    workList.className = "bootstrap-list";

    data.work.forEach((work) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${work}`;
        workList.appendChild(listItem);
    });

    const projectTag = document.createElement("p");
    projectTag.className = "project-tag";
    projectTag.textContent = `#${data.tag.join(" #")}`;

    projectInfo.appendChild(titleWrap);
    projectInfo.appendChild(projectDesc);
    projectInfo.appendChild(workList);
    projectInfo.appendChild(projectTag);

    template.appendChild(sliderContainer);
    template.appendChild(projectInfo);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderPortpolioData(data) {
    const contentElement = document.getElementsByClassName("portpolio-top-wrap")[0];

    data.forEach((item, index) => {
        item.index = index + 1; // 인덱스 값 설정
        const template = createPortpolioTemplate(item, index);
        contentElement.appendChild(template);
    });
}

function formatDate(dateString) {
    if (dateString.length === 7) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(5, 7);
        return `${year}년 ${month}월`;
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
}

function getFutureDate() {
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

    var year = futureDate.getFullYear();
    var month = (futureDate.getMonth() + 1).toString().padStart(2, "0");
    var day = futureDate.getDate().toString().padStart(2, "0");

    var futureDateText = year + "-" + month + "-" + day;

    return futureDateText;
}

function createGraph() {
    const graphElement = document.getElementById("graph");
    graphElement.innerHTML = "";

    const lineStart = new Date("2013-01-01");
    const lineEnd = new Date(getFutureDate());

    const lineLength = lineEnd.getTime() - lineStart.getTime();

    const lineLengthByYear = lineEnd.getFullYear() - lineStart.getFullYear() + 1;
    const lineLengthByDays = lineLength / (1000 * 60 * 60 * 24); // 일 수 간격 계산
    const tickWidth = 100 / (lineLengthByDays / 365); // 각 눈금의 너비 (가로로 등간격 배치)

    // 가중치를 적용할 최대 높이 설정
    const maxWeightedHeight = 200;

    // 기간이 긴 영역에 가중치를 적용하여 높이 계산
    const weightedData = careerData.map((item) => {
        const startDate = new Date(item.start);
        const endDate = new Date(item.end);

        const duration = endDate.getTime() - startDate.getTime();
        const weight = Math.ceil((duration / lineLength) * maxWeightedHeight);

        return { ...item, weight };
    });

    // 가중치를 기준으로 오름차순 정렬
    weightedData.sort((a, b) => a.weight - b.weight);

    let currentHeight = maxWeightedHeight;

    // 회사별로 색상 지정을 위해 graph.css에서 색상을 추가해줘야 한다.
    for (const item of weightedData) {
        const areaElement = document.createElement("div");
        areaElement.classList.add("area");

        const areaElementNameTag = document.createElement("p");
        areaElementNameTag.textContent = item.title;

        areaElement.appendChild(areaElementNameTag);

        const startDate = new Date(item.start);
        const endDate = new Date(item.end);
        console.log(startDate, endDate);

        const startPercentage = ((startDate.getTime() - lineStart.getTime()) / lineLength) * 100;
        const endPercentage = ((endDate.getTime() - lineStart.getTime()) / lineLength) * 100;

        const areaWidth = endPercentage - startPercentage;
        const areaHeight = Math.min(item.weight, currentHeight); // 현재 높이와 비교하여 최대 높이 제한

        areaElement.style.bottom = "0"; // 맨 아래에서 시작하도록 설정
        areaElement.style.left = `${startPercentage}%`;
        areaElement.style.width = `${areaWidth}%`;
        areaElement.style.height = `${areaHeight}px`; // 가중치에 따른 높이 설정

        graphElement.appendChild(areaElement);

        currentHeight -= areaHeight;
    }

    for (let i = 0; i < lineLengthByYear; i++) {
        const year = lineStart.getFullYear() + i;

        // 수직 눈금 생성
        const tickDiv = document.createElement("div");
        tickDiv.classList.add("tick");
        tickDiv.style.left = `${tickWidth * i}%`;
        graphElement.appendChild(tickDiv);

        // 연도 표시 생성
        const yearDiv = document.createElement("div");
        yearDiv.classList.add("year");
        yearDiv.innerText = year.toString();
        yearDiv.style.left = `${tickWidth * i}%`;
        graphElement.appendChild(yearDiv);
    }
}

// 그래프 생성 함수 호출
createGraph();

renderData(careerData);
renderCareerData(careerTextData);
renderPortpolioData(portpolioData);

function addXButton(element, func) {
    const xButton = document.createElement("div");
    xButton.classList.add("x-button");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", "18");
    line1.setAttribute("y1", "6");
    line1.setAttribute("x2", "6");
    line1.setAttribute("y2", "18");

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", "6");
    line2.setAttribute("y1", "6");
    line2.setAttribute("x2", "18");
    line2.setAttribute("y2", "18");

    svg.appendChild(line1);
    svg.appendChild(line2);

    xButton.appendChild(svg);
    xButton.addEventListener("click", func);
    element.appendChild(xButton);
}
function calculateYearMonth(date1, date2) {
    const [year1, month1] = date1.split("-").map(Number);
    const [year2, month2] = date2.split("-").map(Number);

    const yearDiff = year2 - year1;
    const monthDiff = month2 - month1;

    let yearString = "";
    let monthString = "";

    if (yearDiff > 0) {
        yearString = `${yearDiff}년`;
    }

    if (monthDiff >= 0) {
        monthString = `${monthDiff}개월`;
    } else {
        yearString = `${yearDiff - 1}년`;
        monthString = `${12 + monthDiff}개월`;
    }

    return `${yearString} ${monthString}`;
}
