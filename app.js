/* ==========================================================================
   AquaLens Application Logic
   ========================================================================== */

// Curated metadata database for major/notable reservoirs in Taiwan
const RESERVOIRS_METADATA = {
  "10201": {
    name: "石門水庫",
    region: "north",
    location: "桃園市龍潭區",
    coordinates: "24.8118,121.2443",
    cctvSourceId: "21",
    cctvStationId: "7",
    cctvId: "116",
    cctvIds: ["116", "13"],
    description: "北台灣重要多功能水庫，風景秀麗，大壩嵩台設有高畫質攝影機俯瞰整個水庫。",
    bgImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop"
  },
  "10203": {
    name: "西勢水庫",
    region: "north",
    location: "基隆市暖暖區",
    coordinates: "25.0931,121.7344",
    cctvSourceId: "20",
    cctvStationId: "3668",
    cctvId: "17043",
    cctvIds: ["17043"],
    description: "台灣第一座專供民生用水的水庫，環境隱密幽靜。"
  },
  "10204": {
    name: "新山水庫",
    region: "north",
    location: "基隆市安樂區",
    coordinates: "25.1328,121.7161",
    cctvSourceId: "1",
    cctvStationId: "3530",
    cctvId: "16888",
    cctvIds: ["16888", "16887", "16886", "16885"],
    description: "主要供給基隆地區民生用水的離槽水庫。"
  },
  "10205": {
    name: "翡翠水庫",
    region: "north",
    location: "新北市石碇區",
    coordinates: "24.9122,121.6144",
    cctvSourceId: "1",
    cctvStationId: "5",
    cctvId: "8",
    cctvIds: ["8", "7", "6", "5"],
    description: "大台北地區最核心的水源保護區，管制嚴格，水質極佳。",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop"
  },
  "10401": {
    name: "寶山水庫",
    region: "north",
    location: "新竹縣寶山鄉",
    coordinates: "24.7431,121.0456",
    description: "支援新竹科學園區工業與民生用水的重要水源。"
  },
  "10405": {
    name: "寶山第二水庫",
    region: "north",
    location: "新竹縣寶山鄉",
    coordinates: "24.7245,121.0577",
    cctvSourceId: "21",
    cctvStationId: "1013",
    cctvId: "6946",
    cctvIds: ["6946", "6300"],
    description: "雙溪集水區主要水庫，大幅提升竹科水資源調配能力。"
  },
  "10501": {
    name: "永和山水庫",
    region: "north",
    location: "苗栗縣三灣鄉",
    coordinates: "24.6644,120.9317",
    cctvSourceId: "1",
    cctvStationId: "3554",
    cctvId: "16915",
    cctvIds: ["16915", "16914", "16913", "16912"],
    description: "台灣第一座無溢洪道設計的滾壓式土石壩水庫。"
  },
  "10601": {
    name: "明德水庫",
    region: "central",
    location: "苗栗縣頭屋鄉",
    coordinates: "24.5828,120.9022",
    description: "著名的觀光景點，湖中設有日新島等小島，風景迷人。"
  },
  "20101": {
    name: "鯉魚潭水庫",
    region: "central",
    location: "苗栗縣三義鄉",
    coordinates: "24.3323,120.7711",
    cctvSourceId: "1",
    cctvStationId: "1017",
    cctvId: "6310",
    cctvIds: ["6310", "6309", "6308"],
    description: "以獨特鋸齒堰溢洪道聞名的美麗水庫，供應大台中及苗栗用水。",
    bgImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop"
  },
  "20201": {
    name: "德基水庫",
    region: "central",
    location: "台中市和平區",
    coordinates: "24.2526,121.1613",
    cctvSourceId: "1",
    cctvStationId: "111",
    cctvId: "718",
    cctvIds: ["718", "717"],
    description: "大甲溪流域最上游的拱壩水庫，海拔高度達1400公尺，具高山景觀特徵。",
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop"
  },
  "20502": {
    name: "日月潭水庫",
    region: "central",
    location: "南投縣魚池鄉",
    coordinates: "23.8583,120.9167",
    cctvSourceId: "11",
    cctvStationId: "106818",
    cctvId: "106818",
    cctvIds: ["106818", "106783"],
    description: "兼具水力發電與國際級觀光價值的水庫，湖光山色世界聞名。",
    bgImage: "https://images.unsplash.com/photo-1527668752948-184e7745c6dd?w=800&auto=format&fit=crop"
  },
  "20509": {
    name: "湖山水庫",
    region: "central",
    location: "雲林縣斗六市",
    coordinates: "23.7022,120.6214",
    cctvSourceId: "1",
    cctvStationId: "1016",
    cctvId: "6307",
    cctvIds: ["6307", "6306", "6305"],
    description: "與集集攔河堰共同調配雲林地區民生用水的生態型水庫。"
  },
  "30301": {
    name: "仁義潭水庫",
    region: "south",
    location: "嘉義縣番路鄉",
    coordinates: "23.4686,120.5342",
    description: "風景怡人，是當地民眾散步、看夕陽的熱門休閒去處。"
  },
  "30302": {
    name: "蘭潭水庫",
    region: "south",
    location: "嘉義市東區",
    coordinates: "23.4697,120.4844",
    description: "古稱「紅毛埤」，湖水碧波蕩漾，設有彩色音樂噴泉。"
  },
  "30501": {
    name: "烏山頭水庫",
    region: "south",
    location: "台南市官田區",
    coordinates: "23.2045,120.3705",
    description: "由八田與一設計興建，形狀如綠色珊瑚，又稱「珊瑚潭」。",
    bgImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop"
  },
  "30502": {
    name: "曾文水庫",
    region: "south",
    location: "嘉義縣大埔鄉",
    coordinates: "23.2536,120.5375",
    cctvSourceId: "1",
    cctvStationId: "8",
    cctvId: "21",
    cctvIds: ["21", "20", "18", "15"],
    description: "台灣蓄水量最大的水庫，湖域遼闊，擁有極佳的山水環抱景觀。",
    bgImage: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800&auto=format&fit=crop"
  },
  "30503": {
    name: "南化水庫",
    region: "south",
    location: "台南市南化區",
    coordinates: "23.0768,120.4903",
    cctvSourceId: "1",
    cctvStationId: "151",
    cctvId: "1797",
    cctvIds: ["1797", "1796"],
    description: "南台灣民生用水的核心命脈之一，溢洪道採自然溢流設計。"
  },
  "30802": {
    name: "阿公店水庫",
    region: "south",
    location: "高雄市燕巢區",
    coordinates: "22.8122,120.3547",
    cctvSourceId: "21",
    cctvStationId: "1034",
    cctvId: "6353",
    cctvIds: ["6353"],
    description: "台灣大壩壩身長度第一的水庫，主要功能為防洪與農田灌溉。"
  },
  "31201": {
    name: "牡丹水庫",
    region: "south",
    location: "屏東縣牡丹鄉",
    coordinates: "22.1264,120.7719",
    cctvSourceId: "21",
    cctvStationId: "1020",
    cctvId: "6352",
    cctvIds: ["6352"],
    description: "恆春半島重要的水資源重鎮，四周群山環繞，大壩十分壯觀。"
  },
  // Special flood-diversion facilities (not in FHY reservoir API)
  "YUANSHAN": {
    name: "員山子分洪",
    region: "north",
    location: "新北市瑞芳區",
    coordinates: "25.1061,121.8291",
    cctvSourceId: "1",
    cctvStationId: "38",
    cctvId: "106",
    cctvIds: ["106", "105", "104", "103", "102", "101", "100", "99"],
    isFloodFacility: true,
    description: "台灣最重要的防洪分洪設施，可將基隆河洪水直接引入東海，保護大台北地區免受水患。",
    bgImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop"
  }
};

