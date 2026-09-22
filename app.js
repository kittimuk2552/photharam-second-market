// ==========================================================================
// PHOTHARAM SECOND MARKET - FULL INTERACTION & MULTILINGUAL SCRIPT v8.0
// Supported Languages: Thai (th), English (en), Japanese (ja)
// ==========================================================================

// --- I18N DICTIONARY ---
const translations = {
  th: {
    badge_platform: "แพลตฟอร์มกลางอำเภอโพธาราม • Japanese Minimal Eco UI",
    app_main_title: "ตลาดของเหลือใช้ชุมชนโพธาราม",
    app_subtitle_desc: "Photharam Second Market • ตลาดแบ่งปันและลดขยะชุมชนอย่างยั่งยืน",
    theme_label: "🎨 โทนสีญี่ปุ่น:",
    theme_mint: "ครีมมินต์",
    theme_cyan: "ฟ้าสกาย",
    theme_sage: "เขียว Sage",
    theme_pearl: "คลีนพอลล์",
    lang_label: "🌐 ภาษา / Language:",
    view_phone: "มือถือ 9:16",
    view_full: "เต็มจอ",
    ticker_news_badge: "ข่าวชุมชน:",
    ticker_sample_text: "คุณวิชาญ รับชุดโซฟาไม้สักแล้ว • 🎁 ป้าสมใจ แจกฟรี กระถางดินเผา 10 ใบ • 🌱 ลุงสมชาย เพิ่มปุ๋ยคอกหมักชีวภาพ 15 กระสอบ • เจ๊นวล แบ่งปันตู้แช่เย็น",
    app_short_title: "โพธาราม Second Market",
    app_short_sub: "ตลาดแบ่งปัน & ลดขยะชุมชน",
    search_placeholder: "ค้นหาเตาหมูกระทะ, โซฟาไม้, กระถาง, ปุ๋ย, จักรยาน...",
    story_post_new: "โพสต์ใหม่",
    hero_tag: "✨ ตลาดของเหลือใช้ • อำเภอโพธาราม",
    hero_title: "เปลี่ยนของเหลือใช้ในบ้าน ให้เป็นคุณค่าของเพื่อนบ้าน",
    hero_desc: "ลดปริมาณขยะ ประหยัดค่าใช้จ่าย และแบ่งปันสิ่งของสภาพดีในโพธาราม",
    hero_btn_post: "ประกาศแบ่งปันของ",
    hero_btn_map: "ดูจุดนัดรับใกล้คุณ",
    mascot_bubble: "น้องรักษ์โลก 🌿<br>ยินดีต้อนรับชาวโพธารามครับ!",
    filter_mode_title: "ตัวกรองรูปแบบการส่งต่อ",
    filter_mode_sub: "เลือกประเภทสิ่งของ",
    filter_all: "ทั้งหมด",
    filter_free: "🎁 แจกฟรี",
    filter_sell: "🏷️ ขายต่อมิตรภาพ",
    filter_swap: "🔄 ขอแลกเปลี่ยน",
    categories_title: "หมวดหมู่สินค้าในชุมชน",
    view_all: "ดูทั้งหมด",
    cat_all: "ทั้งหมด",
    cat_restaurant: "หมวดร้านอาหาร",
    cat_agriculture: "เกษตรกรรม & สวน",
    cat_furniture: "เฟอร์นิเจอร์ & บ้าน",
    cat_electronics: "เครื่องใช้ไฟฟ้า",
    cat_general: "ของใช้ทั่วไป",
    listings_title: "รายการของเหลือใช้พร้อมส่งต่อ",
    sus_badge: "📊 Environmental Impact & Score",
    sus_title: "สถิติการลดขยะชุมชนโพธาราม",
    sus_waste: "ขยะถูกหมุนเวียน",
    sus_items: "ส่งมอบสำเร็จ",
    sus_savings: "ประหยัดให้ชุมชน",
    nav_home: "หน้าแรก",
    nav_market: "ตลาดแบ่งปัน",
    nav_map: "ใกล้บ้าน",
    nav_chats: "แชท",
    nav_profile: "โปรไฟล์",
    market_tab_title: "🛍️ ตลาดแบ่งปันของชุมชน",
    market_tab_desc: "สำรวจสิ่งของสภาพดีที่เพื่อนบ้านนำมาแบ่งปันในโพธาราม",
    map_tab_title: "📍 แผนที่นัดรับของใกล้บ้าน (Photharam Map)",
    map_tab_desc: "พิกัดจุดนัดรับจริงในเขต อ.โพธาราม จ.ราชบุรี",
    map_spots_title: "จุดนัดรับสำคัญในอำเภอโพธาราม",
    badge_popular: "นัดรับบ่อยสุด",
    chat_tab_title: "💬 กล่องข้อความเจรจานัดรับของ",
    chat_tab_desc: "พูดคุยกับเพื่อนบ้าน ตกลงรายละเอียดนัดรับสินค้า",
    user_name: "คุณป้าสมศรี (ร้านข้าวมันไก่)",
    badge_verified: "ยืนยันแล้ว",
    user_role: "⭐ สมาชิกดีเด่นประจำชุมชนโพธาราม (ระดับทอง)",
    user_location: "ต.โพธาราม อ.โพธาราม จ.ราชบุรี",
    badge_top_sharer: "ผู้แบ่งปันดีเด่น",
    badge_eco_reduced: "ลดขยะสะสม 98kg",
    badge_member_2yr: "สมาชิก 2 ปี",
    stat_my_listings: "ประกาศของคุณ",
    stat_delivered: "ส่งมอบสำเร็จ",
    stat_favorites: "ของที่ถูกใจ",
    ptab_my_items: "📦 ประกาศของคุณ",
    ptab_favs: "❤️ ของที่ถูกใจ",
    ptab_admin: "⚙️ แผงแอดมิน",
    my_items_title: "รายการสิ่งของที่คุณลงประกาศไว้",
    btn_add_more: "โพสต์เพิ่ม",
    fav_title: "สิ่งของที่คุณกดถูกใจไว้ (Favorites)",
    fav_hint: "กดหัวใจเพื่อบันทึก",
    admin_panel_title: "แผงแอดมินสมาคมเกษตรกรรักษ์โลก",
    admin_badge: "ผู้ดูแลระบบ",
    admin_tab_stats: "📊 สถิติระบบ",
    admin_tab_queue: "📋 รออนุมัติ",
    admin_tab_items: "📦 จัดการสิ่งของ",
    admin_tab_users: "👥 สมาชิก",
    admin_tab_broadcast: "📢 ประกาศ",
    admin_stat_users: "สมาชิกทั้งหมด",
    admin_stat_listings: "ประกาศในระบบ",
    admin_stat_pending: "รออนุมัติ",
    admin_dash_title: "สรุปผลการลดขยะและสถิติตลาด",
    admin_waste_total: "ขยะหมุนเวียนรวม",
    admin_goal_text: "บรรลุ 75% ของเป้าหมายประจำปี 2026",
    admin_savings_total: "มูลค่าประหยัดรวม",
    admin_savings_desc: "ช่วยลดค่าใช้จ่ายในครัวเรือนของชาวโพธาราม",
    admin_queue_title: "รายการรอการอนุมัติ (Audit Queue)",
    admin_manage_title: "จัดการ ลบ หรือปักหมุดสิ่งของในระบบ",
    admin_users_title: "ตรวจสอบสิทธิ์และยืนยันตัวตนสมาชิก",
    admin_broadcast_title: "ส่งข่าวด่วนถึงชาวโพธาราม (Marquee Broadcast)",
    btn_send_broadcast: "ส่งประกาศ",
    form_title_add: "ลงทะเบียนประกาศของเหลือใช้",
    form_subtext: "แบ่งปัน ขายต่อ หรือเสนอแลกเปลี่ยนเครื่องมือและสิ่งของในบ้าน",
    form_label_photo: "รูปภาพสินค้า (ภาพถ่ายจริง)",
    form_upload_title: "แตะเพื่อเลือกรูป หรือถ่ายภาพสินค้า",
    form_upload_sub: "รองรับ JPG, PNG หรือเลือกรูปตัวอย่าง",
    form_preset_label: "หรือเลือกรูปตัวอย่าง:",
    form_label_title: "ชื่อสิ่งของ / รายการสินค้า",
    form_label_category: "หมวดหมู่",
    form_label_type: "รูปแบบการส่งต่อ",
    form_label_price: "ราคา (บาท)",
    form_label_location: "สถานที่นัดรับ (ในอำเภอโพธาราม)",
    form_label_desc: "รายละเอียดสินค้า / สภาพการใช้งาน",
    btn_submit_post: "ยืนยันลงประกาศ",
    chat_online: "ออนไลน์ใน อ.โพธาราม",
    chat_discussing: "กำลังคุยเกี่ยวกับ:",
    call_connecting: "กำลังเชื่อมต่อสัญญาณสายสนทนาชุมชน...",
    call_mute: "ปิดเสียง",
    call_end: "วางสาย",
    call_speaker: "ลำโพง",
    notif_title: "การแจ้งเตือนชุมชน",
    notif_mark_read: "อ่านทั้งหมด",
    story_community_tag: "เรื่องราวชุมชนโพธาราม",
    lang_modal_title: "เลือกภาษา / Select Language",
    lang_modal_sub: "รองรับ 9 ภาษาเพื่อชาวชุมชนและนักท่องเที่ยว",
    theme_modal_title: "เลือกโทนสีญี่ปุ่นสบายตา",
    theme_modal_sub: "Japanese Minimal Eco UI Color Palette"
  },
  en: {
    badge_platform: "Photharam Official Platform • Japanese Minimal Eco UI",
    app_main_title: "Photharam Second Market",
    app_subtitle_desc: "Photharam Green Sharing & Community Eco Marketplace",
    theme_label: "🎨 Japanese Themes:",
    theme_mint: "Cream Mint",
    theme_cyan: "Sky Blue",
    theme_sage: "Soft Sage",
    theme_pearl: "Clean Pearl",
    lang_label: "🌐 Language:",
    view_phone: "9:16 Phone",
    view_full: "Fullscreen",
    ticker_news_badge: "Local News:",
    ticker_sample_text: "K. Wicharn claimed Teak Sofa • 🎁 Aunt Somjai gave away 10 Clay Pots for free • 🌱 Uncle Somchai added 15 sacks of Organic Compost • Sister Nual shared Beverage Cooler",
    app_short_title: "Photharam Second Market",
    app_short_sub: "Eco Sharing & Waste Reduction",
    search_placeholder: "Search grill, wooden sofa, plant pots, bicycle...",
    story_post_new: "New Story",
    hero_tag: "✨ Surplus Marketplace • Photharam District",
    hero_title: "Turn Home Surplus into Community Value",
    hero_desc: "Cut household waste, save money, and share quality items in Photharam.",
    hero_btn_post: "Share an Item",
    hero_btn_map: "Meetup Spots Nearby",
    mascot_bubble: "Nong Rak Lok 🌿<br>Welcome to Photharam!",
    filter_mode_title: "Transfer Format Filter",
    filter_mode_sub: "Choose item type",
    filter_all: "All",
    filter_free: "🎁 Free Gift",
    filter_sell: "🏷️ Friendly Sale",
    filter_swap: "🔄 Swap/Exchange",
    categories_title: "Community Categories",
    view_all: "View All",
    cat_all: "All",
    cat_restaurant: "Restaurant Gear",
    cat_agriculture: "Agriculture & Garden",
    cat_furniture: "Furniture & Home",
    cat_electronics: "Electronics",
    cat_general: "General Items",
    listings_title: "Ready to Pass On",
    sus_badge: "📊 Environmental Impact & Score",
    sus_title: "Photharam Waste Diversion Stats",
    sus_waste: "Waste Diverted",
    sus_items: "Delivered",
    sus_savings: "Community Saved",
    nav_home: "Home",
    nav_market: "Market",
    nav_map: "Nearby",
    nav_chats: "Chat",
    nav_profile: "Profile",
    market_tab_title: "🛍️ Community Marketplace",
    market_tab_desc: "Explore quality pre-loved items shared by neighbors in Photharam",
    map_tab_title: "📍 Nearby Meetup Map (Photharam)",
    map_tab_desc: "Actual meetup coordinates in Photharam District, Ratchaburi",
    map_spots_title: "Key Meetup Spots in Photharam",
    badge_popular: "Most Popular",
    chat_tab_title: "💬 Neighbor Chat & Negotiations",
    chat_tab_desc: "Chat with neighbors and arrange convenient meetup details",
    user_name: "Aunt Somsri (Hainanese Chicken Rice)",
    badge_verified: "Verified Citizen",
    user_role: "⭐ Photharam Community Champion (Gold Tier)",
    user_location: "Photharam Subdistrict, Ratchaburi",
    badge_top_sharer: "Top Sharer",
    badge_eco_reduced: "Reduced 98kg Waste",
    badge_member_2yr: "2-Year Member",
    stat_my_listings: "Your Listings",
    stat_delivered: "Items Given",
    stat_favorites: "Saved Items",
    ptab_my_items: "📦 My Listings",
    ptab_favs: "❤️ Favorites",
    ptab_admin: "⚙️ Admin Hub",
    my_items_title: "Your Shared Listings",
    btn_add_more: "Post New",
    fav_title: "Items You Liked (Favorites)",
    fav_hint: "Tap heart to save items",
    admin_panel_title: "Green Farmers Admin Panel",
    admin_badge: "Community Admin",
    admin_tab_stats: "📊 Stats",
    admin_tab_queue: "📋 Audit",
    admin_tab_items: "📦 Items",
    admin_tab_users: "👥 Members",
    admin_tab_broadcast: "📢 Broadcast",
    admin_stat_users: "Total Members",
    admin_stat_listings: "Active Listings",
    admin_stat_pending: "Pending",
    admin_dash_title: "Waste Reduction & Market Summary",
    admin_waste_total: "Total Diverted Waste",
    admin_goal_text: "Reached 75% of 2026 Annual Goal",
    admin_savings_total: "Total Savings",
    admin_savings_desc: "Direct living cost reduction for Photharam households",
    admin_queue_title: "Items Pending Audit",
    admin_manage_title: "Manage, Delete or Pin Listings",
    admin_users_title: "Verify Citizen Status & ID",
    admin_broadcast_title: "Broadcast Announcement (Marquee Ticker)",
    btn_send_broadcast: "Broadcast",
    form_title_add: "Register Item to Share",
    form_subtext: "Share, sell or swap household goods with neighbors",
    form_label_photo: "Item Photo (Real Photograph)",
    form_upload_title: "Tap to choose photo or capture",
    form_upload_sub: "Supports JPG, PNG or pick sample presets",
    form_preset_label: "Or choose sample preset:",
    form_label_title: "Item Name / Title",
    form_label_category: "Category",
    form_label_type: "Transfer Type",
    form_label_price: "Price (THB)",
    form_label_location: "Meetup Spot in Photharam",
    form_label_desc: "Condition & Item Details",
    btn_submit_post: "Confirm & Publish",
    chat_online: "Online in Photharam",
    chat_discussing: "Discussing item:",
    call_connecting: "Connecting community voice channel...",
    call_mute: "Mute",
    call_end: "End Call",
    call_speaker: "Speaker",
    notif_title: "Community Notifications",
    notif_mark_read: "Mark All Read",
    story_community_tag: "Photharam Community Story",
    lang_modal_title: "Select Language / เลือกภาษา",
    lang_modal_sub: "9 Languages Supported for Community & Visitors",
    theme_modal_title: "Select Japanese Minimalist Theme",
    theme_modal_sub: "Japanese Minimal Eco UI Color Palette"
  },
  ja: {
    badge_platform: "ポータラーム公式 • 和モダン・エコUI",
    app_main_title: "ポータラーム・エコマーケット",
    app_subtitle_desc: "地域の不用品を分かち合い、環境を守る持続可能な広場",
    theme_label: "🎨 和モダンカラー:",
    theme_mint: "クリームミント",
    theme_cyan: "スカイブルー",
    theme_sage: "セージグリーン",
    theme_pearl: "パールホワイト",
    lang_label: "🌐 言語 / Language:",
    view_phone: "9:16 スマホ",
    view_full: "全画面",
    ticker_news_badge: "地域速報:",
    ticker_sample_text: "ウィチャーンさんがチーク材ソファを譲受 • 🎁 ソムチャイさんが植木鉢10個を無料譲渡 • 🌱 有機堆肥15袋が追加されました",
    app_short_title: "ポータラーム・エコマーケット",
    app_short_sub: "分かち合いとゴミ削減の広場",
    search_placeholder: "鍋、木製ソファ、植木鉢、自転車などを検索...",
    story_post_new: "投稿",
    hero_tag: "✨ 不用品マーケット • ポータラーム郡",
    hero_title: "家庭の不用品を、ご近所の新しい価値へ",
    hero_desc: "廃棄物を減らし、生活費を節約し、良いものを分かち合いましょう。",
    hero_btn_post: "出品・おすそ分け",
    hero_btn_map: "近所の受取スポット",
    mascot_bubble: "エコくん 🌿<br>ポータラームへようこそ！",
    filter_mode_title: "お譲り形式",
    filter_mode_sub: "形式を選択",
    filter_all: "すべて",
    filter_free: "🎁 無料譲渡",
    filter_sell: "🏷️ お手頃販売",
    filter_swap: "🔄 物々交換",
    categories_title: "カテゴリー",
    view_all: "すべて見る",
    cat_all: "すべて",
    cat_restaurant: "飲食店用具",
    cat_agriculture: "農業・園芸",
    cat_furniture: "家具・インテリア",
    cat_electronics: "家電製品",
    cat_general: "生活雑貨",
    listings_title: "出品中のおすすめ品",
    sus_badge: "📊 環境スコア & 実績",
    sus_title: "ポータラームゴミ削減実績",
    sus_waste: "削減廃棄物",
    sus_items: "お渡し完了",
    sus_savings: "節約総額",
    nav_home: "ホーム",
    nav_market: "マーケット",
    nav_map: "近所マップ",
    nav_chats: "チャット",
    nav_profile: "プロフィール",
    market_tab_title: "🛍️ コミュニティ・マーケット",
    market_tab_desc: "ご近所さんが持ち寄った良品を探してみましょう",
    map_tab_title: "📍 受取スポット（ポータラーム地図）",
    map_tab_desc: "安全で便利なポータラーム郡内の受け渡し地点",
    map_spots_title: "主な受取スポット",
    badge_popular: "人気スポット",
    chat_tab_title: "💬 メッセージ & 取引チャット",
    chat_tab_desc: "ご近所さんと受取日時や場所を相談できます",
    user_name: "ソムシーおばさん (カオマンガイ店)",
    badge_verified: "認証済み住民",
    user_role: "⭐ ポータラーム優良エコ会員 (ゴールド)",
    user_location: "ラチャブリー県ポータラーム郡",
    badge_top_sharer: "優良共有者",
    badge_eco_reduced: "削減ゴミ 98kg",
    badge_member_2yr: "会員歴 2年",
    stat_my_listings: "出品アイテム",
    stat_delivered: "譲渡完了",
    stat_favorites: "お気に入り",
    ptab_my_items: "📦 出品アイテム",
    ptab_favs: "❤️ お気に入り",
    ptab_admin: "⚙️ 管理パネル",
    my_items_title: "あなたが出品したアイテム",
    btn_add_more: "新規投稿",
    fav_title: "お気に入り一覧 (Favorites)",
    fav_hint: "ハートを押して保存",
    admin_panel_title: "エコ農業協会 管理パネル",
    admin_badge: "管理者",
    admin_tab_stats: "📊 統計",
    admin_tab_queue: "📋 審査",
    admin_tab_items: "📦 アイテム",
    admin_tab_users: "👥 会員",
    admin_tab_broadcast: "📢 お知らせ",
    admin_stat_users: "総会員数",
    admin_stat_listings: "掲載中アイテム",
    admin_stat_pending: "審査待ち",
    admin_dash_title: "廃棄物削減と実績サマリー",
    admin_waste_total: "削減廃棄物累計",
    admin_goal_text: "2026年度目標の75%を達成",
    admin_savings_total: "地域節約総額",
    admin_savings_desc: "住民の家計負担軽減に貢献",
    admin_queue_title: "審査待ちの投稿",
    admin_manage_title: "掲載物の管理・削除・固定",
    admin_users_title: "住民資格確認・本人認証",
    admin_broadcast_title: "地域速報の配信 (テロップ)",
    btn_send_broadcast: "速報配信",
    form_title_add: "不用品の登録・出品",
    form_subtext: "ご近所さんと分かち合い・販売・交換",
    form_label_photo: "アイテム写真 (現物)",
    form_upload_title: "タップして写真を選択または撮影",
    form_upload_sub: "JPG, PNG対応 またはサンプル写真を選択",
    form_preset_label: "サンプル写真から選ぶ:",
    form_label_title: "品名 / タイトル",
    form_label_category: "カテゴリー",
    form_label_type: "取引タイプ",
    form_label_price: "価格 (バーツ)",
    form_label_location: "受取希望場所 (ポータラーム郡内)",
    form_label_desc: "状態・説明・受取条件",
    btn_submit_post: "投稿を完了する",
    chat_online: "ポータラーム内でオンライン",
    chat_discussing: "取引商品:",
    call_connecting: "通話を接続しています...",
    call_mute: "ミュート",
    call_end: "通話終了",
    call_speaker: "スピーカー",
    notif_title: "地域のお知らせ",
    notif_mark_read: "すべて既読",
    story_community_tag: "ポータラーム地域のストーリー",
    lang_modal_title: "言語を選択 / Select Language",
    lang_modal_sub: "地域住民と旅行者のための9言語対応",
    theme_modal_title: "和モダンカラーテーマの選択",
    theme_modal_sub: "目に優しいジャパニーズ・ミニマルエコUI"
  },
  zh: {
    badge_platform: "叻丕府波塔兰县官方二手共享平台 • 日系简约环保UI",
    app_main_title: "波塔兰社区闲置物品流转集市",
    app_subtitle_desc: "Photharam Second Market • 绿色社区共享与可持续减废平台",
    theme_label: "🎨 日系配色:",
    theme_mint: "薄荷奶油",
    theme_cyan: "天际晴蓝",
    theme_sage: "鼠尾草绿",
    theme_pearl: "清澈珠白",
    lang_label: "🌐 语言 / Language:",
    view_phone: "9:16 手机",
    view_full: "全屏视图",
    ticker_news_badge: "社区简报:",
    ticker_sample_text: "维昌先生已领取柚木沙发 • 🎁 颂彩阿姨免费赠送10个陶土花盆 • 🌱 颂猜大叔新增15袋发酵有机肥 • 暖姐分享冷藏饮料柜",
    app_short_title: "波塔兰闲置集市",
    app_short_sub: "社区共享 & 环保减废",
    search_placeholder: "搜索烤肉锅、实木沙发、花盆、有机肥、自行车...",
    story_post_new: "发布动态",
    hero_tag: "✨ 闲置流转集市 • 叻丕府波塔兰",
    hero_title: "将家中的闲置物品，转化为邻里的新价值",
    hero_desc: "减少社区废弃物，节省生活开支，在波塔兰传递好物温情。",
    hero_btn_post: "发布闲置好物",
    hero_btn_map: "查看附近交接点",
    mascot_bubble: "环保吉祥物 🌿<br>欢迎来到波塔兰！",
    filter_mode_title: "流转方式筛选",
    filter_mode_sub: "选择物品形式",
    filter_all: "全部",
    filter_free: "🎁 免费赠送",
    filter_sell: "🏷️ 友好转让",
    filter_swap: "🔄 物品置换",
    categories_title: "社区物品分类",
    view_all: "查看全部",
    cat_all: "全部",
    cat_restaurant: "餐饮厨具",
    cat_agriculture: "农业园艺",
    cat_furniture: "家具家居",
    cat_electronics: "家用电器",
    cat_general: "日用杂物",
    listings_title: "待领取的社区好物",
    sus_badge: "📊 环保积分与贡献",
    sus_title: "波塔兰减废循环统计",
    sus_waste: "循环利用废弃物",
    sus_items: "已交接件数",
    sus_savings: "为社区节省",
    nav_home: "首页",
    nav_market: "市场",
    nav_map: "附近",
    nav_chats: "消息",
    nav_profile: "我的",
    market_tab_title: "🛍️ 社区闲置交易市场",
    market_tab_desc: "探索波塔兰邻里分享的优质闲置好物",
    map_tab_title: "📍 附近交接地点地图 (Photharam Map)",
    map_tab_desc: "波塔兰县内真实的线下安全交接点",
    map_spots_title: "波塔兰核心交接点",
    badge_popular: "高频交接点",
    chat_tab_title: "💬 邻里沟通协商信箱",
    chat_tab_desc: "与邻居约定交接时间和具体地点",
    user_name: "颂诗阿姨 (海南鸡饭店)",
    badge_verified: "已认证居民",
    user_role: "⭐ 波塔兰模范社区贡献者 (金牌会员)",
    user_location: "叻丕府波塔兰县",
    badge_top_sharer: "好物分享达人",
    badge_eco_reduced: "累计减废 98kg",
    badge_member_2yr: "入驻 2 年",
    stat_my_listings: "我的发布",
    stat_delivered: "已交接",
    stat_favorites: "收藏夹",
    ptab_my_items: "📦 我的发布",
    ptab_favs: "❤️ 收藏夹",
    ptab_admin: "⚙️ 管理面板",
    my_items_title: "您发布的流转物品",
    btn_add_more: "新增发布",
    fav_title: "我收藏的物品 (Favorites)",
    fav_hint: "点击红心收藏喜欢的好物",
    admin_panel_title: "绿色农友会 管理中心",
    admin_badge: "系统管理员",
    admin_tab_stats: "📊 运营数据",
    admin_tab_queue: "📋 审核流",
    admin_tab_items: "📦 物品管理",
    admin_tab_users: "👥 居民管理",
    admin_tab_broadcast: "📢 全员广播",
    admin_stat_users: "认证居民总数",
    admin_stat_listings: "在线物品",
    admin_stat_pending: "待审核",
    admin_dash_title: "社区减废与流通总览",
    admin_waste_total: "累计循环废弃物",
    admin_goal_text: "已达成2026年度目标的 75%",
    admin_savings_total: "累计节省金额",
    admin_savings_desc: "切实减轻波塔兰居民家庭开支负担",
    admin_queue_title: "待审核物品列表 (Audit Queue)",
    admin_manage_title: "管理、下架或置顶社区物品",
    admin_users_title: "审核居民身份与安全信用",
    admin_broadcast_title: "发布全镇快报 (走马灯广播)",
    btn_send_broadcast: "发送广播",
    form_title_add: "登记闲置好物",
    form_subtext: "分享、低价转让或以物易物",
    form_label_photo: "物品实拍照片",
    form_upload_title: "点击上传照片或现场拍照",
    form_upload_sub: "支持 JPG、PNG 或选择预设图片",
    form_preset_label: "或选择预设图片:",
    form_label_title: "物品名称 / 标题",
    form_label_category: "分类",
    form_label_type: "流转形式",
    form_label_price: "价格 (泰铢)",
    form_label_location: "交接地点 (波塔兰县内)",
    form_label_desc: "成色描述 / 交接说明",
    btn_submit_post: "确认发布",
    chat_online: "波塔兰在线",
    chat_discussing: "正在商谈物品:",
    call_connecting: "正在呼叫社区语音通话...",
    call_mute: "静音",
    call_end: "挂断",
    call_speaker: "免提",
    notif_title: "社区通知",
    notif_mark_read: "全部已读",
    story_community_tag: "波塔兰社区故事",
    lang_modal_title: "选择语言 / Select Language",
    lang_modal_sub: "支持9种语言，服务社区居民与访客",
    theme_modal_title: "选择日系护眼配色",
    theme_modal_sub: "Japanese Minimal Eco UI 配色方案"
  },
  ko: {
    badge_platform: "포타람 공식 나눔 플랫폼 • 재패니즈 미니멀 에코 UI",
    app_main_title: "포타람 중고 나눔 마켓",
    app_subtitle_desc: "Photharam Second Market • 지속 가능한 친환경 나눔 장터",
    theme_label: "🎨 일본풍 컬러 테마:",
    theme_mint: "크림 민트",
    theme_cyan: "스카이 블루",
    theme_sage: "소프트 세이지",
    theme_pearl: "클린 펄",
    lang_label: "🌐 언어 선택 / Language:",
    view_phone: "9:16 모바일",
    view_full: "전체화면",
    ticker_news_badge: "마을 소식:",
    ticker_sample_text: "위찬 님 티크 원목 소파 수령 완료 • 🎁 솜자이 이모 토분 10개 무료 나눔 • 🌱 솜차이 삼촌 유기농 완숙 퇴비 15포대 등록",
    app_short_title: "포타람 나눔 마켓",
    app_short_sub: "나눔 & 쓰레기 줄이기",
    search_placeholder: "불판, 원목 소파, 화분, 퇴비, 자전거 검색...",
    story_post_new: "새 스토리",
    hero_tag: "✨ 유휴 물품 마켓 • 포타람",
    hero_title: "집에서 잠자는 물건, 이웃에게는 새로운 가치",
    hero_desc: "생활 쓰레기를 줄이고, 가계를 절약하며 이웃과 따뜻함을 나눕니다.",
    hero_btn_post: "물품 나눔하기",
    hero_btn_map: "가까운 직거래 장소",
    mascot_bubble: "에코 마스코트 🌿<br>포타람에 오신 것을 환영합니다!",
    filter_mode_title: "나눔 방식 필터",
    filter_mode_sub: "유형 선택",
    filter_all: "전체",
    filter_free: "🎁 무료 나눔",
    filter_sell: "🏷️ 이웃 특가",
    filter_swap: "🔄 물물교환",
    categories_title: "카테고리",
    view_all: "전체보기",
    cat_all: "전체",
    cat_restaurant: "식당·주방용품",
    cat_agriculture: "농업·원예",
    cat_furniture: "가구·인테리어",
    cat_electronics: "가전제품",
    cat_general: "생활 잡화",
    listings_title: "등록된 나눔 물품",
    sus_badge: "📊 에코 스코어 및 환경 지표",
    sus_title: "포타람 폐기물 감축 성과",
    sus_waste: "재순환 폐기물",
    sus_items: "나눔 완료 건수",
    sus_savings: "마을 가계 절감액",
    nav_home: "홈",
    nav_market: "마켓",
    nav_map: "동네지도",
    nav_chats: "채팅",
    nav_profile: "프로필",
    market_tab_title: "🛍️ 커뮤니티 나눔 장터",
    market_tab_desc: "포타람 이웃들이 내놓은 좋은 상태의 물건을 살펴보세요",
    map_tab_title: "📍 우리 동네 직거래 지도 (Photharam Map)",
    map_tab_desc: "포타람 지역 내 안전한 직거래 추천 장소",
    map_spots_title: "포타람 주요 거래 장소",
    badge_popular: "인기 직거래 장소",
    chat_tab_title: "💬 이웃 대화 및 거래 조율",
    chat_tab_desc: "이웃과 일정 및 직거래 위치를 상의하세요",
    user_name: "솜시 이모 (치킨라이스 전문점)",
    badge_verified: "인증된 주민",
    user_role: "⭐ 포타람 모범 에코 주민 (골드)",
    user_location: "라차부리 포타람",
    badge_top_sharer: "우수 나눔러",
    badge_eco_reduced: "쓰레기 98kg 감축",
    badge_member_2yr: "2년차 회원",
    stat_my_listings: "내 등록 물품",
    stat_delivered: "나눔 완료",
    stat_favorites: "관심 목록",
    ptab_my_items: "📦 내 물품",
    ptab_favs: "❤️ 찜 목록",
    ptab_admin: "⚙️ 관리자",
    my_items_title: "내가 등록한 나눔 물품",
    btn_add_more: "추가 등록",
    fav_title: "내가 찜한 물품 (Favorites)",
    fav_hint: "하트를 눌러 보관하세요",
    admin_panel_title: "친환경 농민회 관리 센터",
    admin_badge: "관리자",
    admin_tab_stats: "📊 통계",
    admin_tab_queue: "📋 검토 대기",
    admin_tab_items: "📦 물품 관리",
    admin_tab_users: "👥 주민 관리",
    admin_tab_broadcast: "📢 공지 발송",
    admin_stat_users: "인증 주민 수",
    admin_stat_listings: "등록 물품",
    admin_stat_pending: "승인 대기",
    admin_dash_title: "폐기물 절감 및 통계 요약",
    admin_waste_total: "총 순환 폐기물",
    admin_goal_text: "2026 연간 목표의 75% 달성",
    admin_savings_total: "총 가계 절감액",
    admin_savings_desc: "포타람 주민들의 직접적 생활비 절감",
    admin_queue_title: "승인 대기 목록 (Audit Queue)",
    admin_manage_title: "물품 관리, 삭제 및 상단 고정",
    admin_users_title: "주민 신원 확인 및 안전 인증",
    admin_broadcast_title: "긴급 마을 소식 발송 (전광판)",
    btn_send_broadcast: "공지 발송",
    form_title_add: "물품 나눔 등록하기",
    form_subtext: "나눔, 저렴한 판매, 물물교환으로 이웃과 함께하세요",
    form_label_photo: "물품 실물 사진",
    form_upload_title: "사진 선택 또는 카메라 촬영",
    form_upload_sub: "JPG, PNG 지원 또는 프리셋 이미지 선택",
    form_preset_label: "예시 사진 선택:",
    form_label_title: "물품명 / 제목",
    form_label_category: "카테고리",
    form_label_type: "거래 방식",
    form_label_price: "희망 가격 (바트)",
    form_label_location: "거래 희망 장소 (포타람 내)",
    form_label_desc: "물품 상태 및 직거래 안내",
    btn_submit_post: "등록 완료하기",
    chat_online: "포타람 온라인",
    chat_discussing: "거래 문의 물품:",
    call_connecting: "커뮤니티 음성 통화 연결 중...",
    call_mute: "음소거",
    call_end: "통화 종료",
    call_speaker: "스피커폰",
    notif_title: "마을 알림",
    notif_mark_read: "모두 읽음",
    story_community_tag: "포타람 마을 이야기",
    lang_modal_title: "언어 선택 / Select Language",
    lang_modal_sub: "주민과 여행자를 위한 9개 국어 지원",
    theme_modal_title: "일본풍 에코 테마 선택",
    theme_modal_sub: "눈이 편안한 감성 미니멀 에코 컬러"
  },
  de: {
    badge_platform: "Offizielle Plattform Photharam • Japanisches Minimal Eco UI",
    app_main_title: "Photharam Gebrauchtwarenmarkt",
    app_subtitle_desc: "Nachhaltiger Austausch & Abfallvermeidung in unserer Gemeinde",
    theme_label: "🎨 Japanische Farbthemen:",
    theme_mint: "Creme-Minze",
    theme_cyan: "Himmelblau",
    theme_sage: "Salbeigrün",
    theme_pearl: "Perlweiß",
    lang_label: "🌐 Sprache / Language:",
    view_phone: "9:16 Handy",
    view_full: "Vollbild",
    ticker_news_badge: "Gemeindenews:",
    ticker_sample_text: "Hr. Wicharn übernahm Teak-Sofa • 🎁 Fr. Somjai verschenkte 10 Tontöpfe • 🌱 Hr. Somchai stellte 15 Säcke Biokompost bereit",
    app_short_title: "Photharam Öko-Markt",
    app_short_sub: "Teilen & Abfall reduzieren",
    search_placeholder: "Grill, Holzsofa, Blumentöpfe, Kompost suchen...",
    story_post_new: "Neuer Beitrag",
    hero_tag: "✨ Gebrauchtwarenmarkt • Photharam",
    hero_title: "Aus Überschuss neuen Wert für Nachbarn schaffen",
    hero_desc: "Müll reduzieren, Haushaltskosten sparen und gute Dinge in Photharam weitergeben.",
    hero_btn_post: "Gegenstand teilen",
    hero_btn_map: "Treffpunkte in der Nähe",
    mascot_bubble: "Öko-Maskottchen 🌿<br>Willkommen in Photharam!",
    filter_mode_title: "Filter Weitergabe-Art",
    filter_mode_sub: "Art wählen",
    filter_all: "Alle",
    filter_free: "🎁 Kostenlos",
    filter_sell: "🏷️ Günstiger Verkauf",
    filter_swap: "🔄 Tausch",
    categories_title: "Kategorien",
    view_all: "Alle ansehen",
    cat_all: "Alle",
    cat_restaurant: "Gastrobedarf",
    cat_agriculture: "Garten & Landwirtschaft",
    cat_furniture: "Möbel & Wohnen",
    cat_electronics: "Elektronik",
    cat_general: "Alltagsgegenstände",
    listings_title: "Bereit zur Weitergabe",
    sus_badge: "📊 Umwelt-Score & Statistik",
    sus_title: "Photharam Abfallvermeidungs-Statistik",
    sus_waste: "Vermiedener Müll",
    sus_items: "Erfolgreich geteilt",
    sus_savings: "Gemeinde gespart",
    nav_home: "Start",
    nav_market: "Markt",
    nav_map: "Karte",
    nav_chats: "Nachrichten",
    nav_profile: "Profil",
    market_tab_title: "🛍️ Gemeinschafts-Marktplatz",
    market_tab_desc: "Entdecken Sie gut erhaltene Gegenstände von Nachbarn",
    map_tab_title: "📍 Treffpunkte in der Nähe (Photharam Karte)",
    map_tab_desc: "Sichere Übergabeorte im Bezirk Photharam",
    map_spots_title: "Wichtige Übergabepunkte",
    badge_popular: "Sehr beliebt",
    chat_tab_title: "💬 Chat mit Nachbarn",
    chat_tab_desc: "Vereinbaren Sie Details zur Übergabe",
    user_name: "Tante Somsri (Hühnerreis-Lokal)",
    badge_verified: "Verifizierte Bürgerin",
    user_role: "⭐ Photharam Öko-Champion (Gold-Status)",
    user_location: "Photharam, Ratchaburi",
    badge_top_sharer: "Top-Teiler",
    badge_eco_reduced: "98kg Müll gespart",
    badge_member_2yr: "Mitglied seit 2 Jahren",
    stat_my_listings: "Eigene Angebote",
    stat_delivered: "Übergeben",
    stat_favorites: "Gemerkt",
    ptab_my_items: "📦 Eigene Inserate",
    ptab_favs: "❤️ Gemerkt",
    ptab_admin: "⚙️ Admin",
    my_items_title: "Ihre geteilten Gegenstände",
    btn_add_more: "Neues Inserat",
    fav_title: "Gefällt mir (Favoriten)",
    fav_hint: "Tippen Sie aufs Herz zum Speichern",
    admin_panel_title: "Adminbereich Öko-Landwirte",
    admin_badge: "Administrator",
    admin_tab_stats: "📊 Statistik",
    admin_tab_queue: "📋 Prüfung",
    admin_tab_items: "📦 Artikel",
    admin_tab_users: "👥 Mitglieder",
    admin_tab_broadcast: "📢 Rundruf",
    admin_stat_users: "Bürger gesamt",
    admin_stat_listings: "Aktive Artikel",
    admin_stat_pending: "Ausstehend",
    admin_dash_title: "Übersicht Abfallreduzierung",
    admin_waste_total: "Müll im Kreislauf",
    admin_goal_text: "75% des Jahresziels 2026 erreicht",
    admin_savings_total: "Gesamtersparnis",
    admin_savings_desc: "Entlastung der Haushalte in Photharam",
    admin_queue_title: "Zur Prüfung ausstehend",
    admin_manage_title: "Artikel verwalten oder löschen",
    admin_users_title: "Bürgerstatus verifizieren",
    admin_broadcast_title: "Gemeinde-Eilmeldung senden",
    btn_send_broadcast: "Senden",
    form_title_add: "Gegenstand registrieren",
    form_subtext: "Teilen, verkaufen oder tauschen Sie mit Nachbarn",
    form_label_photo: "Produktfoto (Original)",
    form_upload_title: "Tippen zum Hochladen oder Foto aufnehmen",
    form_upload_sub: "JPG, PNG oder Beispielbild wählen",
    form_preset_label: "Oder Vorlage wählen:",
    form_label_title: "Name des Gegenstands",
    form_label_category: "Kategorie",
    form_label_type: "Weitergabe-Art",
    form_label_price: "Preis (THB)",
    form_label_location: "Übergabeort in Photharam",
    form_label_desc: "Zustand & Beschreibung",
    btn_submit_post: "Inserat veröffentlichen",
    chat_online: "Online in Photharam",
    chat_discussing: "Im Gespräch über:",
    call_connecting: "Verbindung zum Sprachanruf...",
    call_mute: "Stumm",
    call_end: "Auflegen",
    call_speaker: "Lautsprecher",
    notif_title: "Gemeinde-Benachrichtigungen",
    notif_mark_read: "Alle als gelesen",
    story_community_tag: "Geschichten aus Photharam",
    lang_modal_title: "Sprache wählen / Select Language",
    lang_modal_sub: "9 Sprachen für Bewohner und Besucher",
    theme_modal_title: "Japanisches Farbthema wählen",
    theme_modal_sub: "Japanese Minimal Eco UI Farbpalette"
  },
  fr: {
    badge_platform: "Plateforme Officielle Photharam • UI Éco Minimaliste Japonaise",
    app_main_title: "Marché de Seconde Main de Photharam",
    app_subtitle_desc: "Partage communautaire & réduction des déchets à Photharam",
    theme_label: "🎨 Thèmes Japonais:",
    theme_mint: "Crème Menthe",
    theme_cyan: "Bleu Ciel",
    theme_sage: "Sauge Douce",
    theme_pearl: "Perle Épurée",
    lang_label: "🌐 Langue / Language:",
    view_phone: "Mobile 9:16",
    view_full: "Plein écran",
    ticker_news_badge: "Actualités locales:",
    ticker_sample_text: "M. Wicharn a récupéré le canapé en teck • 🎁 Tante Somjai a offert 10 pots en terre cuite • 🌱 Oncle Somchai a ajouté 15 sacs de compost bio",
    app_short_title: "Photharam Éco-Market",
    app_short_sub: "Partage & Zéro Déchet",
    search_placeholder: "Rechercher barbecue, canapé, pots, vélo...",
    story_post_new: "Publier",
    hero_tag: "✨ Marché d'Occasion • District de Photharam",
    hero_title: "Transformez vos surplus en valeur pour le voisinage",
    hero_desc: "Réduisez les déchets, économisez et partagez des objets de qualité à Photharam.",
    hero_btn_post: "Partager un objet",
    hero_btn_map: "Points de rencontre proches",
    mascot_bubble: "Mascotte Écolo 🌿<br>Bienvenue à Photharam !",
    filter_mode_title: "Filtrer par mode de transmission",
    filter_mode_sub: "Choisir un type",
    filter_all: "Tous",
    filter_free: "🎁 Gratuit",
    filter_sell: "🏷️ Vente amicale",
    filter_swap: "🔄 Échange",
    categories_title: "Catégories",
    view_all: "Voir tout",
    cat_all: "Tous",
    cat_restaurant: "Matériel Restauration",
    cat_agriculture: "Jardinage & Agriculture",
    cat_furniture: "Maison & Mobilier",
    cat_electronics: "Électroménager",
    cat_general: "Objets divers",
    listings_title: "Objets prêts à être transmis",
    sus_badge: "📊 Score Écologique & Impact",
    sus_title: "Bilan de Réduction des Déchets",
    sus_waste: "Déchets recyclés",
    sus_items: "Objets transmis",
    sus_savings: "Économisé par la ville",
    nav_home: "Accueil",
    nav_market: "Marché",
    nav_map: "Proche",
    nav_chats: "Messages",
    nav_profile: "Profil",
    market_tab_title: "🛍️ Marché Communautaire",
    market_tab_desc: "Découvrez les objets d'occasion partagés par vos voisins",
    map_tab_title: "📍 Carte des points de rencontre (Photharam Map)",
    map_tab_desc: "Lieux sûrs de remise en main propre à Photharam",
    map_spots_title: "Points de remise principaux",
    badge_popular: "Très fréquenté",
    chat_tab_title: "💬 Discussion & Accord avec le voisin",
    chat_tab_desc: "Convenez de l'heure et du lieu de rencontre",
    user_name: "Tante Somsri (Resto Riz Poulet)",
    badge_verified: "Citoyenne Vérifiée",
    user_role: "⭐ Championne Éco de Photharam (Rang Or)",
    user_location: "Photharam, Ratchaburi",
    badge_top_sharer: "Super Partageuse",
    badge_eco_reduced: "98kg de déchets évités",
    badge_member_2yr: "Membre depuis 2 ans",
    stat_my_listings: "Mes annonces",
    stat_delivered: "Objets donnés",
    stat_favorites: "Favoris",
    ptab_my_items: "📦 Mes annonces",
    ptab_favs: "❤️ Favoris",
    ptab_admin: "⚙️ Admin",
    my_items_title: "Vos objets en partage",
    btn_add_more: "Ajouter",
    fav_title: "Objets favoris (Favorites)",
    fav_hint: "Touchez le cœur pour sauvegarder",
    admin_panel_title: "Panneau Admin Agriculteurs Verts",
    admin_badge: "Administrateur",
    admin_tab_stats: "📊 Stats",
    admin_tab_queue: "📋 Validation",
    admin_tab_items: "📦 Objets",
    admin_tab_users: "👥 Membres",
    admin_tab_broadcast: "📢 Diffusion",
    admin_stat_users: "Membres inscrits",
    admin_stat_listings: "Annonces actives",
    admin_stat_pending: "En attente",
    admin_dash_title: "Bilan de réduction des déchets",
    admin_waste_total: "Total déchets évités",
    admin_goal_text: "75% de l'objectif annuel 2026 atteint",
    admin_savings_total: "Économies réalisées",
    admin_savings_desc: "Réduction directe des dépenses des foyers",
    admin_queue_title: "Objets en attente d'approbation",
    admin_manage_title: "Gérer ou supprimer les annonces",
    admin_users_title: "Vérifier le statut des résidents",
    admin_broadcast_title: "Diffuser une annonce prioritaire",
    btn_send_broadcast: "Diffuser",
    form_title_add: "Publier un objet à partager",
    form_subtext: "Partagez, vendez à petit prix ou échangez avec vos voisins",
    form_label_photo: "Photo réelle de l'objet",
    form_upload_title: "Appuyez pour choisir ou prendre une photo",
    form_upload_sub: "JPG, PNG ou choisir un modèle",
    form_preset_label: "Ou choisir un modèle :",
    form_label_title: "Nom de l'objet / Titre",
    form_label_category: "Catégorie",
    form_label_type: "Mode de transmission",
    form_label_price: "Prix (THB)",
    form_label_location: "Lieu de rencontre à Photharam",
    form_label_desc: "État & Détails de l'objet",
    btn_submit_post: "Confirmer et publier",
    chat_online: "En ligne à Photharam",
    chat_discussing: "En négociation pour :",
    call_connecting: "Connexion à l'appel vocal...",
    call_mute: "Muet",
    call_end: "Raccrocher",
    call_speaker: "Haut-parleur",
    notif_title: "Notifications communautaires",
    notif_mark_read: "Tout marquer lu",
    story_community_tag: "Histoire de Photharam",
    lang_modal_title: "Choisir la langue / Select Language",
    lang_modal_sub: "9 langues disponibles pour les résidents et visiteurs",
    theme_modal_title: "Choisir un thème japonais",
    theme_modal_sub: "Palette de couleurs Japanese Minimal Eco UI"
  },
  es: {
    badge_platform: "Plataforma Oficial Photharam • UI Eco Minimalista Japonés",
    app_main_title: "Mercado de Segunda Mano de Photharam",
    app_subtitle_desc: "Compartir comunitario y reducción de residuos en Photharam",
    theme_label: "🎨 Paleta Japonesa:",
    theme_mint: "Crema Menta",
    theme_cyan: "Azul Cielo",
    theme_sage: "Verde Salvia",
    theme_pearl: "Blanco Perla",
    lang_label: "🌐 Idioma / Language:",
    view_phone: "Móvil 9:16",
    view_full: "Pantalla completa",
    ticker_news_badge: "Noticias locales:",
    ticker_sample_text: "Sr. Wicharn recogió sofá de teca • 🎁 Tía Somjai regaló 10 macetas de barro • 🌱 Tío Somchai añadió 15 sacos de compost orgánico",
    app_short_title: "Photharam Eco-Market",
    app_short_sub: "Compartir & Reducir Residuos",
    search_placeholder: "Buscar parrilla, sofá de madera, macetas, bicicleta...",
    story_post_new: "Nueva historia",
    hero_tag: "✨ Mercado de Excedentes • Distrito de Photharam",
    hero_title: "Transforma tus cosas en desuso en valor para tus vecinos",
    hero_desc: "Reduce residuos, ahorra dinero y comparte artículos de calidad en Photharam.",
    hero_btn_post: "Compartir artículo",
    hero_btn_map: "Puntos de encuentro cercanos",
    mascot_bubble: "Mascota Ecológica 🌿<br>¡Bienvenidos a Photharam!",
    filter_mode_title: "Filtrar modalidad",
    filter_mode_sub: "Elegir formato",
    filter_all: "Todos",
    filter_free: "🎁 Gratis",
    filter_sell: "🏷️ Venta amigable",
    filter_swap: "🔄 Intercambio",
    categories_title: "Categorías de la comunidad",
    view_all: "Ver todos",
    cat_all: "Todos",
    cat_restaurant: "Equipo de hostelería",
    cat_agriculture: "Agricultura & Jardinería",
    cat_furniture: "Muebles & Hogar",
    cat_electronics: "Electrodomésticos",
    cat_general: "Artículos generales",
    listings_title: "Listos para compartir",
    sus_badge: "📊 Impacto y Puntuación Ecológica",
    sus_title: "Estadísticas de Reducción de Residuos",
    sus_waste: "Residuos reutilizados",
    sus_items: "Entregas realizadas",
    sus_savings: "Ahorro comunitario",
    nav_home: "Inicio",
    nav_market: "Mercado",
    nav_map: "Cerca",
    nav_chats: "Mensajes",
    nav_profile: "Perfil",
    market_tab_title: "🛍️ Mercado Comunitario",
    market_tab_desc: "Explora artículos de calidad compartidos por tus vecinos",
    map_tab_title: "📍 Mapa de puntos de encuentro (Photharam Map)",
    map_tab_desc: "Lugares seguros de entrega en el distrito de Photharam",
    map_spots_title: "Puntos clave de encuentro",
    badge_popular: "Más concurrido",
    chat_tab_title: "💬 Chat y acuerdo con vecinos",
    chat_tab_desc: "Acuerda la hora y el lugar de entrega con tu vecino",
    user_name: "Tía Somsri (Restaurante de Pollo)",
    badge_verified: "Vecina Verificada",
    user_role: "⭐ Campeona Eco de Photharam (Nivel Oro)",
    user_location: "Photharam, Ratchaburi",
    badge_top_sharer: "Gran Colaboradora",
    badge_eco_reduced: "98kg de basura evitados",
    badge_member_2yr: "Miembro desde hace 2 años",
    stat_my_listings: "Mis anuncios",
    stat_delivered: "Artículos donados",
    stat_favorites: "Favoritos",
    ptab_my_items: "📦 Mis anuncios",
    ptab_favs: "❤️ Favoritos",
    ptab_admin: "⚙️ Panel Admin",
    my_items_title: "Tus artículos compartidos",
    btn_add_more: "Publicar nuevo",
    fav_title: "Artículos guardados (Favorites)",
    fav_hint: "Toca el corazón para guardar",
    admin_panel_title: "Panel de Administración Agricultores Verdes",
    admin_badge: "Administrador",
    admin_tab_stats: "📊 Estadísticas",
    admin_tab_queue: "📋 Auditoría",
    admin_tab_items: "📦 Artículos",
    admin_tab_users: "👥 Vecinos",
    admin_tab_broadcast: "📢 Aviso general",
    admin_stat_users: "Vecinos registrados",
    admin_stat_listings: "Artículos activos",
    admin_stat_pending: "Pendientes",
    admin_dash_title: "Resumen de reducción de residuos",
    admin_waste_total: "Total residuos evitados",
    admin_goal_text: "75% de la meta anual 2026 alcanzada",
    admin_savings_total: "Ahorro total comunitario",
    admin_savings_desc: "Reducción directa de gastos en los hogares",
    admin_queue_title: "Artículos en espera de aprobación",
    admin_manage_title: "Gestionar, eliminar o destacar artículos",
    admin_users_title: "Verificar identidad de vecinos",
    admin_broadcast_title: "Enviar aviso urgente a la comunidad",
    btn_send_broadcast: "Enviar aviso",
    form_title_add: "Publicar artículo para compartir",
    form_subtext: "Comparte, vende barato o intercambia con vecinos",
    form_label_photo: "Foto real del producto",
    form_upload_title: "Toca para elegir foto o tomar fotografía",
    form_upload_sub: "Soporta JPG, PNG o elige una muestra",
    form_preset_label: "O selecciona una muestra:",
    form_label_title: "Nombre del artículo / Título",
    form_label_category: "Categoría",
    form_label_type: "Tipo de traspaso",
    form_label_price: "Precio (THB)",
    form_label_location: "Punto de encuentro en Photharam",
    form_label_desc: "Estado del artículo y condiciones",
    btn_submit_post: "Confirmar y publicar",
    chat_online: "En línea en Photharam",
    chat_discussing: "Conversando sobre:",
    call_connecting: "Conectando llamada de voz vecinal...",
    call_mute: "Silenciar",
    call_end: "Colgar",
    call_speaker: "Altavoz",
    notif_title: "Notificaciones vecinales",
    notif_mark_read: "Marcar todo leído",
    story_community_tag: "Historia de la comunidad de Photharam",
    lang_modal_title: "Seleccionar idioma / Select Language",
    lang_modal_sub: "9 idiomas disponibles para vecinos y visitantes",
    theme_modal_title: "Seleccionar tema japonés",
    theme_modal_sub: "Paleta de diseño Japanese Minimal Eco UI"
  },
  my: {
    badge_platform: "ဖိုထာရမ်မြို့နယ် တရားဝင်မျှဝေရေးစင်တာ • ဂျပန်အနုစိတ် သဘာဝပတ်ဝန်းကျင် UI",
    app_main_title: "ဖိုထာရမ် ရပ်ရွာလက်ကျန်ပစ္စည်း လဲလှယ်ဈေး",
    app_subtitle_desc: "Photharam Second Market • သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေး မျှဝေဈေး",
    theme_label: "🎨 ဂျပန်အရောင်လိုင်းများ:",
    theme_mint: "ခရင်မ် မင့်",
    theme_cyan: "ကောင်းကင်ပြာ",
    theme_sage: "စိမ်းနုရောင်",
    theme_pearl: "ပုလဲဖြူ",
    lang_label: "🌐 ဘာသာစကား / Language:",
    view_phone: "၉:၁၆ ဖုန်း",
    view_full: "မျက်နှာပြင်အပြည့်",
    ticker_news_badge: "ရပ်ရွာသတင်း:",
    ticker_sample_text: "ဦးဝိချန်း ကျွန်းသစ်ဆိုဖာ လွှဲပြောင်းရယူပြီး • 🎁 ဒေါ်စုံကျိုင် မြေအိုး ၁၀ လုံး အခမဲ့ပေးလှူ • 🌱 ဦးစုံချိုင်း သဘာဝမြေဆွေး ၁၅ အိတ် ထပ်ဖြည့်",
    app_short_title: "ဖိုထာရမ် မျှဝေဈေး",
    app_short_sub: "ဝေမျှခြင်းနှင့် စွန့်ပစ်ပစ္စည်းလျှော့ချရေး",
    search_placeholder: "အကင်အိုး၊ သစ်သားဆိုဖာ၊ အပင်အိုး၊ မြေဆွေး၊ စက်ဘီး ရှာဖွေပါ...",
    story_post_new: "အသစ်တင်ရန်",
    hero_tag: "✨ ပိုလျှံပစ္စည်းများ ဈေးကွက် • ဖိုထာရမ်",
    hero_title: "အိမ်ရှိပိုလျှံပစ္စည်းများကို အိမ်နီးချင်းများအတွက် တန်ဖိုးဖြစ်စေပါ",
    hero_desc: "အမှိုက်လျှော့ချပါ၊ ကုန်ကျစရိတ်သက်သာစေပါ၊ ဖိုထာရမ်တွင် ကောင်းမွန်သောပစ္စည်းများကို ဝေမျှပါ။",
    hero_btn_post: "ပစ္စည်းမျှဝေရန်",
    hero_btn_map: "အနီးဆုံးတွေ့ဆုံရာနေရာများ",
    mascot_bubble: "သဘာဝချစ်သူလေး 🌿<br>ဖိုထာရမ်မှ ကြိုဆိုပါသည်!",
    filter_mode_title: "ဝေမျှမှုပုံစံ စစ်ထုတ်ချက်",
    filter_mode_sub: "အမျိုးအစားရွေးချယ်ပါ",
    filter_all: "အားလုံး",
    filter_free: "🎁 အခမဲ့ပေး",
    filter_sell: "🏷️ ဈေးသက်သာရောင်း",
    filter_swap: "🔄 ပစ္စည်းချင်းလဲ",
    categories_title: "ရပ်ရွာပစ္စည်း အမျိုးအစားများ",
    view_all: "အားလုံးကြည့်",
    cat_all: "အားလုံး",
    cat_restaurant: "စားသောက်ဆိုင်သုံး",
    cat_agriculture: "စိုက်ပျိုးရေးနှင့် ဥယျာဉ်",
    cat_furniture: "ပရိဘောဂနှင့် အိမ်သုံး",
    cat_electronics: "လျှပ်စစ်ပစ္စည်းများ",
    cat_general: "အထွေထွေသုံး",
    listings_title: "ဝေမျှရန်အဆင်သင့်ပစ္စည်းများ",
    sus_badge: "📊 သဘာဝပတ်ဝန်းကျင် ထိန်းသိမ်းမှုရလဒ်",
    sus_title: "ဖိုထာရမ် အမှိုက်လျှော့ချမှု စာရင်းဇယား",
    sus_waste: "ပြန်လည်သုံးအမှိုက်",
    sus_items: "လွှဲပြောင်းပြီးအရေအတွက်",
    sus_savings: "ရပ်ရွာအတွက် ချွေတာငွေ",
    nav_home: "ပင်မ",
    nav_market: "ဈေး",
    nav_map: "အနီးနား",
    nav_chats: "မက်ဆေ့ချ်",
    nav_profile: "ကိုယ်ရေး",
    market_tab_title: "🛍️ ရပ်ရွာဝေမျှဈေး",
    market_tab_desc: "အိမ်နီးချင်းများ မျှဝေထားသော ပစ္စည်းကောင်းများကို ကြည့်ရှုပါ",
    map_tab_title: "📍 အနီးနား ပစ္စည်းယူရန်နေရာများ (Photharam Map)",
    map_tab_desc: "ဖိုထာရမ်မြို့နယ်အတွင်း စိတ်ချရသော တွေ့ဆုံရာနေရာများ",
    map_spots_title: "အဓိက တွေ့ဆုံရာနေရာများ",
    badge_popular: "လူကြိုက်အများဆုံး",
    chat_tab_title: "💬 အိမ်နီးချင်းနှင့် ဆက်သွယ်ရန်",
    chat_tab_desc: "ပစ္စည်းယူမည့်အချိန်နှင့် နေရာကို ညှိနှိုင်းပါ",
    user_name: "ဒေါ်စုံဆရီ (ကြက်သားထမင်းဆိုင်)",
    badge_verified: "အတည်ပြုပြီး အဖွဲ့ဝင်",
    user_role: "⭐ ဖိုထာရမ် ထူးချွန်အဖွဲ့ဝင် (ရွှေတံဆိပ်)",
    user_location: "ဖိုထာရမ်မြို့နယ်၊ ရတ်ချ်ဘူရီ",
    badge_top_sharer: "ထူးချွန်ဝေမျှသူ",
    badge_eco_reduced: "အမှိုက် ၉၈ ကီလို လျှော့ချပြီး",
    badge_member_2yr: "အဖွဲ့ဝင် သက်တမ်း ၂ နှစ်",
    stat_my_listings: "မိမိတင်ထားသောစာရင်း",
    stat_delivered: "လွှဲပြောင်းပြီး",
    stat_favorites: "စိတ်ကြိုက်များ",
    ptab_my_items: "📦 တင်ထားသောပစ္စည်းများ",
    ptab_favs: "❤️ စိတ်ကြိုက်များ",
    ptab_admin: "⚙️ စီမံခန့်ခွဲမှု",
    my_items_title: "သင်ဝေမျှထားသော ပစ္စည်းစာရင်း",
    btn_add_more: "အသစ်တင်ရန်",
    fav_title: "သိမ်းဆည်းထားသော ပစ္စည်းများ (Favorites)",
    fav_hint: "သိမ်းဆည်းရန် အသည်းပုံကိုနှိပ်ပါ",
    admin_panel_title: "သဘာဝစိုက်ပျိုးသူများ အဖွဲ့ စီမံခန့်ခွဲမှု",
    admin_badge: "စီမံခန့်ခွဲသူ",
    admin_tab_stats: "📊 စာရင်းဇယား",
    admin_tab_queue: "📋 စိစစ်ဆဲ",
    admin_tab_items: "📦 ပစ္စည်းများ",
    admin_tab_users: "👥 အဖွဲ့ဝင်များ",
    admin_tab_broadcast: "📢 အသိပေးချက်",
    admin_stat_users: "စုစုပေါင်းအဖွဲ့ဝင်",
    admin_stat_listings: "ဖွင့်ထားသောစာရင်း",
    admin_stat_pending: "စောင့်ဆိုင်းဆဲ",
    admin_dash_title: "အမှိုက်လျှော့ချမှု အကျဉ်းချုပ်",
    admin_waste_total: "စုစုပေါင်း အမှိုက်လျှော့ချမှု",
    admin_goal_text: "၂၀၂၆ ရည်မှန်းချက်၏ ၇၅% ပြီးမြောက်",
    admin_savings_total: "စုစုပေါင်း ချွေတာငွေ",
    admin_savings_desc: "ရပ်ရွာလူထု၏ ကုန်ကျစရိတ်ကို တိုက်ရိုက်သက်သာစေခြင်း",
    admin_queue_title: "အတည်ပြုရန် စောင့်ဆိုင်းနေသောပစ္စည်းများ",
    admin_manage_title: "ပစ္စည်းများ ပြင်ဆင်/ဖျက်သိမ်းရန်",
    admin_users_title: "အဖွဲ့ဝင် စိစစ်ခြင်း",
    admin_broadcast_title: "ရပ်ရွာသို့ သတင်းအရေးပေါ်လွှင့်ရန်",
    btn_send_broadcast: "သတင်းလွှင့်ရန်",
    form_title_add: "ပစ္စည်းအသစ် မှတ်ပုံတင်ရန်",
    form_subtext: "အိမ်နီးချင်းများနှင့် ဝေမျှရန်၊ ရောင်းရန် သို့မဟုတ် လဲလှယ်ရန်",
    form_label_photo: "ပစ္စည်းဓာတ်ပုံ (အစစ်အမှန်)",
    form_upload_title: "ဓာတ်ပုံရွေးရန် သို့မဟုတ် ရိုက်ယူရန် နှိပ်ပါ",
    form_upload_sub: "JPG, PNG ဖိုင်များ ရရှိနိုင်ပါသည်",
    form_preset_label: "သို့မဟုတ် နမူနာပုံရွေးပါ:",
    form_label_title: "ပစ္စည်းအမည် / ခေါင်းစဉ်",
    form_label_category: "အမျိုးအစား",
    form_label_type: "ဝေမျှမှုပုံစံ",
    form_label_price: "ဈေးနှုန်း (ဘတ်)",
    form_label_location: "တွေ့ဆုံယူရမည့်နေရာ (ဖိုထာရမ်အတွင်း)",
    form_label_desc: "ပစ္စည်းအခြေအနေနှင့် ညွှန်ကြားချက်",
    btn_submit_post: "တင်ရန် အတည်ပြုပါ",
    chat_online: "ဖိုထာရမ်တွင် အွန်လိုင်းရှိနေသည်",
    chat_discussing: "ဆွေးနွေးနေသောပစ္စည်း:",
    call_connecting: "အသံဖြင့် ဖုန်းခေါ်ဆိုနေပါသည်...",
    call_mute: "အသံပိတ်",
    call_end: "ဖုန်းချပါ",
    call_speaker: "စပီကာ",
    notif_title: "ရပ်ရွာ အသိပေးချက်များ",
    notif_mark_read: "အားလုံးဖတ်ပြီး",
    story_community_tag: "ဖိုထာရမ် ရပ်ရွာဇာတ်လမ်း",
    lang_modal_title: "ဘာသာစကား ရွေးချယ်ပါ / Select Language",
    lang_modal_sub: "ရပ်ရွာနှင့် ဧည့်သည်များအတွက် ဘာသာစကား ၉ မျိုး ရရှိနိုင်ပါသည်",
    theme_modal_title: "ဂျပန် သဘာဝအရောင်ကို ရွေးပါ",
    theme_modal_sub: "မျက်စိအေးချမ်းစေသော Japanese Minimal Eco UI အရောင်"
  }
};

