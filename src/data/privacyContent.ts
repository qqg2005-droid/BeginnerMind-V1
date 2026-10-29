export interface PrivacySection {
  title: string;
  content: string[];
}

export interface PrivacyPolicyData {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

export const privacyPolicyContent: Record<'en' | 'zh-TW' | 'zh-CN', PrivacyPolicyData> = {
  en: {
    title: "Privacy Policy",
    subtitle: "Personal Data (Privacy) Ordinance & Institutional Protection Policy",
    lastUpdated: "Effective Date: January 2026",
    sections: [
      {
        title: "1. Commitment to Personal Data Protection",
        content: [
          "Beginner Mind Asset Management Limited (\"the Company\", \"we\", \"us\", or \"our\") is an asset management firm licensed by the Securities and Futures Commission of Hong Kong (SFC CE No. BTB385) to conduct Type 9 (Asset Management) regulated activities.",
          "We are dedicated to safeguarding the confidentiality, integrity, and security of all personal data provided by clients, prospective clients, and business partners in full compliance with the Personal Data (Privacy) Ordinance (Cap. 486 of the Laws of Hong Kong) (\"PDPO\") and applicable regulatory guidelines issued by the SFC."
        ]
      },
      {
        title: "2. Types of Personal Data Collected",
        content: [
          "In the course of providing discretionary portfolio management, institutional fund structures, and related advisory services, we may collect and process personal data including but not limited to:",
          "• Identification and contact information: Legal full name, official title, corporate affiliation, passport or identity document numbers, nationality, registered address, telephone number, and corporate email address.",
          "• Regulatory & KYC/AML verification data: Proof of address, source of wealth, source of funds, beneficial ownership structures, politically exposed person (PEP) screening records, and tax residency certificates (FATCA / CRS).",
          "• Investor classification data: Documentation substantiating qualification as a \"Professional Investor\" under Schedule 1 to the Securities and Futures Ordinance (Cap. 571)."
        ]
      },
      {
        title: "3. Purposes of Processing Personal Data",
        content: [
          "Your personal data is collected and used strictly for legitimate institutional business purposes, including:",
          "• Verifying client identity and eligibility under Hong Kong statutory requirements.",
          "• Structuring, establishing, and administering discretionary investment mandates, private funds, and managed accounts.",
          "• Complying with mandatory statutory anti-money laundering (AML), counter-financing of terrorism (CFT), and anti-tax evasion regulations.",
          "• Facilitating formal communications, statutory investment reporting, and account administration.",
          "• Liaising with authorized financial institutions, custodian banks, prime brokers, and statutory regulatory authorities."
        ]
      },
      {
        title: "4. Data Security and Confidentiality",
        content: [
          "We maintain rigorous physical, electronic, and procedural safeguards in accordance with institutional industry standards to protect personal data against unauthorized access, alteration, disclosure, accidental loss, or destruction.",
          "Access to personal data is restricted solely to authorized personnel with a legitimate business need who are bound by stringent statutory confidentiality obligations."
        ]
      },
      {
        title: "5. Disclosure to Third Parties",
        content: [
          "Personal data will be treated as strictly confidential. We do not sell, rent, or trade personal data to any external commercial third parties.",
          "Data may only be disclosed under lawful circumstances to:",
          "• Licensed custodian banks, prime brokers, fund administrators, auditors, and legal advisors acting on behalf of the client's mandate.",
          "• The Hong Kong Securities and Futures Commission (SFC), Inland Revenue Department (IRD), Hong Kong Monetary Authority (HKMA), law enforcement agencies, or courts of competent jurisdiction where mandated by applicable laws."
        ]
      },
      {
        title: "6. Retention of Data",
        content: [
          "Personal data is retained only for as long as is necessary to fulfill the operational and legal purposes for which it was collected, and in compliance with Hong Kong statutory retention mandates (typically at least seven years following the cessation of client relationships)."
        ]
      },
      {
        title: "7. Your Rights & Data Protection Inquiries",
        content: [
          "Under the PDPO, you are entitled to check whether we hold personal data concerning you, request copies thereof, and request the correction of any inaccurate data.",
          "For any data access, correction requests, or questions regarding this Privacy Policy, please contact our Compliance Officer:",
          "• Email: cs@beginner-mind.com",
          "• Telephone: +852 3963 9354",
          "• Address: Office 2507, 25/F, Spaces AXA Southside, 38 Wong Chuk Hang Road, Hong Kong"
        ]
      }
    ]
  },
  'zh-TW': {
    title: "隱私政策",
    subtitle: "香港《個人資料（私隱）條例》合規與機構資料保護政策",
    lastUpdated: "生效日期：2026年1月",
    sections: [
      {
        title: "一、 資料保護承諾",
        content: [
          "初星資產管理有限公司（以下簡稱「本公司」或「我們」）為獲香港證券及期貨事務監察委員會（香港證監會中央編號：BTB385）核准發牌進行第9類（提供資產管理）受規管活動之持牌法團。",
          "本公司恪守最高標準的職業信託原則，嚴格遵守香港法例第486章《個人資料（私隱）條例》（以下簡稱「私隱條例」）及香港證監會相關合規指引，致力保護所有客戶、合資格投資者及商業夥伴個人資料的機密性與安全性。"
        ]
      },
      {
        title: "二、 收集個人資料的範圍",
        content: [
          "在提供全權委託資產管理、私募基金設立與機構投資服務過程中，我們可能收集以下類別的個人資料：",
          "• 身份與聯絡資料：法定全名、公職職銜、機構名稱、身份證件或護照號碼、國籍、註冊地址、聯絡電話及公務電郵。",
          "• 監管合規及反洗錢（AML/KYC）審查資料：住址證明、財富來源證明、資金來源證明、最終實益擁有人（UBO）架構、政治敏感人物（PEP）合規記錄及稅務居民身份聲明（FATCA / CRS）。",
          "• 投資者資格證明：依據香港《證券及期貨條例》（第571章）附表1所界定之「專業投資者」（Professional Investor）資格證明文件與資產規模審核報告。"
        ]
      },
      {
        title: "三、 個人資料的使用目的",
        content: [
          "我們收集及處理個人資料僅限於合法的受託與商業目的，包括：",
          "• 審核及核實投資者身份與香港法規規定的專業投資者資格；",
          "• 設立、管理及運作全權委託投資賬戶、專項基金（OFC / Cayman SPC）與機構投資組合；",
          "• 履行法定反洗錢（AML）、打擊恐怖分子資金籌集（CFT）及國際稅務申報（CRS/FATCA）義務；",
          "• 提供定期資產管理報告、行政通訊及法定法律通知；",
          "• 與授權托管銀行、行政管理人、律師事務所及監管執法機構進行合法溝通與合規備案。"
        ]
      },
      {
        title: "四、 資料安全防護與保密義務",
        content: [
          "本公司採取嚴格的實體安全、電子加密與制度化權限控制措施，防範任何未經授權的查閱、洩露、篡改、意外遺失或損壞。",
          "所有接觸客戶個人資料的僱員均簽署嚴格保密協議，且僅限履行職責有必需業務知悉權限之人員方可查閱。"
        ]
      },
      {
        title: "五、 資料披露與第三方共享限制",
        content: [
          "本公司對所有個人資料恪守嚴格保密原則，絕不會將個人資料出售、出租或轉讓予任何未授權的商業第三方。",
          "僅在下列法定或業務必要情況下方可向第三方披露：",
          "• 為執行客戶投資指令所必需的持牌託管銀行、主經紀商、基金行政管理人、註冊審計師及法律顧問；",
          "• 依據適用法律或法院命令，依法向香港證券及期貨事務監察委員會（SFC）、香港稅務局（IRD）、香港金融管理局（HKMA）或司法主管機關披露。"
        ]
      },
      {
        title: "六、 資料保留期限",
        content: [
          "我們僅在達成收集目的及遵循香港法例法定保存要求所需的期限內保留個人資料（通常於客戶委託關係終止後法定保留至少七年）。"
        ]
      },
      {
        title: "七、 您的權利與聯絡方式",
        content: [
          "依據香港《個人資料（私隱）條例》，您有權查閱本公司是否持有您的個人資料、獲取資料副本，並有權要求更正任何不準確之處。",
          "如需行使上述權利或諮詢本政策任何條款，請透過以下途徑聯絡本公司合規主任：",
          "• 電子郵箱：cs@beginner-mind.com",
          "• 聯絡電話：+852 3963 9354",
          "• 辦公地址：香港黃竹坑道38號安盛匯25樓2507室"
        ]
      }
    ]
  },
  'zh-CN': {
    title: "隐私政策",
    subtitle: "香港《个人资料（私隐）条例》合规与机构数据保护政策",
    lastUpdated: "生效日期：2026年1月",
    sections: [
      {
        title: "一、 数据保护承诺",
        content: [
          "初星资产管理有限公司（以下简称“本公司”或“我们”）为获香港证券及期货事务监察委员会（香港证监会中央编号：BTB385）核准发牌进行第9类（提供资产管理）受规管活动之持牌法团。",
          "本公司恪守最高标准的职业信托原则，严格遵守香港法例第486章《个人资料（私隐）条例》（以下简称“私隐条例”）及香港证监会相关合规指引，致力于保护所有客户、合资格投资者及商业伙伴个人资料的机密性与安全性。"
        ]
      },
      {
        title: "二、 收集个人资料的范围",
        content: [
          "在提供全权委托资产管理、私募基金设立与机构投资服务过程中，我们可能收集以下类别的个人资料：",
          "• 身份与联络资料：法定全名、公职职务、机构名称、身份证件或护照号码、国籍、注册地址、联络电话及公务电邮。",
          "• 监管合规及反洗钱（AML/KYC）审查资料：住址证明、财富来源证明、资金来源证明、最终受益所有人（UBO）架构、政治敏感人物（PEP）合规记录及税务居民身份声明（FATCA / CRS）。",
          "• 投资者资格证明：依据香港《证券及期货条例》（第571章）附表1所界定之“专业投资者”（Professional Investor）资格证明文件与资产规模审核报告。"
        ]
      },
      {
        title: "三、 个人资料的使用目的",
        content: [
          "我们收集及处理个人资料仅限于合法的受托与商业目的，包括：",
          "• 审核及核实投资者身份与香港法规规定的专业投资者资格；",
          "• 设立、管理及运作全权委托投资账户、专项基金（OFC / Cayman SPC）与机构投资组合；",
          "• 履行法定反洗钱（AML）、打击恐怖主义融资（CFT）及国际税务申报（CRS/FATCA）义务；",
          "• 提供定期资产管理报告、行政通讯及法定法律通知；",
          "• 与授权托管银行、行政管理人、律师事务所及监管执法机构进行合法沟通与合规备案。"
        ]
      },
      {
        title: "四、 数据安全防护与保密义务",
        content: [
          "本公司采取严格的实体安全、电子加密与制度化权限控制措施，防范任何未经授权的查阅、泄露、篡改、意外遗失或损坏。",
          "所有接触客户个人资料的雇员均签署严格保密协议，且仅限履行职责有必需业务知悉权限之人员方可查阅。"
        ]
      },
      {
        title: "五、 数据披露与第三方共享限制",
        content: [
          "本公司对所有个人资料恪守严格保密原则，绝不会将个人资料出售、出租或转让予任何未经授权的商业第三方。",
          "仅在下列法定或业务必要情况下方可向第三方披露：",
          "• 为执行客户投资指令所必需的持牌托管银行、主经纪商、基金行政管理人、注册审计师及法律顾问；",
          "• 依据适用法律或法院命令，依法向香港证券及期货事务监察委员会（SFC）、香港税务局（IRD）、香港金融管理局（HKMA）或司法主管机关披露。"
        ]
      },
      {
        title: "六、 数据保留期限",
        content: [
          "我们仅在达成收集目的及遵循香港法例法定保存要求所需的期限内保留个人资料（通常于客户委托关系终止后法定保留至少七年）。"
        ]
      },
      {
        title: "七、 您的权利与联络方式",
        content: [
          "依据香港《个人资料（私隐）条例》，您有权查阅本公司是否持有您的个人资料、获取资料副本，并有权要求更正任何不准确之处。",
          "如需行使上述权利或咨询本政策任何条款，请通过以下途径联络本公司合规主任：",
          "• 电子邮箱：cs@beginner-mind.com",
          "• 联络电话：+852 3963 9354",
          "• 办公地址：香港黄竹坑道38号安盛汇25楼2507室"
        ]
      }
    ]
  }
};