// Global App State
let globalReservoirsData = [];
let activeRegionFilter = "all";
let searchKeyword = "";
let activeReservoirId = null;

// Favorites Feature State and Helpers
let favoriteReservoirs = JSON.parse(localStorage.getItem("aqualens_favorites") || "[]");

function isFavorite(id) {
  return favoriteReservoirs.includes(id);
}

function sortReservoirsData() {
  globalReservoirsData.sort((a, b) => {
    // 1. Favorites come first
    const favA = isFavorite(a.id) ? 1 : 0;
    const favB = isFavorite(b.id) ? 1 : 0;
    if (favA !== favB) return favB - favA;

    // 2. Latitude descending (North to South)
    const latA = a.coordinates ? parseFloat(a.coordinates.split(',')[0]) : 0;
    const latB = b.coordinates ? parseFloat(b.coordinates.split(',')[0]) : 0;
    return latB - latA;
  });
}

window.toggleFavorite = function(event, id) {
  event.stopPropagation(); // Stop click from bubbling to card and opening the modal
  
  const index = favoriteReservoirs.indexOf(id);
  if (index > -1) {
    favoriteReservoirs.splice(index, 1);
  } else {
    favoriteReservoirs.push(id);
  }
  
  localStorage.setItem("aqualens_favorites", JSON.stringify(favoriteReservoirs));
  
  // Re-sort global data and re-render grid
  sortReservoirsData();
  renderReservoirsGrid();
};

function renderFavoritesQuickBar() {
  const quickBar = $("#favorites-quick-bar");
  const quickBarItems = $("#quick-bar-items");
  if (!quickBar || !quickBarItems) return;
  
  if (favoriteReservoirs.length === 0) {
    quickBar.classList.add("hidden");
    return;
  }
  
  quickBar.classList.remove("hidden");
  quickBarItems.innerHTML = "";
  
  // Find all favorite items in globalReservoirsData (maintaining sort order)
  const favorites = globalReservoirsData.filter(item => isFavorite(item.id));
  
  favorites.forEach(item => {
    const chip = document.createElement("button");
    chip.className = "quick-chip";
    const isFlood = item.isFloodFacility === true;
    const pctText = isFlood ? "分洪" : `${item.percentage.toFixed(1)}%`;
    
    chip.innerHTML = `
      <i data-lucide="star"></i>
      <span>${item.name}</span>
      <span class="chip-pct">${pctText}</span>
    `;
    
    chip.addEventListener("click", () => {
      openDetailsModal(item.id, true);
    });
    
    quickBarItems.appendChild(chip);
  });
  
  // Re-initialize Lucide icons
  lucide.createIcons();
}