let currentLang = localStorage.getItem("app_lang") || "th";

// --- PRODUCT DATA WITH BILINGUAL TITLES & DESCRIPTIONS ---
let products = [
  {
    id: 1,
    title_th: "เตาหมูกระทะและเตาอั้งโล่สภาพดี",
    title_en: "Brass Moo-Kratha Grill & Clay Stove Set",
    title_ja: "真鍮製ムーガタ鍋＆七輪セット",
    category: "restaurant",
    type: "sell",
    status: "active",
    price: 350,
    location: "ต.โพธาราม (ใกล้ตลาดริมน้ำ)",
    distance: "0.8 km",
    lat: 13.6922,
    lng: 99.8530,
    image: "public/images/moo_kratha_grill_1786605664565.jpg",
    desc_th: "เตาหมูกระทะทองเหลืองพร้อมกระทะ สภาพดี 88% ทำความสะอาดเรียบร้อย แถมถ่านหุงต้มไร้ควันให้อีก 2 ถุง ย้ายร้านอาหารเลยนำมาแบ่งปันราคามิตรภาพครับ",
    desc_en: "88% condition brass Korean/Thai BBQ grill set with clay stove. Cleaned thoroughly and comes with 2 bags of smokeless charcoal.",
    desc_ja: "状態88%の真鍮製ムーガタ鍋と七輪のセット。綺麗に清掃済み、無煙木炭2袋付き。",
    seller: {
      name: "เฮียโต้ง (ร้านหมูกระทะโพธาราม)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      role: "ร้านค้าในชุมชน • ตอบแชทรวดเร็ว"
    },
    isMine: false,
    fav: false
  },
  {
    id: 2,
    title_th: "ชุดโซฟาไม้สักวินเทจ 3 ชิ้น",
    title_en: "Vintage Genuine Teak Wood Sofa Set (3-Piece)",
    title_ja: "ヴィンテージ本チーク材ソファ 3点セット",
    category: "furniture",
    type: "sell",
    status: "active",
    price: 1200,
    location: "ต.บ้านเลือก อ.โพธาราม",
    distance: "2.4 km",
    lat: 13.6780,
    lng: 99.8650,
    image: "public/images/teak_wooden_sofa_1786605782233.jpg",
    desc_th: "โซฟาไม้สักทองแท้ แข็งแรง ทนทานมาก พร้อมเบาะนุ่มสภาพดี 85% ย้ายบ้านใหม่ไม่มีพื้นที่วาง ขอส่งต่อให้เพื่อนบ้านนำไปใช้งานต่อครับ",
    desc_en: "Golden solid teak wood sofa set with comfy cushions, 85% condition. Great for living room or patio. Moving house so passing it on.",
    desc_ja: "天然本チーク無垢材の頑丈なヴィンテージソファ。クッション付きで状態85%。引越しのためお譲りします。",
    seller: {
      name: "คุณวิชาญ (ข้าราชการเกษียณ)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      role: "ประชาชนในโพธาราม • ยืนยันตัวตนแล้ว"
    },
    isMine: false,
    fav: true
  },
  {
    id: 3,
    title_th: "กระถางดินเผาและกระถางปลูกผัก (10 ใบ)",
    title_en: "Terracotta Clay Plant Pots (Set of 10)",
    title_ja: "テラコッタ素焼き植木鉢 10個セット (無料)",
    category: "agriculture",
    type: "free",
    status: "active",
    price: 0,
    location: "ต.คลองตาคต อ.โพธาราม",
    distance: "1.1 km",
    lat: 13.7050,
    lng: 99.8400,
    image: "public/images/clay_plant_pots_1786606152405.jpg",
    desc_th: "ชุดกระถางดินเผาทรงสวย 10 ใบ พร้อมถาดรอง ไม่แตกไม่ร้าว ไม่ได้ใช้แล้วอยากแบ่งปันฟรีให้ผู้ที่ชอบปลูกต้นไม้หรือผักสวนครัวครับ มารับเองได้เลย",
    desc_en: "10 beautiful terracotta clay pots with saucers. No cracks. Giving away for free to gardening lovers in Photharam!",
    desc_ja: "素焼きの植木鉢10個セット（受け皿付き）。ヒビや割れなし。家庭菜園や観葉植物が好きな方へ無料でお譲りします。",
    seller: {
      name: "ป้าสมใจ (สวนผักอินทรีย์)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      role: "เกษตรกรชุมชน • ใจดีแบ่งปัน"
    },
    isMine: false,
    fav: false
  },
  {
    id: 4,
    title_th: "ตู้แช่เครื่องดื่มกระจก 2 ประตู",
    title_en: "Commercial 2-Door Beverage Cooler",
    title_ja: "業務用2枚ガラス扉 飲料冷却ショーケース",
    category: "electronics",
    type: "sell",
    status: "active",
    price: 3500,
    location: "ต.เจ็ดเสมียน อ.โพธาราม",
    distance: "4.2 km",
    lat: 13.6540,
    lng: 99.8680,
    image: "public/images/beverage_cooler_1786606176987.jpg",
    desc_th: "ตู้แช่เย็นสำหรับร้านค้าหรือร้านอาหาร ประหยัดไฟ ทำความเย็นเร็ว ไฟส่องสว่างใช้งานปกติทั้งหมด สภาพสวย ปิดกิจการร้านชำเลยแบ่งปันราคาถูก",
    desc_en: "Energy-efficient double glass door beverage display cooler. Perfect cooling, internal LED lights fully working. Friendly price.",
    desc_ja: "店舗・飲食店用2枚扉ショーケース。省エネ、急速冷却、庫内LED照明完備。お店の閉店に伴いお安くお譲りします。",
    seller: {
      name: "เจ๊นวล (โชห่วยเจ็ดเสมียน)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      role: "ร้านค้าชุมชน • สมาชิก 2 ปี"
    },
    isMine: false,
    fav: false
  },
  {
    id: 5,
    title_th: "ปุ๋ยคอกหมักชีวภาพมูลไก่/มูลวัว (15 กระสอบ)",
    title_en: "Organic Fermented Bio-Compost Fertilizer",
    title_ja: "完熟発酵有機バイオ堆肥 (15袋)",
    category: "agriculture",
    type: "sell",
    status: "active",
    price: 35,
    location: "ต.สร้อยฟ้า อ.โพธาราม",
    distance: "3.0 km",
    lat: 13.7120,
    lng: 99.8350,
    image: "public/images/organic_compost_1786606419647.jpg",
    desc_th: "ปุ๋ยคอกหมักอินทรีย์ธรรมชาติ 100% บรรจุกระสอบละ 15 กก. ช่วยบำรุงดิน ผักสวนครัวงามมาก มีเหลือจากการทำสวน 15 กระสอบ แบ่งปันราคากันเอง",
    desc_en: "100% natural organic compost fertilizer (15kg/sack). Great for soil enrichment and organic vegetables. 15 sacks left.",
    desc_ja: "100%天然発酵堆肥（1袋15kg）。土壌改良と有機野菜作りに最適。余剰分15袋をお手頃価格で。",
    seller: {
      name: "ลุงสมชาย (ฟาร์มเกษตรรักษ์โลก)",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      role: "กลุ่มเกษตรกรโพธาราม"
    },
    isMine: false,
    fav: true
  },
  {
    id: 6,
    title_th: "จักรยานแม่บ้านญี่ปุ่นพร้อมตะกร้า",
    title_en: "Japanese Classic City Bike with Front Basket",
    title_ja: "日本製ママチャリ クラシック自転車 (前カゴ付き)",
    category: "general",
    type: "sell",
    status: "active",
    price: 850,
    location: "ต.โพธาราม (ใกล้สถานีรถไฟ)",
    distance: "0.5 km",
    lat: 13.6958,
    lng: 99.8515,
    image: "public/images/japanese_bicycle_1786606447555.jpg",
    desc_th: "จักรยานแม่บ้านทรงวินเทจสีเขียวสวย มีตะกร้าหวายด้านหน้า ปั่นเบาสบาย ยางใหม่ เบรกดี เหมาะปั่นไปตลาดขี่เล่นในเมืองโพธารามครับ",
    desc_en: "Classic green Japanese city commuter bicycle with front basket. Smooth ride, new tires, responsive brakes. Ideal for town cruising.",
    desc_ja: "グリーンがお洒落な日本式クラシックママチャリ。前カゴ付き、軽快な乗り心地、新品タイヤ、ブレーキ良好。市場への買い物に最適。",
    seller: {
      name: "คุณป้าสมศรี (ร้านข้าวมันไก่)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      role: "สมาชิกดีเด่นชุมชนโพธาราม"
    },
    isMine: true,
    featured: true,
    fav: false
  },
  {
    id: 7,
    title_th: "เครื่องตัดหญ้าสะพายหลัง 2 จังหวะ",
    title_en: "2-Stroke Backpack Grass Trimmer",
    title_ja: "2ストローク背負い式草刈機",
    category: "agriculture",
    type: "sell",
    status: "pending",
    featured: false,
    price: 650,
    location: "ต.ดอนทราย อ.โพธาราม",
    distance: "3.2 km",
    lat: 13.6700,
    lng: 99.8400,
    image: "public/images/grass_trimmer.jpg",
    desc_th: "เครื่องยังสตาร์ทติดง่าย ใช้งานได้ปกติ เปลี่ยนหัวเอ็นตัดหญ้าใหม่เรียบร้อย ส่งต่อเพราะซื้อรุ่นใหม่ครับ",
    desc_en: "Starts easily, works normally. New trimmer line fitted. Passing it on after buying a newer model.",
    desc_ja: "始動性良好、正常に動作します。新しい草刈刃に交換済み。",
    seller: {
      name: "ช่างเดช (ช่างยนต์ดอนทราย)",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      role: "ช่างชุมชน • รอการอนุมัติ"
    },
    isMine: false,
    fav: false
  },
  {
    id: 8,
    title_th: "เก้าอี้พับสนามผ้าแคนวาส 2 ตัว",
    title_en: "Canvas Outdoor Camping Chairs (Pair)",
    title_ja: "キャンバス製アウトドア折りたたみチェア 2脚",
    category: "furniture",
    type: "free",
    status: "pending",
    featured: false,
    price: 0,
    location: "ต.โพธาราม (ใกล้สถานีรถไฟ)",
    distance: "1.1 km",
    lat: 13.6910,
    lng: 99.8520,
    image: "public/images/camping_chairs.jpg",
    desc_th: "เก้าอี้พับสภาพดี เหมาะนำไปนั่งตกปลาริมแม่น้ำแม่กลอง แจกฟรีให้เพื่อนบ้านครับ",
    desc_en: "Good condition foldable camping chairs, great for river fishing. Giving away free to neighbors.",
    desc_ja: "状態の良い折りたたみチェア。川沿いでの釣りに最適。無料で差し上げます。",
    seller: {
      name: "ครูพรพิมล (โรงเรียนโพธาราม)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150",
      role: "ครูจิตอาสา • รอการอนุมัติ"
    },
    isMine: false,
    fav: false
  }
];

