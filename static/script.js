document.addEventListener('DOMContentLoaded', function() {
    const deviceList = document.getElementById('device-list');

    const devices = [
        { id: 'temp001', name: '客廳溫度感測器', type: '溫度', status: 'online', value: '25°C' },
        { id: 'light001', name: '臥室智慧燈', type: '照明', status: 'offline', value: '關閉' },
        { id: 'door001', name: '大門感應器', type: '安全', status: 'online', value: '關閉' },
        { id: 'cam001', name: '戶外攝影機', type: '監控', status: 'warning', value: '連線不穩' }
    ];

    function renderDevices() {
        deviceList.innerHTML = ''; // 清空現有內容
        devices.forEach(device => {
            const statusClass = {
                'online': 'status-online',
                'offline': 'status-offline',
                'warning': 'status-warning'
            }[device.status];

            const deviceCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="card device-card">
                        <div class="card-header">${device.name}</div>
                        <div class="card-body">
                            <h5 class="card-title">ID: ${device.id}</h5>
                            <p class="card-text">類型: ${device.type}</p>
                            <p class="card-text">數值: <strong>${device.value}</strong></p>
                            <p class="card-text">狀態: <span class="device-status ${statusClass}">${device.status === 'online' ? '連線中' : device.status === 'offline' ? '離線' : '異常'}</span></p>
                            <button class="btn btn-primary btn-sm">查看詳情</button>
                        </div>
                    </div>
                </div>
            `;
            deviceList.innerHTML += deviceCard;
        });
    }

    renderDevices();

    // 模擬裝置狀態更新
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * devices.length);
        const randomDevice = devices[randomIndex];

        // 隨機更新狀態和數值
        const statuses = ['online', 'offline', 'warning'];
        randomDevice.status = statuses[Math.floor(Math.random() * statuses.length)];

        if (randomDevice.type === '溫度') {
            randomDevice.value = `${(Math.random() * 10 + 20).toFixed(1)}°C`; // 20-30°C
        } else if (randomDevice.type === '照明') {
            randomDevice.value = randomDevice.status === 'online' ? '開啟' : '關閉';
        } else if (randomDevice.type === '安全') {
            randomDevice.value = randomDevice.status === 'online' ? '關閉' : '開啟';
        } else if (randomDevice.type === '監控') {
            randomDevice.value = randomDevice.status === 'online' ? '正常' : '連線不穩';
        }

        renderDevices();
    }, 5000); // 每 5 秒更新一次
});