// Element Selector Helper
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// API Endpoints
const API_URL_FHY_REALTIME = "https://fhy.wra.gov.tw/OpenApiv3/v2/Reservoir/Info/RealTime";
const API_URL_FHY_DAILY = "https://fhy.wra.gov.tw/OpenApiv3/v2/Reservoir/Daily";

// Fetch & Process Data
async function loadDashboardData() {
  showLoading();
  
  try {
    const [realtimeRes, dailyRes] = await Promise.all([
      fetch(API_URL_FHY_REALTIME),
      fetch(API_URL_FHY_DAILY).catch(err => {
        console.warn("Failed fetching daily reservoir API:", err);
        return null;
      })
    ]);

    if (!realtimeRes.ok) {
      throw new Error("無法連接到水利署 API");
    }
    
    const realtimeResult = await realtimeRes.json();
    const dataList = realtimeResult.Data || [];
    
    let dailyMap = {};
    if (dailyRes && dailyRes.ok) {
      try {
        const dailyResult = await dailyRes.json();
        const dailyList = dailyResult.Data || [];
        dailyList.forEach(day => {
          dailyMap[day.StationNo] = day;
        });
      } catch (err) {
        console.warn("Failed parsing daily reservoir data:", err);
      }
    }
    
    // Process and filter for major reservoirs
    const combined = [];
    
    dataList.forEach(item => {
      const rid = item.StationNo;
      if (!RESERVOIRS_METADATA[rid]) return;
      
      const meta = RESERVOIRS_METADATA[rid];
      
      const storage = item.EffectiveStorage !== null ? parseFloat(item.EffectiveStorage) : 0;
      const capacity = item.EffectiveCapacity !== null ? parseFloat(item.EffectiveCapacity) : 0;
      const percentage = item.PercentageOfStorage !== null ? parseFloat(item.PercentageOfStorage) : 0;
      const waterLevel = item.WaterHeight !== null ? parseFloat(item.WaterHeight) : 0;
      const rainfall = item.AccumulatedRainfall !== null ? parseFloat(item.AccumulatedRainfall) : 0;
      const inflow = item.Inflow !== null ? parseFloat(item.Inflow) : 0;
      const outflow = item.Outflow !== null ? parseFloat(item.Outflow) : 0;

      // Calculate differences compared to yesterday
      let storageDiff = null;
      let percentageDiff = null;
      let waterLevelDiff = null;

      const daily = dailyMap[rid];
      if (daily) {
        const yesterdayStorage = daily.EffectiveStorage !== null ? parseFloat(daily.EffectiveStorage) : null;
        const yesterdayPercentage = daily.PercentageOfStorage !== null ? parseFloat(daily.PercentageOfStorage) : null;
        const fullHeight = daily.FullWaterHeight !== null ? parseFloat(daily.FullWaterHeight) : null;
        const deadHeight = daily.DeadWaterHeight !== null ? parseFloat(daily.DeadWaterHeight) : null;

        if (yesterdayStorage !== null && storage > 0) {
          storageDiff = storage - yesterdayStorage;
        }
        if (yesterdayPercentage !== null && percentage > 0) {
          percentageDiff = percentage - yesterdayPercentage;
        }

        // Calibrated non-linear height difference estimation (power-law curve fitting)
        if (waterLevel > 0 && yesterdayPercentage !== null && fullHeight !== null && deadHeight !== null && fullHeight > deadHeight) {
          if (waterLevel > deadHeight && percentage > 0 && yesterdayPercentage > 0) {
            try {
              const ratioH = (waterLevel - deadHeight) / (fullHeight - deadHeight);
              const ratioP = percentage / 100.0;
              if (ratioH < 1.0 && ratioH > 0 && ratioP < 1.0 && ratioP > 0) {
                const beta = Math.log(ratioP) / Math.log(ratioH);
                const estYesterdayHeight = deadHeight + (fullHeight - deadHeight) * Math.pow(yesterdayPercentage / 100.0, 1.0 / beta);
                waterLevelDiff = waterLevel - estYesterdayHeight;
              } else {
                waterLevelDiff = ((percentage - yesterdayPercentage) * (fullHeight - deadHeight)) / 100.0;
              }
            } catch (e) {
              waterLevelDiff = ((percentage - yesterdayPercentage) * (fullHeight - deadHeight)) / 100.0;
            }
          } else {
            waterLevelDiff = ((percentage - yesterdayPercentage) * (fullHeight - deadHeight)) / 100.0;
          }
        }
      }
      
      combined.push({
        id: rid,
        name: meta.name,
        region: meta.region || "other",
        location: meta.location || "台灣",
        coordinates: meta.coordinates || "",
        youtubeChannelId: meta.youtubeChannelId || "",
        cctvId: meta.cctvId || "",
        cctvIds: meta.cctvIds || [],
        cctvSourceId: meta.cctvSourceId || "",
        cctvStationId: meta.cctvStationId || "",
        description: meta.description || "提供即時水庫蓄水量及水位高度資訊。",
        bgImage: meta.bgImage || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
        
        // Metrics
        currentStorage: storage,
        totalCapacity: capacity,
        percentage: percentage,
        waterLevel: waterLevel,
        rainfall: rainfall,
        inflow: inflow,
        outflow: outflow,
        updateTime: item.Time || "",

        // Comparison metrics
        storageDiff: storageDiff,
        percentageDiff: percentageDiff,
        waterLevelDiff: waterLevelDiff
      });
    });

    // Inject special facilities not in the API (flood diversion etc.)
    Object.entries(RESERVOIRS_METADATA).forEach(([rid, meta]) => {
      if (!meta.isFloodFacility) return;
      combined.push({
        id: rid,
        name: meta.name,
        region: meta.region || "north",
        location: meta.location || "台灣",
        coordinates: meta.coordinates || "",
        youtubeChannelId: "",
        cctvId: meta.cctvId || "",
        cctvIds: meta.cctvIds || [],
        cctvSourceId: meta.cctvSourceId || "",
        cctvStationId: meta.cctvStationId || "",
        description: meta.description || "",
        bgImage: meta.bgImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
        isFloodFacility: true,
        currentStorage: null,
        totalCapacity: null,
        percentage: null,
        waterLevel: null,
        rainfall: null,
        inflow: null,
        outflow: null,
        updateTime: "",
        storageDiff: null,
        percentageDiff: null,
        waterLevelDiff: null
      });
    });
    
    // Save to state and sort (Favorites first, then North to South)
    globalReservoirsData = combined;
    sortReservoirsData();
    
    // Update Stats Summary
    updateStatsSummary();
    
    // Render grid
    renderReservoirsGrid();
    
    // Update Refresh Time
    const now = new Date();
    $("#refresh-time").innerText = now.toLocaleTimeString();
    
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    renderErrorState(error.message);
  }
}