let chatThreads = [
  {
    id: 1,
    productId: 1,
    name: "เฮียโต้ง (ร้านหมูกระทะ)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    lastMsg: "เตายังอยู่นะครับ มารับที่ตลาดริมน้ำได้เลย",
    time: "10:15 น.",
    messages: [
      { sender: "them", text: "สวัสดีครับ ยินดีแบ่งปันเตาหมูกระทะทองเหลืองครับ สนใจสอบถามได้เลยครับ" },
      { sender: "me", text: "สวัสดีครับ เตาหมูกระทะยังอยู่ไหมครับ ขอลดเหลือ 300 บาทได้ไหมครับ?" },
      { sender: "them", text: "ได้ครับ 300 บาทแบ่งปันกันไป มารับที่ตลาดริมน้ำโพธารามได้เลยครับ" }
    ]
  },
  {
    id: 2,
    productId: 3,
    name: "ป้าสมใจ (สวนผักอินทรีย์)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    lastMsg: "กระถางยังอยู่จ้า มาเลือกรับได้เลยนะ",
    time: "เมื่อวาน",
    messages: [
      { sender: "them", text: "ยินดีแจกฟรีให้คนที่รักต้นไม้ค่ะ มี 10 ใบครบชุดจ้า" },
      { sender: "me", text: "ป้าครับ พรุ่งนี้ช่วงบ่ายแวะไปรับที่ต.คลองตาคต สะดวกไหมครับ?" },
      { sender: "them", text: "สะดวกจ้า มาถึงแล้วโทรหาป้าได้เลยนะ" }
    ]
  }
];