// Update Header Stats Box
function updateStatsSummary() {
  if (globalReservoirsData.length === 0) return;
  
  let normal = 0;
  let warning = 0;
  let critical = 0;
  let sumPercentage = 0;
  let validPercentageCount = 0;
  
  globalReservoirsData.forEach(item => {
    // Only count major reservoirs for stats to be meaningful
    if (item.totalCapacity > 100) { // Capacity > 1M m³
      if (item.percentage >= 35) {
        normal++;
      } else if (item.percentage >= 15) {
        warning++;
      } else {
        critical++;
      }
      sumPercentage += item.percentage;
      validPercentageCount++;
    }
  });
  
  const avg = validPercentageCount > 0 ? (sumPercentage / validPercentageCount) : 0;
  
  $("#normal-count").innerText = normal;
  $("#warning-count").innerText = warning;
  $("#critical-count").innerText = critical;
  $("#avg-storage").innerText = avg.toFixed(1) + "%";
}

// Helper to determine status type
function getStatusType(percentage) {
  if (percentage >= 35) return "safe";
  if (percentage >= 15) return "warning";
  return "critical";
}

// Helper to get status label
function getStatusLabel(percentage) {
  if (percentage >= 60) return "蓄水充足";
  if (percentage >= 35) return "水情正常";
  if (percentage >= 15) return "水情稍緊";
  return "嚴重缺水";
}