let activeChatThreadId = 1;
let selectedCategory = "all";
let selectedType = "all";
let marketCategory = "all";
let searchQuery = "";
let callSeconds = 0;
let callTimerInterval = null;
let leafletMap = null;
let mapMarkers = [];

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  updateClock();
  setInterval(updateClock, 30000);

  // Load Saved Preferences
  const savedTheme = localStorage.getItem("app_soft_theme") || "theme-mint";
  switchAppTheme(savedTheme);

  const savedMode = localStorage.getItem("app_mode") || "light";
  setAppMode(savedMode);

  setLanguage(currentLang);

  renderHomeProducts();
  renderMarketProducts();
  renderMyItems();
  renderFavorites();
  renderChatThreads();
  renderNotifications();
  renderAdminStats();
  renderAdminAuditQueue();
  renderAdminItemsList();
  renderAdminUsers();
  setupEventListeners();

  // Trigger brief dynamic island pulse on start
  setTimeout(() => {
    triggerIslandPulse("🌿 Photharam Second Market", 3000);
  }, 1000);
});

// --- MULTI-LANGUAGE LOGIC (9 LANGUAGES) ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("app_lang", lang);
  document.documentElement.setAttribute("data-lang", lang);

  // Update in-app pills active state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
  });

  // Update modal choice cards active state
  document.querySelectorAll(".lang-card-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-choice") === lang);
  });

  // Update mini pill in app header
  const miniPill = document.getElementById("miniLangCode");
  if (miniPill) {
    const flags = {
      th: "🇹🇭 TH",
      en: "🇬🇧 EN",
      ja: "🇯🇵 JA",
      zh: "🇨🇳 ZH",
      ko: "🇰🇷 KO",
      de: "🇩🇪 DE",
      fr: "🇫🇷 FR",
      es: "🇪🇸 ES",
      my: "🇲🇲 MY"
    };
    miniPill.innerText = flags[lang] || lang.toUpperCase();
  }

  // Update all data-i18n elements
  const dict = translations[lang] || translations.th;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  const searchInput = document.getElementById("searchInput");
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }
  const marketSearchInput = document.getElementById("marketSearchInput");
  if (marketSearchInput && dict.search_placeholder) {
    marketSearchInput.placeholder = dict.search_placeholder;
  }

  // Re-render components with localized text
  renderHomeProducts();
  renderMarketProducts();
  renderMyItems();
  renderFavorites();

  const langNames = {
    th: "ภาษาไทย 🇹🇭",
    en: "English 🇬🇧",
    ja: "日本語 🇯🇵",
    zh: "简体中文 🇨🇳",
    ko: "한국어 🇰🇷",
    de: "Deutsch 🇩🇪",
    fr: "Français 🇫🇷",
    es: "Español 🇪🇸",
    my: "မြန်မာဘာသာ 🇲🇲"
  };
  showToast(`${langNames[lang] || lang.toUpperCase()}`);
}