// Render grid cards
function renderReservoirsGrid() {
  renderFavoritesQuickBar();
  const grid = $("#reservoirs-grid");
  grid.innerHTML = "";
  
  // Filter data
  const filtered = globalReservoirsData.filter(item => {
    // Region filter
    if (activeRegionFilter !== "all" && item.region !== activeRegionFilter) {
      return false;
    }
    
    // Keyword search
    if (searchKeyword !== "") {
      const kw = searchKeyword.toLowerCase();
      const matchName = item.name.toLowerCase().includes(kw);
      const matchLoc = item.location.toLowerCase().includes(kw);
      return matchName || matchLoc;
    }
    
    return true;
  });
  
  if (filtered.length === 0) {
    renderEmptyState();
    return;
  }
  
  // Render Cards
  filtered.forEach(item => {
    const isFlood = item.isFloodFacility === true;
    const statusType = isFlood ? "flood" : getStatusType(item.percentage);
    const statusLabel = isFlood ? "防洪設施" : getStatusLabel(item.percentage);
    const hasLiveCam = item.youtubeChannelId !== "" || item.cctvStationId !== "" || item.cctvId !== "";
    const isFav = isFavorite(item.id);
    
    const card = document.createElement("div");
    card.className = "reservoir-card" + (isFlood ? " flood-facility-card" : "") + (isFav ? " is-favorite" : "");
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest('.btn-favorite') || e.target.closest('.card-footer')) {
        return;
      }
      openDetailsModal(item.id, true);
    });
    
    const gaugeHTML = isFlood
      ? `<div class="wave-gauge-container" data-status="flood">
          <div class="flood-icon-center"><i data-lucide="waves"></i></div>
          <span class="gauge-percentage" style="font-size:0.8rem;letter-spacing:0.05em">分洪道</span>
        </div>`
      : `<div class="wave-gauge-container" data-status="${statusType}">
          <div class="water-fill" style="bottom: ${item.percentage}%"></div>
          <div class="water-fill-overlay" style="bottom: ${item.percentage}%"></div>
          <span class="gauge-percentage">${item.percentage.toFixed(1)}%</span>
        </div>`;

    let compHTML = "";
    if (!isFlood) {
      if (item.waterLevelDiff !== null || item.storageDiff !== null || item.percentageDiff !== null) {
        const isUp = item.percentageDiff > 0 || item.storageDiff > 0 || item.waterLevelDiff > 0;
        const isDown = item.percentageDiff < 0 || item.storageDiff < 0 || item.waterLevelDiff < 0;
        const diffClass = isUp ? 'diff-up' : (isDown ? 'diff-down' : 'diff-flat');
        const diffArrow = isUp ? '▲' : (isDown ? '▼' : '-');
        
        const hDiff = item.waterLevelDiff !== null ? `${Math.abs(item.waterLevelDiff).toFixed(2)} m` : '';
        const pDiff = item.percentageDiff !== null ? `${item.percentageDiff > 0 ? '+' : ''}${item.percentageDiff.toFixed(1)}%` : '';
        const sDiff = item.storageDiff !== null ? `${item.storageDiff > 0 ? '+' : ''}${item.storageDiff.toFixed(1)} 萬 m³` : '';
        
        let diffText = "";
        if (hDiff) {
          diffText += `${diffArrow} ${hDiff}`;
        }
        if (pDiff || sDiff) {
          diffText += ` (${pDiff}${pDiff && sDiff ? ' | ' : ''}${sDiff})`;
        }
        
        compHTML = `
          <div class="metric-row comparison-row">
            <span class="metric-label">昨日相比</span>
            <span class="metric-value ${diffClass}">${diffText}</span>
          </div>
        `;
      } else {
        compHTML = `
          <div class="metric-row comparison-row">
            <span class="metric-label">昨日相比</span>
            <span class="metric-value diff-flat">-</span>
          </div>
        `;
      }
    }

    const metricsHTML = isFlood
      ? `<div class="card-metrics flood-metrics">
          <div class="metric-row flood-desc">
            <span class="metric-label">功能</span>
            <span class="metric-value">基隆河洪水分流</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">監控鏡頭</span>
            <span class="metric-value">${item.cctvIds.length} 個</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">位置</span>
            <span class="metric-value">${item.location}</span>
          </div>
        </div>`
      : `<div class="card-metrics">
          <div class="metric-row">
            <span class="metric-label">有效容量</span>
            <span class="metric-value">${item.totalCapacity.toFixed(1)} 萬 m³</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">當前蓄水</span>
            <span class="metric-value">${item.currentStorage.toFixed(1)} 萬 m³</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">水位高程</span>
            <span class="metric-value">${item.waterLevel.toFixed(2)} m</span>
          </div>
          ${compHTML}
        </div>`;
    
    card.innerHTML = `
      <div class="card-header">
        <div class="card-top">
          <div class="card-top-left">
            <span class="region-tag">${getRegionChineseName(item.region)}</span>
            <span class="state-badge ${statusType}">${statusLabel}</span>
          </div>
          <button class="btn-favorite" onclick="toggleFavorite(event, '${item.id}')" title="${isFav ? '取消最愛' : '加入最愛'}">
            <i data-lucide="star" class="${isFav ? 'fav-active' : ''}"></i>
          </button>
        </div>
        <div class="card-header-info">
          <h3 class="reservoir-name">${item.name}</h3>
          <p class="location-text"><i data-lucide="map-pin"></i> ${item.location}</p>
        </div>
      </div>
      
      <div class="card-body">
        ${gaugeHTML}
        ${metricsHTML}
      </div>
      
      <div class="card-footer">
        <button class="btn-card video-btn" onclick="openDetailsModal('${item.id}', true)">
          <i data-lucide="${hasLiveCam ? 'video' : 'camera-off'}"></i>
          ${hasLiveCam ? '即時影像' : '監控畫面'}
        </button>
        ${!isFlood ? `<button class="btn-card details-btn" onclick="openDetailsModal('${item.id}', false)">
          <i data-lucide="sliders"></i> 詳細數據
        </button>` : ''}
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Re-initialize Lucide icons
  lucide.createIcons();
}

// Helper to get Chinese Region name
function getRegionChineseName(region) {
  switch (region) {
    case "north": return "北部";
    case "central": return "中部";
    case "south": return "南部";
    case "offshore": return "離島";
    default: return "其他";
  }
}

// CCTV Interval Cleanup Helper
function clearCctvInterval() {
  if (window.cctvRefreshInterval) {
    if (typeof window.cctvRefreshInterval.close === "function") {
      window.cctvRefreshInterval.close();
    } else {
      clearInterval(window.cctvRefreshInterval);
    }
    window.cctvRefreshInterval = null;
  }
}

// Load Video / CCTV Feed
async function loadLiveFeed(item) {
  const videoWrapper = $("#video-wrapper");
  videoWrapper.innerHTML = "";
  clearCctvInterval();
  
  const selectorBar = $("#cctv-cam-selector-bar");
  if (selectorBar) selectorBar.innerHTML = "";

  if (item.youtubeChannelId) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/live_stream?channel=${item.youtubeChannelId}&autoplay=1&mute=1`;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoWrapper.appendChild(iframe);
  } else if (item.cctvStationId) {
    // Show loading spinner
    videoWrapper.innerHTML = `
      <div class="cctv-loading">
        <div class="spinner"></div>
        <p>正在載入即時影像...</p>
      </div>
    `;

    const sourceId = item.cctvSourceId || "21";
    
    // Determine if we are in Multi-Station Mode (like Sun Moon Lake where cctvStationId is inside cctvIds)
    const isMultiStationMode = item.cctvIds && item.cctvIds.length > 1 && item.cctvIds.includes(item.cctvStationId);
    
    if (isMultiStationMode) {
      // Setup CCTV container
      videoWrapper.innerHTML = "";
      const container = document.createElement("div");
      container.className = "cctv-container";
      
      const img = document.createElement("img");
      img.className = "cctv-live-image";
      
      const overlay = document.createElement("div");
      overlay.className = "cctv-overlay";
      
      container.appendChild(img);
      container.appendChild(overlay);
      videoWrapper.appendChild(container);

      const stationIds = item.cctvIds;
      let activeStationIdx = 0;
      let loopInterval = null;
      let refreshInterval = null;

      // Render Selector in top bar
      if (selectorBar) {
        selectorBar.innerHTML = "";
        stationIds.forEach((id, idx) => {
          const btn = document.createElement("button");
          btn.className = `cctv-cam-btn ${idx === 0 ? 'active' : ''}`;
          btn.innerHTML = `<span>畫面 </span>${idx + 1}`;
          btn.addEventListener("click", () => {
            selectorBar.querySelectorAll(".cctv-cam-btn").forEach((b, i) => {
              b.classList.toggle("active", i === idx);
            });
            activeStationIdx = idx;
            playMultiStation();
          });
          selectorBar.appendChild(btn);
        });
      }

      async function playMultiStation() {
        if (loopInterval) clearInterval(loopInterval);
        if (refreshInterval) clearInterval(refreshInterval);
        img.src = "";
        overlay.innerHTML = `<span class="cctv-badge">正在載入畫面...</span>`;

        const activeStationId = stationIds[activeStationIdx];
        try {
          const response = await fetch(`https://fhyv.wra.gov.tw/FhyWeb/v1/Api/CCTV/WRA/Cameras/${sourceId}/${activeStationId}`);
          if (!response.ok) throw new Error("CCTV API 載入失敗");
          
          const data = await response.json();
          if (data && data.length > 0 && data[0].cameras && data[0].cameras.length > 0) {
            const images = data[0].cameras[0].images || [];
            if (images.length > 0) {
              let frameIdx = 0;
              img.src = images[0];
              overlay.innerHTML = `
                <span class="cctv-badge"><span class="pulse-dot"></span>LIVE | 監控畫面 ${activeStationIdx + 1}</span>
                <span class="cctv-update-time">歷史影像輪巡中 (${images.length}幀)</span>
              `;
              loopInterval = setInterval(() => {
                frameIdx = (frameIdx + 1) % images.length;
                img.src = images[frameIdx];
              }, 1000);
              return; // Success!
            }
          }
          throw new Error("無影格資料");
        } catch (err) {
          console.warn("Live CCTV station failed, falling back to static:", err);
          const t = new Date().getTime();
          img.src = `https://fmg.wra.gov.tw/singlefmg/new/${activeStationId}/newbig.jpg?t=${t}`;
          overlay.innerHTML = `
            <span class="cctv-badge"><span class="pulse-dot"></span>LIVE | 監控畫面 ${activeStationIdx + 1} (單張備援)</span>
            <span class="cctv-update-time">畫面每10秒更新</span>
          `;
          refreshInterval = setInterval(() => {
            const newTime = new Date().getTime();
            img.src = `https://fmg.wra.gov.tw/singlefmg/new/${activeStationId}/newbig.jpg?t=${newTime}`;
          }, 10000);
        }
      }

      window.cctvRefreshInterval = {
        close: () => {
          if (loopInterval) clearInterval(loopInterval);
          if (refreshInterval) clearInterval(refreshInterval);
        }
      };

      playMultiStation();

    } else {
      // Single-Station Mode (e.g. Baoshan II, Feitsui)
      try {
        const response = await fetch(`https://fhyv.wra.gov.tw/FhyWeb/v1/Api/CCTV/WRA/Cameras/${sourceId}/${item.cctvStationId}`);
        if (!response.ok) throw new Error("CCTV API 載入失敗");
        
        const data = await response.json();
        if (data && data.length > 0 && data[0].cameras && data[0].cameras.length > 0) {
          const cameras = data[0].cameras;
          videoWrapper.innerHTML = "";
          
          const container = document.createElement("div");
          container.className = "cctv-container";
          
          const img = document.createElement("img");
          img.className = "cctv-live-image";
          
          const overlay = document.createElement("div");
          overlay.className = "cctv-overlay";
          
          container.appendChild(img);
          container.appendChild(overlay);
          videoWrapper.appendChild(container);
          
          let activeCamIdx = 0;
          let loopInterval = null;

          // Render Selector in top bar
          if (cameras.length > 1) {
            if (selectorBar) {
              selectorBar.innerHTML = "";
              cameras.forEach((cam, idx) => {
                const btn = document.createElement("button");
                btn.className = `cctv-cam-btn ${idx === 0 ? 'active' : ''}`;
                btn.innerHTML = `<span>畫面 </span>${idx + 1}`;
                btn.addEventListener("click", () => {
                  selectorBar.querySelectorAll(".cctv-cam-btn").forEach((b, i) => {
                    b.classList.toggle("active", i === idx);
                  });
                  activeCamIdx = idx;
                  startLoop();
                });
                selectorBar.appendChild(btn);
              });
            }
          }

          function startLoop() {
            if (loopInterval) clearInterval(loopInterval);
            const cam = cameras[activeCamIdx];
            const images = cam.images || [];
            if (images.length > 0) {
              let frameIdx = 0;
              img.src = images[0];
              overlay.innerHTML = `
                <span class="cctv-badge"><span class="pulse-dot"></span>LIVE | 監控畫面 ${activeCamIdx + 1}</span>
                <span class="cctv-update-time">歷史影像輪巡中 (${images.length}幀)</span>
              `;
              loopInterval = setInterval(() => {
                frameIdx = (frameIdx + 1) % images.length;
                img.src = images[frameIdx];
              }, 1000);
            } else {
              img.src = "";
              overlay.innerHTML = `<span class="cctv-badge">鏡頭 ${activeCamIdx + 1} 無影像資料</span>`;
            }
          }

          window.cctvRefreshInterval = {
            close: () => {
              if (loopInterval) clearInterval(loopInterval);
            }
          };

          startLoop();
          
        } else {
          throw new Error("找不到相機設定");
        }
      } catch (err) {
        console.warn("CORS fetch failed or CCTV empty, falling back to static image:", err);
        videoWrapper.innerHTML = "";
        
        const container = document.createElement("div");
        container.className = "cctv-container";
        
        const img = document.createElement("img");
        img.className = "cctv-live-image";
        
        const overlay = document.createElement("div");
        overlay.className = "cctv-overlay";
        
        container.appendChild(img);
        container.appendChild(overlay);
        videoWrapper.appendChild(container);
        
        const fallbackIds = item.cctvIds && item.cctvIds.length > 0 ? item.cctvIds : [item.cctvId || "6946"];
        let activeCamIdx = 0;
        let refreshInterval = null;

        // Render Selector in top bar
        if (fallbackIds.length > 1) {
          if (selectorBar) {
            selectorBar.innerHTML = "";
            fallbackIds.forEach((id, idx) => {
              const btn = document.createElement("button");
              btn.className = `cctv-cam-btn ${idx === 0 ? 'active' : ''}`;
              btn.innerHTML = `<span>畫面 </span>${idx + 1}`;
              btn.addEventListener("click", () => {
                selectorBar.querySelectorAll(".cctv-cam-btn").forEach((b, i) => {
                  b.classList.toggle("active", i === idx);
                });
                activeCamIdx = idx;
                startFallbackRefresh();
              });
              selectorBar.appendChild(btn);
            });
          }
        }

        function startFallbackRefresh() {
          if (refreshInterval) clearInterval(refreshInterval);
          const fallbackId = fallbackIds[activeCamIdx];
          const t = new Date().getTime();
          img.src = `https://fmg.wra.gov.tw/singlefmg/new/${fallbackId}/newbig.jpg?t=${t}`;
          
          overlay.innerHTML = `
            <span class="cctv-badge"><span class="pulse-dot"></span>LIVE | 監控畫面 ${activeCamIdx + 1} (單張備援)</span>
            <span class="cctv-update-time">畫面每10秒更新</span>
          `;
          
          refreshInterval = setInterval(() => {
            const newTime = new Date().getTime();
            img.src = `https://fmg.wra.gov.tw/singlefmg/new/${fallbackId}/newbig.jpg?t=${newTime}`;
          }, 10000);
        }

        window.cctvRefreshInterval = {
          close: () => {
            if (refreshInterval) clearInterval(refreshInterval);
          }
        };

        startFallbackRefresh();
      }
    }
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "stream-placeholder";
    placeholder.style.backgroundImage = `url('${item.bgImage}')`;
    placeholder.innerHTML = `
      <div class="stream-placeholder-content">
        <i data-lucide="video-off"></i>
        <h4>未提供即時影像畫面</h4>
        <p>${item.name}目前未提供常態性 YouTube 直播或水利署 CCTV。</p>
      </div>
    `;
    videoWrapper.appendChild(placeholder);
    lucide.createIcons();
  }
}