function cycleLanguage() {
  const langs = ["th", "en", "ja", "zh", "ko", "de", "fr", "es", "my"];
  let nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
  setLanguage(langs[nextIdx]);
}

// Helper to get localized title & desc
function getProductTitle(item) {
  if (currentLang === "en" && item.title_en) return item.title_en;
  if (currentLang === "ja" && item.title_ja) return item.title_ja;
  if (currentLang === "zh" && item.title_zh) return item.title_zh;
  if (currentLang === "ko" && item.title_ko) return item.title_ko;
  if (currentLang === "de" && item.title_de) return item.title_de;
  if (currentLang === "fr" && item.title_fr) return item.title_fr;
  if (currentLang === "es" && item.title_es) return item.title_es;
  if (currentLang === "my" && item.title_my) return item.title_my;
  return item.title_th || item.title;
}

function getProductDesc(item) {
  if (currentLang === "en" && item.desc_en) return item.desc_en;
  if (currentLang === "ja" && item.desc_ja) return item.desc_ja;
  if (currentLang === "zh" && item.desc_zh) return item.desc_zh;
  if (currentLang === "ko" && item.desc_ko) return item.desc_ko;
  if (currentLang === "de" && item.desc_de) return item.desc_de;
  if (currentLang === "fr" && item.desc_fr) return item.desc_fr;
  if (currentLang === "es" && item.desc_es) return item.desc_es;
  if (currentLang === "my" && item.desc_my) return item.desc_my;
  return item.desc_th || item.description;
}

// --- MODAL CONTROLLERS (LANG & THEME MODALS) ---
function openLangModal() {
  const modal = document.getElementById("langModal");
  if (modal) {
    modal.classList.add("active");
    document.querySelectorAll(".lang-card-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-choice") === currentLang);
    });
  }
}

function closeLangModal() {
  const modal = document.getElementById("langModal");
  if (modal) modal.classList.remove("active");
}

function openThemeModal() {
  const modal = document.getElementById("themeModal");
  if (modal) {
    modal.classList.add("active");
    const curTheme = document.documentElement.getAttribute("data-theme") || "theme-mint";
    document.querySelectorAll(".theme-card-choice").forEach(card => {
      card.classList.toggle("active", card.getAttribute("data-theme-choice") === curTheme);
    });
  }
}

function closeThemeModal() {
  const modal = document.getElementById("themeModal");
  if (modal) modal.classList.remove("active");
}

// --- CLOCK SIMULATION ---
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const el = document.getElementById("statusTime");
  if (el) el.innerText = `${hours}:${mins}`;
}

// --- DYNAMIC ISLAND NOTIFICATION PULSE ---
function triggerIslandPulse(text, duration = 3000) {
  const island = document.getElementById("dynamicIsland");
  const islandText = document.getElementById("islandText");
  if (!island || !islandText) return;

  islandText.innerText = text;
  island.classList.add("expanded");
  setTimeout(() => {
    island.classList.remove("expanded");
    islandText.innerText = "Photharam Eco";
  }, duration);
}

function handleIslandClick() {
  triggerIslandPulse("🌱 CO2 Saved -1.2T • 89 Items Shared", 4000);
}

// --- THEME & MODE SWITCHERS ---
function switchAppTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("app_soft_theme", themeName);

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-set-theme") === themeName);
  });
  document.querySelectorAll(".theme-card-choice").forEach(card => {
    card.classList.toggle("active", card.getAttribute("data-theme-choice") === themeName);
  });
}

function setAppMode(mode) {
  document.documentElement.setAttribute("data-mode", mode);
  localStorage.setItem("app_mode", mode);
  const label = document.getElementById("modeLabelText");
  if (label) label.innerText = mode === "dark" ? "Dark Mode" : "Light Mode";
  const inAppMode = document.getElementById("inAppModeText");
  if (inAppMode) inAppMode.innerText = mode === "dark" ? "Dark Mode" : "Light Mode";
}

function toggleDarkLightMode() {
  const current = document.documentElement.getAttribute("data-mode") || "light";
  const newMode = current === "light" ? "dark" : "light";
  setAppMode(newMode);
  showToast(newMode === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode");
}

function setViewMode(mode) {
  document.body.classList.remove("mode-phone-frame", "mode-responsive");
  if (mode === "frame") {
    document.body.classList.add("mode-phone-frame");
    document.getElementById("btn-toggle-frame").classList.add("active");
    document.getElementById("btn-toggle-responsive").classList.remove("active");
  } else {
    document.body.classList.add("mode-responsive");
    document.getElementById("btn-toggle-frame").classList.remove("active");
    document.getElementById("btn-toggle-responsive").classList.add("active");
  }
  if (leafletMap) {
    setTimeout(() => leafletMap.invalidateSize(), 300);
  }
}

// --- TAB SWITCHER ---
function switchTab(tabName) {
  document.querySelectorAll(".tab-page").forEach(page => page.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));

  const targetPage = document.getElementById(`tab-${tabName}`);
  const targetNav = document.getElementById(`nav-${tabName}`);
  if (targetPage) targetPage.classList.add("active");
  if (targetNav) targetNav.classList.add("active");

  const appBody = document.getElementById("appBody");
  if (appBody) appBody.scrollTop = 0;

  // Initialize or resize Leaflet map when map tab opens
  if (tabName === "map") {
    setTimeout(initOrRefreshLeafletMap, 150);
  }
}

// --- RENDER PRODUCTS GRID (TAB 1 HOME) ---
function renderHomeProducts() {
  const container = document.getElementById("homeProductsGrid");
  if (!container) return;

  const filtered = products.filter(item => {
    if (item.status === "deleted") return false;
    const matchType = selectedType === "all" || item.type === selectedType;
    const matchCat = selectedCategory === "all" || item.category === selectedCategory;
    const title = getProductTitle(item).toLowerCase();
    const loc = item.location.toLowerCase();
    const matchSearch = !searchQuery || title.includes(searchQuery) || loc.includes(searchQuery);
    return matchType && matchCat && matchSearch;
  });

  const countBadge = document.getElementById("homeItemCount");
  if (countBadge) countBadge.innerText = `${filtered.length} ${currentLang === "en" ? "items" : currentLang === "ja" ? "件" : "รายการ"}`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 30px; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 6px;">🍃</p>
        <p style="font-size: 0.82rem;">${currentLang === "en" ? "No items found in this filter" : currentLang === "ja" ? "該当するアイテムが見つかりません" : "ไม่พบรายการในหมวดหมู่นี้"}</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="product-card" onclick="openProductDetail(${item.id})">
      <div class="product-img-wrapper">
        <img src="${item.image}" alt="${getProductTitle(item)}" loading="lazy" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
        <button class="btn-fav-card ${item.fav ? 'active' : ''}" onclick="toggleFav(event, ${item.id})" title="ถูกใจ">
          <i data-lucide="heart"></i>
        </button>
        <span class="badge-type ${item.type}">
          ${item.type === 'free' ? (currentLang === 'en' ? 'Free' : currentLang === 'ja' ? '無料' : 'แจกฟรี') : 
            item.type === 'sell' ? (currentLang === 'en' ? 'Sale' : currentLang === 'ja' ? '販売' : 'ขายต่อ') : 
            (currentLang === 'en' ? 'Swap' : currentLang === 'ja' ? '交換' : 'ขอแลก')}
        </span>
        <span class="badge-dist">${item.distance}</span>
      </div>
      <div class="product-info">
        <h5 class="product-title">${getProductTitle(item)}</h5>
        <p class="product-desc-snippet">${getProductDesc(item)}</p>
        <div class="product-meta-row">
          <span class="product-price">${item.price === 0 ? (currentLang === 'en' ? 'FREE' : currentLang === 'ja' ? '無料' : 'แจกฟรี') : `฿${item.price.toLocaleString()}`}</span>
          <span class="product-location"><i data-lucide="map-pin"></i> ${item.location}</span>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

// --- RENDER PRODUCTS VERTICAL (TAB 2 MARKET) ---
function renderMarketProducts() {
  const container = document.getElementById("marketProductsGrid");
  if (!container) return;

  const marketSearch = (document.getElementById("marketSearchInput")?.value || "").toLowerCase();

  const filtered = products.filter(item => {
    if (item.status === "deleted") return false;
    const matchType = marketCategory === "all" || item.type === marketCategory;
    const title = getProductTitle(item).toLowerCase();
    const loc = item.location.toLowerCase();
    const matchSearch = !marketSearch || title.includes(marketSearch) || loc.includes(marketSearch);
    return matchType && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--text-muted);">ไม่พบรายการสิ่งของ</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="product-card-v" onclick="openProductDetail(${item.id})">
      <div class="product-img-wrapper">
        <img src="${item.image}" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
      </div>
      <div class="product-info">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <h5 class="product-title" style="margin-bottom:2px;">${getProductTitle(item)}</h5>
          <span class="badge-type ${item.type}" style="position:static; margin-left:4px;">
            ${item.type === 'free' ? 'แจกฟรี' : item.type === 'sell' ? 'ขายต่อ' : 'ขอแลก'}
          </span>
        </div>
        <p class="product-desc-snippet">${getProductDesc(item)}</p>
        <div class="product-meta-row">
          <span class="product-price">${item.price === 0 ? 'แจกฟรี' : `฿${item.price.toLocaleString()}`}</span>
          <span class="product-location"><i data-lucide="map-pin"></i> ${item.location}</span>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

// --- FILTER CONTROLS ---
function filterByType(type) {
  selectedType = type;
  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-type") === type);
  });
  renderHomeProducts();
}

function filterByCategory(cat) {
  selectedCategory = cat;
  document.querySelectorAll(".cat-pill").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === cat);
  });
  renderHomeProducts();
}