// Modal Controllers
window.openDetailsModal = function(reservoirId, focusVideo = false) {
  const item = globalReservoirsData.find(r => r.id === reservoirId);
  if (!item) return;

  activeReservoirId = reservoirId;

  const isFlood = item.isFloodFacility === true;
  const statusType = isFlood ? "flood" : getStatusType(item.percentage);
  const statusLabel = isFlood ? "防洪設施" : getStatusLabel(item.percentage);

  // Update texts
  $("#modal-name").innerText = item.name;
  $("#modal-title").innerText = `${item.name} 即時監控`;
  $("#modal-region").innerText = getRegionChineseName(item.region);
  $("#modal-region").className = `details-region ${statusType}`;
  $("#modal-location").innerText = item.location;
  $("#modal-percentage").innerText = isFlood ? "分洪道" : `${item.percentage.toFixed(1)}%`;

  // Water Level with diff pill
  if (item.waterLevel != null) {
    let wlText = `${item.waterLevel.toFixed(2)} m`;
    if (item.waterLevelDiff !== null) {
      const isUp = item.waterLevelDiff > 0;
      const isDown = item.waterLevelDiff < 0;
      const pillClass = isUp ? 'diff-up' : (isDown ? 'diff-down' : 'diff-flat');
      const pillArrow = isUp ? '▲' : (isDown ? '▼' : '-');
      wlText += ` <span class="modal-diff-pill ${pillClass}">${pillArrow} ${Math.abs(item.waterLevelDiff).toFixed(2)} m</span>`;
    }
    $("#modal-water-level").innerHTML = wlText;
  } else {
    $("#modal-water-level").innerText = "N/A";
  }

  $("#modal-total-capacity").innerText = item.totalCapacity != null ? `${item.totalCapacity.toFixed(1)} 萬 m³` : "N/A";

  // Current Storage with diff pill
  if (item.currentStorage != null) {
    let csText = `${item.currentStorage.toFixed(1)} 萬 m³`;
    if (item.storageDiff !== null || item.percentageDiff !== null) {
      const isUp = item.storageDiff > 0 || item.percentageDiff > 0;
      const isDown = item.storageDiff < 0 || item.percentageDiff < 0;
      const pillClass = isUp ? 'diff-up' : (isDown ? 'diff-down' : 'diff-flat');
      const pillArrow = isUp ? '▲' : (isDown ? '▼' : '-');
      
      const pDiffText = item.percentageDiff !== null ? `${item.percentageDiff > 0 ? '+' : ''}${item.percentageDiff.toFixed(1)}%` : '';
      const sDiffText = item.storageDiff !== null ? `${item.storageDiff > 0 ? '+' : ''}${item.storageDiff.toFixed(1)} 萬 m³` : '';
      let diffDetails = "";
      if (pDiffText && sDiffText) {
        diffDetails = `${pDiffText} | ${sDiffText}`;
      } else {
        diffDetails = pDiffText || sDiffText;
      }
      
      csText += ` <span class="modal-diff-pill ${pillClass}">${pillArrow} ${diffDetails}</span>`;
    }
    $("#modal-current-storage").innerHTML = csText;
  } else {
    $("#modal-current-storage").innerText = "N/A";
  }
  $("#modal-rainfall").innerText = item.rainfall  != null && item.rainfall  > 0 ? `${item.rainfall.toFixed(1)} mm`   : (item.rainfall  != null ? "0 mm"  : "N/A");
  $("#modal-inflow").innerText   = item.inflow    != null && item.inflow    > 0 ? `${item.inflow.toFixed(2)} cms`    : (item.inflow    != null ? "0 cms" : "N/A");
  $("#modal-outflow").innerText  = item.outflow   != null && item.outflow   > 0 ? `${item.outflow.toFixed(2)} cms`   : (item.outflow   != null ? "0 cms" : "N/A");

  // Status Badge
  const badge = $("#modal-status-badge");
  badge.innerText = statusLabel;
  badge.className = `status-badge ${statusType}`;

  // Wave animation heights
  const fill = $("#modal-water-fill");
  const fillParent = $("#modal-wave-gauge");
  if (isFlood) {
    fill.style.bottom = "0%";
    fillParent.setAttribute("data-status", "flood");
  } else {
    fill.style.bottom = `${item.percentage}%`;
    fillParent.setAttribute("data-status", statusType);
  }

  // Load Video / CCTV Feed
  loadLiveFeed(item);

  // Update links
  $("#modal-wra-link").href = `https://fhy.wra.gov.tw/fhyv2/monitor/cctvTable`;
  $("#modal-map-link").href = item.coordinates ? `https://www.google.com/maps/search/?api=1&query=${item.coordinates}` : `https://www.google.com/maps/search/?api=1&query=${item.name}`;

  // Re-create icons in modal
  lucide.createIcons();

  // Open modal
  $("#info-modal").classList.add("active");
};