function filterMarketCategory(mcat) {
  marketCategory = mcat;
  document.querySelectorAll(".market-filter-chips .chip").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-mcat") === mcat);
  });
  renderMarketProducts();
}

function toggleFav(e, id) {
  e.stopPropagation();
  const item = products.find(p => p.id === id);
  if (item) {
    item.fav = !item.fav;
    renderHomeProducts();
    renderFavorites();
    updateFavBadge();
    showToast(item.fav ? (currentLang === 'en' ? 'Saved to Favorites ❤️' : 'บันทึกในรายการโปรดแล้ว ❤️') : 'นำออกจากรายการโปรด');
  }
}

function updateFavBadge() {
  const count = products.filter(p => p.fav).length;
  const badge = document.getElementById("favTabBadge");
  const statBadge = document.getElementById("statFavCount");
  if (badge) badge.innerText = count;
  if (statBadge) statBadge.innerText = count;
}

// --- PRODUCT DETAIL MODAL ---
function openProductDetail(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  const content = document.getElementById("modalProductContent");
  content.innerHTML = `
    <div class="detail-img-box">
      <img src="${item.image}" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
    </div>
    <div class="detail-header-row">
      <div>
        <span class="badge-type ${item.type}" style="position:static; margin-bottom:4px; display:inline-block;">
          ${item.type === 'free' ? '🎁 แจกฟรี (Free)' : item.type === 'sell' ? '🏷️ ขายต่อมิตรภาพ' : '🔄 ขอแลกเปลี่ยน'}
        </span>
        <h3 class="detail-title">${getProductTitle(item)}</h3>
      </div>
      <span class="detail-price">${item.price === 0 ? 'แจกฟรี 0 บาท' : `฿${item.price.toLocaleString()}`}</span>
    </div>

    <div class="detail-seller-card">
      <img src="${item.seller.avatar}" class="seller-avatar" alt="${item.seller.name}">
      <div class="seller-info">
        <strong>${item.seller.name}</strong>
        <span>${item.seller.role} • <i data-lucide="map-pin" style="width:12px;height:12px;display:inline;"></i> ${item.location}</span>
      </div>
    </div>

    <p class="detail-desc">${getProductDesc(item)}</p>

    ${item.isMine ? `
      <div style="margin-top: 14px;">
        <button class="btn-delete-post" style="width:100%; padding: 11px 16px; font-size: 0.88rem; justify-content: center; gap: 8px;" onclick="confirmDeleteMyPost(${item.id}); closeProductModal();">
          <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
          <span>ลบโพสต์นี้ (ขายแล้ว / ส่งมอบแล้ว)</span>
        </button>
      </div>
    ` : `
      <div class="detail-action-btns">
        <button class="btn-chat-seller" onclick="startChatWithSeller(${item.id})">
          <i data-lucide="message-square"></i>
          <span>${currentLang === 'en' ? 'Chat' : currentLang === 'ja' ? 'チャット' : 'ทักแชท'}</span>
        </button>
        <button class="btn-call-seller btn-call-voice" onclick="startVoiceCallDirect('${item.seller.name.replace(/'/g, "\\'")}', '${item.seller.avatar}', '${item.image}', '${getProductTitle(item).replace(/'/g, "\\'")}')" title="โทรด้วยเสียง (ไม่เปิดกล้อง)">
          <i data-lucide="phone"></i>
        </button>
        <button class="btn-call-seller btn-call-video" onclick="startVideoCall('${item.seller.name.replace(/'/g, "\\'")}', '${item.seller.avatar}', '${item.image}', '${getProductTitle(item).replace(/'/g, "\\'")}')" title="วิดีโอคอลเปิดกล้อง (เห็นหน้า)">
          <i data-lucide="video"></i>
        </button>
      </div>
    `}
  `;

  document.getElementById("productModal").classList.add("active");
  lucide.createIcons();
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active");
}