function closeDetailsModal() {
  $("#info-modal").classList.remove("active");
  // Clean up all video/image elements to stop playback and release memory
  $("#video-wrapper").innerHTML = "";
  const selectorBar = $("#cctv-cam-selector-bar");
  if (selectorBar) selectorBar.innerHTML = "";
  clearCctvInterval();
  activeReservoirId = null;
}

// UI State Renderers
function showLoading() {
  $("#reservoirs-grid").innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>正在連線至水利署，獲取即時水情數據...</p>
    </div>
  `;
}

function renderErrorState(message) {
  $("#reservoirs-grid").innerHTML = `
    <div class="empty-state">
      <i data-lucide="wifi-off"></i>
      <p>無法載入即時水庫水情：${message}</p>
      <button class="btn-refresh" onclick="loadDashboardData()" style="width: auto;">
        <i data-lucide="refresh-cw"></i> 重新載入
      </button>
    </div>
  `;
  lucide.createIcons();
}

// Event Listeners Setup
function setupEventListeners() {
  // Region Filter Buttons
  const filterBtns = $$(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      activeRegionFilter = btn.dataset.region;
      renderReservoirsGrid();
    });
  });
  
  // Search Input Handler (with debounce/input event)
  $("#search-input").addEventListener("input", (e) => {
    searchKeyword = e.target.value;
    renderReservoirsGrid();
  });
  
  // Refresh Button Handler
  $("#btn-refresh").addEventListener("click", () => {
    loadDashboardData();
  });

  // Close Modal Button
  $("#modal-close-btn").addEventListener("click", closeDetailsModal);
  
  // Close Modal on Overlay Click
  $("#info-modal").addEventListener("click", (e) => {
    if (e.target === $("#info-modal")) {
      closeDetailsModal();
    }
  });
  
  // Close Modal on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#info-modal").classList.contains("active")) {
      closeDetailsModal();
    }
  });
}

// Main Init
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  loadDashboardData();
});