// --- INTERACTIVE LEAFLET MAP ---
function initOrRefreshLeafletMap() {
  const mapContainer = document.getElementById("leafletMap");
  if (!mapContainer) return;

  if (!leafletMap) {
    // Photharam coordinates
    leafletMap = L.map('leafletMap', {
      center: [13.6935, 99.8510],
      zoom: 14,
      zoomControl: false
    });

    L.control.zoom({ position: 'topright' }).addTo(leafletMap);

    // CartoDB Voyager clean tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap © CARTO'
    }).addTo(leafletMap);

    // Create Eco Pins for products
    const ecoIcon = L.divIcon({
      className: 'custom-eco-pin',
      html: `<div style="background:#2d6a4f; color:#fff; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.3); border:2px solid #fff; font-size:14px;">🌿</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    products.forEach(item => {
      if (item.lat && item.lng) {
        const marker = L.marker([item.lat, item.lng], { icon: ecoIcon }).addTo(leafletMap);
        marker.bindPopup(`
          <div style="font-family:Prompt,sans-serif; text-align:center; padding:4px;">
            <strong style="font-size:0.82rem; color:#1b4332; display:block;">${getProductTitle(item)}</strong>
            <span style="font-size:0.75rem; color:#2d6a4f; font-weight:700;">${item.price === 0 ? 'แจกฟรี' : `฿${item.price}`}</span><br>
            <button onclick="openProductDetail(${item.id})" style="margin-top:4px; padding:3px 8px; background:#2d6a4f; color:#fff; border:none; border-radius:12px; font-size:0.68rem; cursor:pointer;">ดูสินค้า</button>
          </div>
        `);
        mapMarkers.push({ id: item.id, marker });
      }
    });
  } else {
    leafletMap.invalidateSize();
  }
}

function centerMapOnProduct(id) {
  const item = products.find(p => p.id === id);
  if (item && leafletMap) {
    leafletMap.setView([item.lat, item.lng], 16);
    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }
}

function filterByLocation(locName) {
  switchTab("market");
  const search = document.getElementById("marketSearchInput");
  if (search) {
    search.value = locName;
    renderMarketProducts();
  }
}

// --- CHAT SYSTEM & AUTOMATIC NEIGHBOR REPLIES ---
function renderChatThreads() {
  const container = document.getElementById("chatThreadsList");
  if (!container) return;

  container.innerHTML = chatThreads.map(thread => `
    <div class="chat-thread-card glass-card" onclick="openChatModal(${thread.id})">
      <img src="${thread.avatar}" class="thread-avatar" alt="${thread.name}">
      <div class="thread-info">
        <div class="thread-top">
          <strong>${thread.name}</strong>
          <span class="thread-time">${thread.time}</span>
        </div>
        <p class="thread-last-msg">${thread.lastMsg}</p>
      </div>
    </div>
  `).join("");
}

function startChatWithSeller(productId) {
  closeProductModal();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let thread = chatThreads.find(t => t.productId === productId);
  if (!thread) {
    thread = {
      id: Date.now(),
      productId: product.id,
      name: product.seller.name,
      avatar: product.seller.avatar,
      lastMsg: "สวัสดีครับ สนใจรับของครับ",
      time: "เมื่อสักครู่",
      messages: [
        { sender: "them", text: `สวัสดีครับ ยินดีต้อนรับครับ สนใจ ${getProductTitle(product)} ใช่ไหมครับ?` }
      ]
    };
    chatThreads.unshift(thread);
    renderChatThreads();
  }

  openChatModal(thread.id);
}

function openChatModal(threadId) {
  activeChatThreadId = threadId;
  const thread = chatThreads.find(t => t.id === threadId);
  if (!thread) return;

  const product = products.find(p => p.id === thread.productId) || products[0];

  document.getElementById("chatUserName").innerText = thread.name;
  document.getElementById("chatUserAvatar").src = thread.avatar;
  document.getElementById("chatItemTitle").innerText = getProductTitle(product);
  document.getElementById("chatItemPrice").innerText = product.price === 0 ? "แจกฟรี" : `฿${product.price}`;

  renderChatMessages(thread);
  document.getElementById("chatModal").classList.add("active");
  lucide.createIcons();
}

function closeChatModal() {
  document.getElementById("chatModal").classList.remove("active");
}

// --- AUDIO FEEDBACK SYNTHESIZER ---
function playChatSound(type = 'sent') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    if (type === 'sent') {
      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.22);
    }
  } catch (e) {
    // Graceful fallback if audio is blocked
  }
}

function getFormattedCurrentTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  return `${h}:${m} น.`;
}

function renderChatMessages(thread) {
  const container = document.getElementById("chatMessagesArea");
  if (!container) return;
  container.innerHTML = thread.messages.map(msg => `
    <div class="chat-bubble ${msg.sender}">
      <div class="bubble-text">${msg.text}</div>
      <span class="bubble-time">${msg.time || "เมื่อสักครู่"}</span>
    </div>
  `).join("");
  container.scrollTop = container.scrollHeight;
}

// --- INTERACTIVE CONVERSATIONAL CHAT SYSTEM ---
function sendChatMessage() {
  const input = document.getElementById("chatInputText");
  const text = input.value.trim();
  if (!text) return;

  const thread = chatThreads.find(t => t.id === activeChatThreadId);
  if (!thread) return;

  const timeNow = getFormattedCurrentTime();
  thread.messages.push({ sender: "me", text: text, time: timeNow });
  thread.lastMsg = text;
  thread.time = timeNow;
  input.value = "";
  playChatSound('sent');
  renderChatMessages(thread);
  renderChatThreads();

  const container = document.getElementById("chatMessagesArea");

  // Show dynamic realistic typing indicator
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "chat-typing-indicator";
  typingIndicator.id = "chatTypingIndicator";
  typingIndicator.innerHTML = `
    <div class="typing-dots"><span></span><span></span><span></span></div>
    <span>${thread.name} กำลังพิมพ์ตอบกลับ...</span>
  `;
  container.appendChild(typingIndicator);
  container.scrollTop = container.scrollHeight;

  // Generate realistic contextual response from Photharam neighbor
  setTimeout(() => {
    const existingIndicator = document.getElementById("chatTypingIndicator");
    if (existingIndicator) existingIndicator.remove();

    const lower = text.toLowerCase();
    let replyText = "";

    if (lower.includes("ลด") || lower.includes("ราคา") || lower.includes("ต่อรอง")) {
      replyText = "ยินดีลดให้ราคาพิเศษมิตรภาพชาวโพธารามเลยครับ หรือจะเอาของเหลือใช้มาแลกเปลี่ยนกันก็ได้ครับผม 😊";
    } else if (lower.includes("ตลาด") || lower.includes("ริมน้ำ") || lower.includes("ที่ไหน") || lower.includes("พิกัด") || lower.includes("นัด")) {
      replyText = "สะดวกนัดรับที่ตลาดริมน้ำโพธาราม ตรงลานกิจกรรม หรือแถวสถานีรถไฟโพธารามไหมครับ? ผมแวะไปได้ทุกเมื่อครับ 📍";
    } else if (lower.includes("วัน") || lower.includes("เสาร์") || lower.includes("อาทิตย์") || lower.includes("เวลา") || lower.includes("กี่โมง")) {
      replyText = "เสาร์-อาทิตย์นี้ช่วง 09:30 - 12:00 น. แวะมารับได้เลยนะครับ ผมเตรียมของไว้ให้เรียบร้อยครับ 🕒";
    } else if (lower.includes("ยังอยู่") || lower.includes("ไหม") || lower.includes("ขายยัง") || lower.includes("แจกยัง")) {
      replyText = "ของยังอยู่สภาพสมบูรณ์ดีมากครับ พร้อมส่งมอบต่อให้คุณนำไปใช้งานเลยครับ 🙏";
    } else if (lower.includes("ขอบคุณ") || lower.includes("ใจดี") || lower.includes("แต๊ง")) {
      replyText = "ยินดีมากๆ ครับ ชุมชนโพธารามแบ่งปันกัน เพื่อลดขยะและช่วยสิ่งแวดล้อมครับ 🌿";
    } else {
      const neighborReplies = [
        "ได้เลยครับ สะดวกนัดรับที่ตลาดริมน้ำโพธารามไหมครับ? จอดรถง่ายครับ 🚗",
        "ขอบคุณที่ช่วยลดขยะและแบ่งปันสิ่งของเพื่อชุมชนโพธารามครับ 🙏",
        "สภาพของยังดีเยี่ยม 90%+ เดี๋ยวผมทำความสะอาดใส่ถุงเตรียมไว้ให้ครับ ✨",
        "ยินดีส่งต่อให้ครับ วันนี้ช่วงเย็นแวะมารับได้เลยครับ เดี๋ยวผมปักหมุดให้ 📍",
        "ถ้าไม่สะดวกมารับ บอกพิกัดในโพธารามได้นะครับ เดี๋ยวผมขี่มอเตอร์ไซค์แวะไปส่งให้ได้ครับ 🛵"
      ];
      replyText = neighborReplies[Math.floor(Math.random() * neighborReplies.length)];
    }

    const replyTime = getFormattedCurrentTime();
    thread.messages.push({ sender: "them", text: replyText, time: replyTime });
    thread.lastMsg = replyText;
    thread.time = replyTime;
    playChatSound('received');
    renderChatMessages(thread);
    renderChatThreads();
    triggerIslandPulse(`💬 ${thread.name}: ${replyText}`, 4500);
  }, 1100);
}

function sendQuickMessage(text) {
  document.getElementById("chatInputText").value = text;
  sendChatMessage();
}

function handleChatEnter(e) {
  if (e.key === "Enter") sendChatMessage();
}

// --- IN-APP LIVE VIDEO CALL WITH REAL WEBCAM & SIMULATED SELLER FEED ---
let userMediaStream = null;
let isCameraOn = true;
let isMicMuted = false;
let isSpeakerMuted = false;
let isCallViewFlipped = false;
let currentFacingMode = "user";

async function startVideoCall(name, avatar, itemImage, itemTitle) {
  const callModal = document.getElementById("videoCallModal");
  if (!callModal) return;

  // Set Caller and Item Info
  document.getElementById("callUserName").innerText = name || "เพื่อนบ้านโพธาราม";
  if (avatar) document.getElementById("callAvatar").src = avatar;
  
  const sellerBg = document.getElementById("callSellerVideoBg");
  if (sellerBg && itemImage) {
    sellerBg.src = itemImage;
  }
  
  const itemLabel = document.getElementById("videoItemLabel");
  if (itemLabel) {
    itemLabel.innerText = itemTitle ? `📦 ${itemTitle}` : "🌿 ของใช้แบ่งปันโพธาราม";
  }

  // Connecting status text
  const statusEl = document.getElementById("callStatusText");
  const connectingTxt = {
    th: "🟢 กำลังเชื่อมต่อวิดีโอคอล HD...",
    en: "🟢 Connecting HD Video Call...",
    ja: "🟢 HDビデオ通話を接続中...",
    zh: "🟢 正在连接高清视频通话...",
    ko: "🟢 HD 영상 통화 연결 중...",
    de: "🟢 HD-Videoanruf wird verbunden...",
    fr: "🟢 Connexion à l'appel vidéo HD...",
    es: "🟢 Conectando videollamada HD...",
    my: "🟢 HD ဗီဒီယိုခေါ်ဆိုမှု ချိတ်ဆက်နေသည်..."
  }[currentLang] || "🟢 กำลังเชื่อมต่อวิดีโอคอล HD...";
  
  if (statusEl) statusEl.innerText = connectingTxt;

  // Reset timer
  const timerBadge = document.getElementById("callTimerBadge");
  if (timerBadge) {
    timerBadge.style.display = "none";
    timerBadge.innerText = "00:00";
  }
  if (callTimerInterval) clearInterval(callTimerInterval);
  callSeconds = 0;

  // Reset states
  isCameraOn = true;
  isMicMuted = false;
  isSpeakerMuted = false;
  isCallViewFlipped = false;
  callModal.classList.remove("view-swapped");
  updateVideoControlButtonsUI();

  // Show Modal
  callModal.classList.add("active");
  lucide.createIcons();

  // Initialize Real Webcam Stream
  await initWebcamStream();

  // Simulated Connection Handshake
  setTimeout(() => {
    const connectedTxt = {
      th: "🟢 เชื่อมต่อวิดีโอสดแล้ว (ภาพ & เสียงคมชัด)",
      en: "🟢 Live Video Connected (HD Audio & Video)",
      ja: "🟢 ライブビデオ接続完了 (HD映像＆音声)",
      zh: "🟢 视频已接通 (高清音视频)",
      ko: "🟢 라이브 비디오 연결됨 (HD)",
      de: "🟢 Live-Video verbunden (HD)",
      fr: "🟢 Vidéo en direct connectée (HD)",
      es: "🟢 Video en vivo conectado (HD)",
      my: "🟢 တိုက်ရိုက်ဗီဒီယို ချိတ်ဆက်ပြီး (HD)"
    }[currentLang] || "🟢 เชื่อมต่อวิดีโอสดแล้ว (ภาพ & เสียงคมชัด)";

    if (statusEl) statusEl.innerText = connectedTxt;
    if (timerBadge) {
      timerBadge.style.display = "inline-block";
      callTimerInterval = setInterval(() => {
        callSeconds++;
        const m = String(Math.floor(callSeconds / 60)).padStart(2, "0");
        const s = String(callSeconds % 60).padStart(2, "0");
        timerBadge.innerText = `${m}:${s}`;
      }, 1000);
    }
  }, 1300);
}

async function initWebcamStream() {
  const videoEl = document.getElementById("userCameraVideo");
  const fallbackEl = document.getElementById("userCameraFallback");

  if (userMediaStream) {
    userMediaStream.getTracks().forEach(t => t.stop());
    userMediaStream = null;
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      userMediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: currentFacingMode,
          width: { ideal: 640 },
          height: { ideal: 480 }
        },
        audio: false
      });

      if (videoEl) {
        videoEl.srcObject = userMediaStream;
        videoEl.style.display = "block";
        videoEl.play().catch(e => console.log("Camera auto-play handled:", e));
      }
      if (fallbackEl) fallbackEl.style.display = "none";
      showToast(currentLang === 'en' ? "📷 Camera active (Live Webcam)" : "📷 เปิดกล้องของคุณแล้ว (Live Camera)");
    } catch (err) {
      console.warn("Camera access denied or unavailable, using preview fallback:", err);
      if (videoEl) videoEl.style.display = "none";
      if (fallbackEl) fallbackEl.style.display = "flex";
      showToast(currentLang === 'en' ? "📷 Camera preview mode active" : "📷 เข้าสู่โหมดจำลองกล้องวิดีโอคอล");
    }
  } else {
    if (videoEl) videoEl.style.display = "none";
    if (fallbackEl) fallbackEl.style.display = "flex";
  }
}

function updateVideoControlButtonsUI() {
  const btnCam = document.getElementById("btnToggleCam");
  if (btnCam) {
    btnCam.classList.toggle("active", isCameraOn);
    const camOn = btnCam.querySelector(".icon-cam-on");
    const camOff = btnCam.querySelector(".icon-cam-off");
    if (camOn && camOff) {
      camOn.style.display = isCameraOn ? "block" : "none";
      camOff.style.display = isCameraOn ? "none" : "block";
    }
  }

  const btnMic = document.getElementById("btnToggleMic");
  if (btnMic) {
    btnMic.classList.toggle("active", !isMicMuted);
    const micOn = btnMic.querySelector(".icon-mic-on");
    const micOff = btnMic.querySelector(".icon-mic-off");
    if (micOn && micOff) {
      micOn.style.display = !isMicMuted ? "block" : "none";
      micOff.style.display = !isMicMuted ? "none" : "block";
    }
  }

  const btnSpeaker = document.getElementById("btnToggleSpeaker");
  if (btnSpeaker) {
    btnSpeaker.classList.toggle("active", !isSpeakerMuted);
    const spkOn = btnSpeaker.querySelector(".icon-speaker-on");
    const spkOff = btnSpeaker.querySelector(".icon-speaker-off");
    if (spkOn && spkOff) {
      spkOn.style.display = !isSpeakerMuted ? "block" : "none";
      spkOff.style.display = !isSpeakerMuted ? "none" : "block";
    }
  }

  lucide.createIcons();
}

function toggleVideoCamera() {
  isCameraOn = !isCameraOn;
  if (userMediaStream) {
    userMediaStream.getVideoTracks().forEach(track => {
      track.enabled = isCameraOn;
    });
  }

  const videoEl = document.getElementById("userCameraVideo");
  const fallbackEl = document.getElementById("userCameraFallback");

  if (isCameraOn) {
    if (userMediaStream && videoEl) videoEl.style.display = "block";
    if (fallbackEl) fallbackEl.style.display = "none";
    showToast(currentLang === 'en' ? "📷 Camera unmuted" : "📷 เปิดกล้องแล้ว");
  } else {
    if (videoEl) videoEl.style.display = "none";
    if (fallbackEl) fallbackEl.style.display = "flex";
    showToast(currentLang === 'en' ? "🚫 Camera paused" : "🚫 ปิดกล้องชั่วคราว");
  }

  updateVideoControlButtonsUI();
}

function flipCameraView() {
  isCallViewFlipped = !isCallViewFlipped;
  const modal = document.getElementById("videoCallModal");
  const pipLabel = document.getElementById("pipLabel");
  
  if (modal) {
    modal.classList.toggle("view-swapped", isCallViewFlipped);
  }
  if (pipLabel) {
    pipLabel.innerText = isCallViewFlipped ? "SELLER" : "YOU (Live)";
  }

  const msg = isCallViewFlipped 
    ? (currentLang === 'en' ? "🔄 Swapped view: Showing your camera on main screen" : "🔄 สลับมุมมอง: กล้องของคุณขึ้นจอใหญ่")
    : (currentLang === 'en' ? "🔄 Swapped view: Showing seller item feed" : "🔄 สลับมุมมอง: ภาพสินค้าโพธารามขึ้นจอใหญ่");
  showToast(msg);
}

async function flipCameraFacing() {
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  showToast(currentFacingMode === "user" 
    ? (currentLang === 'en' ? "📱 Switched to Front Camera" : "📱 สลับเป็นกล้องหน้า")
    : (currentLang === 'en' ? "📱 Switched to Back Camera" : "📱 สลับเป็นกล้องหลัง"));
  await initWebcamStream();
}

function toggleCallMute() {
  isMicMuted = !isMicMuted;
  updateVideoControlButtonsUI();
  showToast(isMicMuted 
    ? (currentLang === 'en' ? "🔇 Microphone Muted" : "🔇 ปิดไมโครโฟน") 
    : (currentLang === 'en' ? "🎙️ Microphone Unmuted" : "🎙️ เปิดไมโครโฟน"));
}

function toggleCallSpeaker() {
  isSpeakerMuted = !isSpeakerMuted;
  updateVideoControlButtonsUI();
  showToast(isSpeakerMuted 
    ? (currentLang === 'en' ? "🔈 Speaker Muted" : "🔈 ปิดเสียงลำโพง") 
    : (currentLang === 'en' ? "🔊 Speaker On (High Quality)" : "🔊 เปิดเสียงลำโพงชัดเจน"));
}

function endVideoCall() {
  if (callTimerInterval) {
    clearInterval(callTimerInterval);
    callTimerInterval = null;
  }
  if (userMediaStream) {
    userMediaStream.getTracks().forEach(track => track.stop());
    userMediaStream = null;
  }
  const videoEl = document.getElementById("userCameraVideo");
  if (videoEl) {
    videoEl.srcObject = null;
  }

  const modal = document.getElementById("videoCallModal");
  if (modal) {
    modal.classList.remove("active");
    modal.classList.remove("view-swapped");
  }

  showToast(currentLang === 'en' ? "Video call ended" : "วางสายวิดีโอคอลเรียบร้อย 🌿");
}

// --- IN-APP AUDIO-ONLY VOICE CALL (โทรด้วยเสียง - แบบไม่เห็นหน้า ไม่เปิดกล้อง) ---
let voiceTimerInterval = null;
let voiceCallSeconds = 0;
let isVoiceMicMuted = false;
let isVoiceSpeakerMuted = false;
let activeVoiceCallerInfo = null;

function startVoiceCall() {
  const thread = chatThreads.find(t => t.id === activeChatThreadId);
  const name = thread ? thread.name : "เพื่อนบ้านโพธาราม";
  const avatar = thread ? thread.avatar : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150";
  const product = thread ? products.find(p => p.id === thread.productId) : null;
  const itemImg = product ? product.image : "public/images/moo_kratha_grill_1786605664565.jpg";
  const itemTitle = product ? getProductTitle(product) : "สินค้าแบ่งปันในโพธาราม";
  startVoiceCallDirect(name, avatar, itemImg, itemTitle);
}

function startVideoCallDirectFromChat() {
  const thread = chatThreads.find(t => t.id === activeChatThreadId);
  const name = thread ? thread.name : "เพื่อนบ้านโพธาราม";
  const avatar = thread ? thread.avatar : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150";
  const product = thread ? products.find(p => p.id === thread.productId) : null;
  const itemImg = product ? product.image : "public/images/moo_kratha_grill_1786605664565.jpg";
  const itemTitle = product ? getProductTitle(product) : "สินค้าแบ่งปันในโพธาราม";
  startVideoCall(name, avatar, itemImg, itemTitle);
}

function startVoiceCallDirect(name, avatar, itemImg, itemTitle) {
  activeVoiceCallerInfo = { name, avatar, itemImg, itemTitle };
  const modal = document.getElementById("voiceCallModal");
  if (!modal) return;

  document.getElementById("voiceCallUserName").innerText = name || "เพื่อนบ้านโพธาราม";
  if (avatar) document.getElementById("voiceCallAvatar").src = avatar;
  if (itemTitle) document.getElementById("voiceCallItemTitle").innerText = itemTitle;

  const statusEl = document.getElementById("voiceCallStatusText");
  if (statusEl) statusEl.innerText = "กำลังเชื่อมต่อสายเสียงชุมชน (ความปลอดภัยสูง)...";

  const timerBadge = document.getElementById("voiceCallTimerBadge");
  if (timerBadge) {
    timerBadge.style.display = "none";
    timerBadge.innerText = "00:00";
  }

  isVoiceMicMuted = false;
  isVoiceSpeakerMuted = false;
  updateVoiceControlButtonsUI();

  modal.classList.add("active");
  lucide.createIcons();
  playChatSound('sent');

  if (voiceTimerInterval) clearInterval(voiceTimerInterval);
  voiceCallSeconds = 0;

  setTimeout(() => {
    if (statusEl) statusEl.innerText = "🟢 เชื่อมต่อสายแล้ว (เสียงคมชัดระดับ HD)";
    if (timerBadge) {
      timerBadge.style.display = "inline-block";
      voiceTimerInterval = setInterval(() => {
        voiceCallSeconds++;
        const m = String(Math.floor(voiceCallSeconds / 60)).padStart(2, "0");
        const s = String(voiceCallSeconds % 60).padStart(2, "0");
        timerBadge.innerText = `${m}:${s}`;
      }, 1000);
    }
  }, 1200);
}

function endVoiceCall() {
  if (voiceTimerInterval) {
    clearInterval(voiceTimerInterval);
    voiceTimerInterval = null;
  }
  const modal = document.getElementById("voiceCallModal");
  if (modal) modal.classList.remove("active");
  showToast("วางสายสนทนาเสียงเรียบร้อย 🌿");
}

function toggleVoiceMic() {
  isVoiceMicMuted = !isVoiceMicMuted;
  updateVoiceControlButtonsUI();
  showToast(isVoiceMicMuted ? "🔇 ปิดไมโครโฟน" : "🎙️ เปิดไมโครโฟน");
}

function toggleVoiceSpeaker() {
  isVoiceSpeakerMuted = !isVoiceSpeakerMuted;
  updateVoiceControlButtonsUI();
  showToast(isVoiceSpeakerMuted ? "🔈 ปิดเสียงลำโพง" : "🔊 เปิดเสียงลำโพง (HD Voice)");
}

function upgradeVoiceToVideoCall() {
  endVoiceCall();
  if (activeVoiceCallerInfo) {
    startVideoCall(
      activeVoiceCallerInfo.name,
      activeVoiceCallerInfo.avatar,
      activeVoiceCallerInfo.itemImg,
      activeVoiceCallerInfo.itemTitle
    );
  } else {
    startVideoCall();
  }
}

function toggleVoiceKeypad() {
  showToast("🔢 แป้นกดรหัสเชื่อมต่อภายใน อ.โพธาราม");
}

function updateVoiceControlButtonsUI() {
  const btnMic = document.getElementById("btnVoiceMic");
  if (btnMic) {
    btnMic.classList.toggle("muted", isVoiceMicMuted);
    const micOn = btnMic.querySelector(".v-mic-on");
    const micOff = btnMic.querySelector(".v-mic-off");
    if (micOn && micOff) {
      micOn.style.display = !isVoiceMicMuted ? "block" : "none";
      micOff.style.display = !isVoiceMicMuted ? "none" : "block";
    }
  }

  const btnSpk = document.getElementById("btnVoiceSpeaker");
  if (btnSpk) {
    btnSpk.classList.toggle("muted", isVoiceSpeakerMuted);
    const spkOn = btnSpk.querySelector(".v-spk-on");
    const spkOff = btnSpk.querySelector(".v-spk-off");
    if (spkOn && spkOff) {
      spkOn.style.display = !isVoiceSpeakerMuted ? "block" : "none";
      spkOff.style.display = !isVoiceSpeakerMuted ? "none" : "block";
    }
  }

  lucide.createIcons();
}

function triggerFabAddClick() {
  const fab = document.getElementById("fabAdd");
  if (fab) {
    fab.classList.add("spinning");
    setTimeout(() => fab.classList.remove("spinning"), 650);
  }
  openAddModal();
}

// --- ADD / EDIT LISTING MODAL ---
function openAddModal() {
  document.getElementById("listingForm").reset();
  document.getElementById("uploadPreviewImage").style.display = "none";
  document.getElementById("uploadPlaceholder").style.display = "flex";
  document.getElementById("priceFieldGroup").style.display = "none";
  document.getElementById("addListingModal").classList.add("active");
  lucide.createIcons();
}

function closeAddModal() {
  document.getElementById("addListingModal").classList.remove("active");
}

function triggerFileInput() {
  document.getElementById("fileInput").click();
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      setPreviewImageSrc(evt.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function setPresetImage(path) {
  setPreviewImageSrc(path);
}

function setPreviewImageSrc(src) {
  const preview = document.getElementById("uploadPreviewImage");
  const placeholder = document.getElementById("uploadPlaceholder");
  preview.src = src;
  preview.style.display = "block";
  placeholder.style.display = "none";
}

function togglePriceField(type) {
  const group = document.getElementById("priceFieldGroup");
  if (type === "sell") {
    group.style.display = "block";
    document.getElementById("addPrice").required = true;
  } else {
    group.style.display = "none";
    document.getElementById("addPrice").required = false;
  }
}

document.getElementById("listingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("addTitle").value.trim();
  const cat = document.getElementById("addCategory").value;
  const type = document.getElementById("addType").value;
  const price = type === "sell" ? (parseInt(document.getElementById("addPrice").value) || 0) : 0;
  const loc = document.getElementById("addLocation").value.trim();
  const desc = document.getElementById("addDescription").value.trim();
  const imgSrc = document.getElementById("uploadPreviewImage").src || "public/images/moo_kratha_grill_1786605664565.jpg";

  const newItem = {
    id: Date.now(),
    title_th: title,
    title_en: title,
    title_ja: title,
    category: cat,
    type: type,
    status: "active",
    price: price,
    location: loc,
    distance: "0.2 km",
    lat: 13.6930 + (Math.random() - 0.5) * 0.01,
    lng: 99.8510 + (Math.random() - 0.5) * 0.01,
    image: imgSrc,
    desc_th: desc,
    desc_en: desc,
    desc_ja: desc,
    seller: {
      name: "คุณป้าสมศรี (ร้านข้าวมันไก่)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      role: "สมาชิกดีเด่นชุมชนโพธาราม"
    },
    isMine: true,
    fav: false
  };

  products.unshift(newItem);
  closeAddModal();
  renderHomeProducts();
  renderMarketProducts();
  renderMyItems();

  showToast(currentLang === 'en' ? "🎉 Item posted successfully!" : "🎉 ลงประกาศสำเร็จเรียบร้อย!");
  triggerIslandPulse(`✨ ลงประกาศ '${title}' สำเร็จ!`, 4000);
});

// --- PROFILE SUB-SECTIONS ---
function switchProfileSection(sec) {
  document.querySelectorAll(".ptab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".prof-sub-section").forEach(s => s.classList.remove("active"));

  event.target.classList.add("active");
  const target = document.getElementById(`prof-${sec}`);
  if (target) target.classList.add("active");
}

function renderMyItems() {
  const container = document.getElementById("myItemsList");
  if (!container) return;

  const mine = products.filter(p => p.isMine);
  const countEl = document.getElementById("statMyCount");
  if (countEl) countEl.innerText = mine.length;

  if (mine.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 24px 16px; color: var(--text-muted); font-size:0.85rem;">ยังไม่มีรายการประกาศของคุณ<br><small style="color:var(--text-muted); opacity:0.8;">แตะปุ่ม '+ โพสต์เพิ่ม' เพื่อเริ่มแบ่งปันสิ่งของ</small></p>`;
    return;
  }

  container.innerHTML = mine.map(item => `
    <div class="product-card-v" onclick="openProductDetail(${item.id})">
      <div class="product-img-wrapper">
        <img src="${item.image}" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
      </div>
      <div class="product-info">
        <h5 class="product-title">${getProductTitle(item)}</h5>
        <div class="product-meta-row">
          <span class="product-price">${item.price === 0 ? 'แจกฟรี' : `฿${item.price}`}</span>
          <span class="product-location"><i data-lucide="map-pin"></i> ${item.location}</span>
        </div>
        <div class="my-item-actions-row">
          <button class="btn-delete-post" onclick="event.stopPropagation(); confirmDeleteMyPost(${item.id})" title="ขายแล้ว / ส่งมอบแล้ว ลบโพสต์ออกจากระบบ">
            <i data-lucide="trash-2"></i>
            <span>ลบโพสต์ (ขายแล้ว)</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function renderFavorites() {
  const container = document.getElementById("favoritesList");
  if (!container) return;

  const favs = products.filter(p => p.fav);
  updateFavBadge();

  if (favs.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--text-muted);">ยังไม่มีรายการที่ถูกใจ</p>`;
    return;
  }

  container.innerHTML = favs.map(item => `
    <div class="product-card-v" onclick="openProductDetail(${item.id})">
      <div class="product-img-wrapper">
        <img src="${item.image}" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
      </div>
      <div class="product-info">
        <h5 class="product-title">${getProductTitle(item)}</h5>
        <div class="product-meta-row">
          <span class="product-price">${item.price === 0 ? 'แจกฟรี' : `฿${item.price}`}</span>
          <span class="product-location"><i data-lucide="map-pin"></i> ${item.location}</span>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function markItemClaimed(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    item.status = "claimed";
    showToast("ส่งมอบสินค้าให้เพื่อนบ้านสำเร็จ 🎉");
    renderMyItems();
    renderHomeProducts();
  }
}

function confirmDeleteMyPost(id) {
  const item = products.find(p => p.id === id);
  const title = item ? getProductTitle(item) : "รายการนี้";
  if (confirm(`คุณต้องการลบโพสต์ "${title}" ใช่หรือไม่?\n\n(กด 'ตกลง' เมื่อขายได้แล้ว หรือส่งมอบให้เพื่อนบ้านเรียบร้อย)`)) {
    deleteMyItem(id);
  }
}

function deleteMyItem(id) {
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    const title = getProductTitle(products[idx]);
    products.splice(idx, 1);
    showToast(`🗑️ ลบโพสต์ "${title}" เรียบร้อยแล้ว (ขายแล้ว) 🎉`);
    renderMyItems();
    renderHomeProducts();
    renderMarketProducts();
    renderFavorites();
    renderAdminStats();
    renderAdminItemsList();
  }
}

// --- COMPREHENSIVE ADMIN SUITE SYSTEM ---
let adminUsers = [
  { id: 1, name: "คุณป้าสมศรี (ร้านข้าวมันไก่)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", role: "สมาชิกดีเด่นชุมชนโพธาราม", shares: 14, isBanned: false, isBadge: true },
  { id: 2, name: "ลุงสมชาย (ฟาร์มรักษ์โลก)", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", role: "เกษตรกรอินทรีย์ ต.สร้อยฟ้า", shares: 9, isBanned: false, isBadge: true },
  { id: 3, name: "เฮียโต้ง (ร้านหมูกระทะ)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", role: "ผู้ประกอบการ ตลาดริมน้ำ", shares: 5, isBanned: false, isBadge: false },
  { id: 4, name: "คุณวิชาญ (ข้าราชการเกษียณ)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", role: "จิตอาสา ต.บ้านเลือก", shares: 7, isBanned: false, isBadge: true }
];

function switchAdminTab(tabName) {
  document.querySelectorAll(".admin-tool-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".admin-sub-view").forEach(v => v.classList.remove("active"));

  const targetBtn = Array.from(document.querySelectorAll(".admin-tool-btn")).find(b => b.getAttribute("onclick")?.includes(tabName));
  if (targetBtn) targetBtn.classList.add("active");

  const targetView = document.getElementById(`admin-sec-${tabName}`);
  if (targetView) targetView.classList.add("active");

  if (tabName === "dashboard") renderAdminStats();
  if (tabName === "queue") renderAdminAuditQueue();
  if (tabName === "manage-items") renderAdminItemsList();
  if (tabName === "users") renderAdminUsers();

  lucide.createIcons();
}

function renderAdminStats() {
  const pendingCount = products.filter(p => p.status === "pending").length;
  const activeCount = products.filter(p => p.status !== "pending").length;
  
  const pCountEl = document.getElementById("adminPendingCount");
  if (pCountEl) pCountEl.innerText = pendingCount;

  const lCountEl = document.getElementById("adminTotalListings");
  if (lCountEl) lCountEl.innerText = activeCount;

  const uCountEl = document.getElementById("adminTotalUsers");
  if (uCountEl) uCountEl.innerText = adminUsers.length + 138; // total registered
}

// 1. AUDIT QUEUE MANAGEMENT
function renderAdminAuditQueue() {
  const container = document.getElementById("adminAuditQueueList");
  if (!container) return;

  const pending = products.filter(p => p.status === "pending");
  renderAdminStats();

  if (pending.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 24px 10px; color: var(--text-muted);">
        <i data-lucide="check-circle" style="width:32px; height:32px; color:#10b981; margin-bottom:6px; display:inline-block;"></i>
        <p style="font-size:0.78rem; font-weight:600;">ไม่มีรายการรอการตรวจสอบในขณะนี้</p>
        <small style="font-size:0.68rem;">ทุกรายการที่ส่งเข้ามาได้รับการอนุมัติเรียบร้อยแล้ว ✨</small>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = pending.map(item => `
    <div class="audit-card">
      <img src="${item.image}" class="audit-img" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
      <div class="audit-info">
        <h6 class="audit-title">${getProductTitle(item)}</h6>
        <div class="audit-meta">
          <span>${item.seller ? item.seller.name : 'สมาชิกโพธาราม'} • </span>
          <strong style="color:var(--primary);">${item.price === 0 ? 'แจกฟรี' : `฿${item.price}`}</strong>
          <span> • ${item.location}</span>
        </div>
        <div class="audit-actions">
          <button class="btn-audit-approve" onclick="adminApproveItem(${item.id})">
            <i data-lucide="check"></i> <span>อนุมัติ</span>
          </button>
          <button class="btn-audit-reject" onclick="adminRejectItem(${item.id})">
            <i data-lucide="x"></i> <span>ปฏิเสธ</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function adminApproveItem(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    item.status = "active";
    showToast(`🎉 อนุมัติประกาศ '${getProductTitle(item)}' เข้าระบบแล้ว!`);
    renderAdminAuditQueue();
    renderHomeProducts();
    renderMarketProducts();
    renderAdminStats();
  }
}

function adminRejectItem(id) {
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    products.splice(idx, 1);
    showToast("ปฏิเสธและลบรายการออกจากคิวแล้ว");
    renderAdminAuditQueue();
    renderAdminStats();
  }
}

function adminApproveAll() {
  const pending = products.filter(p => p.status === "pending");
  if (pending.length === 0) {
    showToast("ไม่มีรายการค้างในคิว");
    return;
  }
  pending.forEach(p => p.status = "active");
  showToast(`🎉 อนุมัติ ${pending.length} รายการทั้งหมดในคิวเรียบร้อย!`);
  renderAdminAuditQueue();
  renderHomeProducts();
  renderMarketProducts();
  renderAdminStats();
}

// 2. MANAGE & EDIT ALL ITEMS
function renderAdminItemsList(filterText = "") {
  const container = document.getElementById("adminItemsList");
  if (!container) return;

  let items = products;
  if (filterText) {
    const q = filterText.toLowerCase();
    items = products.filter(p => 
      getProductTitle(p).toLowerCase().includes(q) || 
      (p.seller && p.seller.name.toLowerCase().includes(q)) ||
      p.location.toLowerCase().includes(q)
    );
  }

  if (items.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--text-muted); font-size:0.75rem;">ไม่พบสิ่งของที่ค้นหา</p>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="admin-item-card">
      <img src="${item.image}" class="admin-item-img" alt="${getProductTitle(item)}" onerror="this.onerror=null;this.src='public/images/moo_kratha_grill_1786605664565.jpg';">
      <div class="admin-item-info">
        <h6 class="admin-item-title">${getProductTitle(item)} ${item.featured ? '<span class="badge-featured-star">⭐ ของเด่น</span>' : ''}</h6>
        <div class="admin-item-sub">
          <span>${item.price === 0 ? 'แจกฟรี' : `฿${item.price}`} • </span>
          <span style="color:${item.status === 'active' ? '#10b981' : item.status === 'claimed' ? '#3b82f6' : '#f59e0b'};">
            ${item.status === 'active' ? '🟢 พร้อมรับ' : item.status === 'claimed' ? '✅ ส่งมอบแล้ว' : '⏳ รอตรวจสอบ'}
          </span>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="btn-admin-tool-icon btn-edit" onclick="openAdminEditModal(${item.id})" title="แก้ไขข้อมูล">
          <i data-lucide="edit-2"></i>
        </button>
        <button class="btn-admin-tool-icon btn-feat ${item.featured ? 'is-featured' : ''}" onclick="adminToggleFeatureItem(${item.id})" title="${item.featured ? 'ยกเลิกของเด่น' : 'ปักหมุดของเด่น'}">
          <i data-lucide="star"></i>
        </button>
        <button class="btn-admin-tool-icon btn-del" onclick="adminDeleteItem(${item.id})" title="ลบสิ่งของ">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function filterAdminItems() {
  const input = document.getElementById("adminItemSearchInput");
  const q = input ? input.value.trim() : "";
  renderAdminItemsList(q);
}

function adminToggleFeatureItem(id) {
  const item = products.find(p => p.id === id);
  if (item) {
    item.featured = !item.featured;
    showToast(item.featured ? `⭐ ปักหมุด '${getProductTitle(item)}' เป็นของเด่นโพธารามแล้ว` : "ยกเลิกการปักหมุดแล้ว");
    renderAdminItemsList();
    renderHomeProducts();
    renderMarketProducts();
  }
}

function adminDeleteItem(id) {
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    const title = getProductTitle(products[idx]);
    products.splice(idx, 1);
    showToast(`ลบ '${title}' ออกจากระบบเรียบร้อย`);
    renderAdminItemsList();
    renderHomeProducts();
    renderMarketProducts();
    renderMyItems();
    renderAdminStats();
  }
}

// 3. ADMIN EDIT ITEM MODAL HANDLERS
function openAdminEditModal(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  document.getElementById("editItemId").value = item.id;
  document.getElementById("editTitle").value = item.title_th || "";
  document.getElementById("editCategory").value = item.category || "general";
  document.getElementById("editType").value = item.type || "free";
  document.getElementById("editPrice").value = item.price || 0;
  document.getElementById("editStatus").value = item.status || "active";
  document.getElementById("editLocation").value = item.location || "";
  document.getElementById("editDescription").value = item.desc_th || "";
  document.getElementById("editFeatured").checked = !!item.featured;

  toggleAdminEditPrice(item.type);

  document.getElementById("adminEditModal").classList.add("active");
  lucide.createIcons();
}

function closeAdminEditModal() {
  document.getElementById("adminEditModal").classList.remove("active");
}

function toggleAdminEditPrice(val) {
  const grp = document.getElementById("editPriceGroup");
  if (grp) grp.style.display = val === "sell" ? "block" : "none";
}

function saveAdminEditItem(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("editItemId").value);
  const item = products.find(p => p.id === id);
  if (!item) return;

  const newTitle = document.getElementById("editTitle").value.trim();
  item.title_th = newTitle;
  item.title_en = newTitle;
  item.title_ja = newTitle;
  item.category = document.getElementById("editCategory").value;
  item.type = document.getElementById("editType").value;
  item.price = item.type === "sell" ? (parseInt(document.getElementById("editPrice").value) || 0) : 0;
  item.status = document.getElementById("editStatus").value;
  item.location = document.getElementById("editLocation").value.trim();
  item.desc_th = document.getElementById("editDescription").value.trim();
  item.desc_en = item.desc_th;
  item.desc_ja = item.desc_th;
  item.featured = document.getElementById("editFeatured").checked;

  closeAdminEditModal();
  showToast("✨ บันทึกการแก้ไขข้อมูลสิ่งของสำเร็จ!");
  renderAdminItemsList();
  renderHomeProducts();
  renderMarketProducts();
  renderMyItems();
  renderAdminStats();
}

// 4. USER COMMUNITY MANAGEMENT
function renderAdminUsers() {
  const container = document.getElementById("adminUserManageList");
  if (!container) return;

  container.innerHTML = adminUsers.map(u => `
    <div class="admin-user-card" style="${u.isBanned ? 'opacity:0.6; background:#fef2f2;' : ''}">
      <img src="${u.avatar}" class="admin-user-avatar" alt="${u.name}">
      <div class="admin-user-info">
        <strong>${u.name} ${u.isBadge ? '<span style="color:#d97706; font-size:0.7rem;">⭐</span>' : ''}</strong>
        <span>${u.role} • แบ่งปันแล้ว ${u.shares} ชิ้น</span>
        ${u.isBanned ? '<span style="color:#dc2626; font-size:0.6rem; display:block; font-weight:700;">🚫 ระงับการใช้งานชั่วคราว</span>' : ''}
      </div>
      <div class="admin-user-actions">
        <button class="btn-user-pill ${u.isBadge ? 'badge-star' : ''}" onclick="adminToggleUserBadge(${u.id})">
          ${u.isBadge ? '⭐ เข็มกลัดทอง' : '+ มอบเข็มกลัด'}
        </button>
        <button class="btn-user-pill ${u.isBanned ? 'is-banned' : ''}" onclick="adminToggleUserBan(${u.id})">
          ${u.isBanned ? 'ปลดบล็อก' : 'ระงับสิทธิ์'}
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function adminToggleUserBadge(userId) {
  const user = adminUsers.find(u => u.id === userId);
  if (user) {
    user.isBadge = !user.isBadge;
    showToast(user.isBadge ? `⭐ มอบเข็มกลัดดีเด่นให้ ${user.name} แล้ว` : `ยกเลิกเข็มกลัดแล้ว`);
    renderAdminUsers();
  }
}

function adminToggleUserBan(userId) {
  const user = adminUsers.find(u => u.id === userId);
  if (user) {
    user.isBanned = !user.isBanned;
    showToast(user.isBanned ? `🚫 ระงับสิทธิ์ผู้ใช้ ${user.name} ชั่วคราว` : `🟢 ปลดระงับสิทธิ์ผู้ใช้ ${user.name} แล้ว`);
    renderAdminUsers();
  }
}

// 5. EXPORT REPORT & BROADCAST
function exportAdminReport() {
  document.getElementById("adminReportModal").classList.add("active");
  lucide.createIcons();
}

function closeAdminReportModal() {
  document.getElementById("adminReportModal").classList.remove("active");
}

function publishAdminBroadcast() {
  const input = document.getElementById("broadcastInput");
  const text = input.value.trim();
  if (!text) return;

  const selectedTypeRadio = document.querySelector('input[name="broadcastType"]:checked');
  const type = selectedTypeRadio ? selectedTypeRadio.value : "marquee";

  if (type === "alert") {
    triggerIslandPulse(`🚨 ประกาศด่วน: ${text}`, 6000);
    showToast(`🚨 ส่งประกาศเตือนด่วน: ${text}`);
  } else {
    const ticker = document.getElementById("activityTickerContent");
    if (ticker) {
      ticker.innerHTML = `<span>📢 <strong>ประกาศพิเศษจากแอดมิน:</strong> ${text}</span>`;
    }
    triggerIslandPulse(`📢 ${text}`, 5000);
    showToast("ส่งประกาศด่วนขึ้นแถบตัววิ่งแล้ว 📢");
  }

  input.value = "";
}

// --- NOTIFICATIONS & STORIES ---
function openNotificationsModal() {
  document.getElementById("notifModal").classList.add("active");
}
function closeNotificationsModal() {
  document.getElementById("notifModal").classList.remove("active");
}
function markAllNotificationsRead() {
  const dot = document.getElementById("notifBadgeDot");
  if (dot) dot.style.display = "none";
  showToast("อ่านการแจ้งเตือนทั้งหมดแล้ว");
  closeNotificationsModal();
}

function renderNotifications() {
  const list = document.getElementById("notifList");
  if (!list) return;

  const notifs = [
    { title: "มีผู้สนใจ 'จักรยานแม่บ้านญี่ปุ่น'", desc: "คุณวิชาญ ส่งข้อความขอนัดรับที่สถานีรถไฟโพธาราม", time: "10 นาทีที่แล้ว" },
    { title: "🎉 รายการผ่านการอนุมัติแล้ว", desc: "รายการของคุณผ่านการตรวจสอบจากสมาคมเกษตรกรแล้ว", time: "1 ชม. ที่แล้ว" },
    { title: "🌱 ชุมชนลดขยะทะลุเป้า!", desc: "สัปดาห์นี้โพธารามลดคาร์บอนเทียบเท่าปลูกต้นไม้ 15 ต้น", time: "เมื่อวาน" }
  ];

  list.innerHTML = notifs.map(n => `
    <div class="notif-card unread">
      <div class="notif-icon-box"><i data-lucide="bell"></i></div>
      <div class="notif-details">
        <strong>${n.title}</strong>
        <p>${n.desc}</p>
        <span class="notif-time">${n.time}</span>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

// Story Viewer
let storyTimer = null;
function openStoryViewer(author, avatar, text) {
  document.getElementById("storyAuthor").innerText = author;
  document.getElementById("storyAvatar").src = avatar;
  document.getElementById("storyTextContent").innerText = text;
  document.getElementById("storyModal").classList.add("active");

  const fill = document.getElementById("storyProgressFill");
  fill.style.width = "0%";
  setTimeout(() => fill.style.width = "100%", 50);

  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = setTimeout(closeStoryViewer, 6000);
}

function closeStoryViewer() {
  if (storyTimer) clearTimeout(storyTimer);
  document.getElementById("storyModal").classList.remove("active");
}

function reactStory(emoji) {
  showToast(`ส่ง ${emoji} ถึงสตอรี่แล้ว!`);
  closeStoryViewer();
}

// --- TOAST NOTIFICATIONS ---
function showToast(msg, icon = "🌿") {
  const container = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  const iconEl = document.getElementById("toastIcon");

  if (!container || !msgEl) return;
  msgEl.innerText = msg;
  if (iconEl) iconEl.innerText = icon;

  container.classList.add("active");
  setTimeout(() => {
    container.classList.remove("active");
  }, 2500);
}

function toggleQuickFilters() {
  showToast(currentLang === 'en' ? "Filter drawer activated" : "เปิดแผงตัวกรองด่วน");
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderHomeProducts();
    });
  }

  const marketSearchInput = document.getElementById("marketSearchInput");
  if (marketSearchInput) {
    marketSearchInput.addEventListener("input", () => {
      renderMarketProducts();
    });
  }
}
