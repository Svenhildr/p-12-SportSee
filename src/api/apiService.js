import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./apiMock";

export async function apiUserData(userId, useMock = false) {
    if (useMock) {
        return USER_MAIN_DATA.find((user) => user.id === userId);
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

export async function apiUserActivity(userId, useMock = false) {
    if (useMock) {
        const userActivity = USER_ACTIVITY.find((activity) => activity.userId === userId);
        return userActivity ? userActivity.sessions : [];
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data.sessions;
    } catch (error) {
        console.error("Error fetching user activity data:", error);
    }
}

export async function apiUserPerf(userId, useMock = false) {
    if (useMock) {
        const userPerformance = USER_PERFORMANCE.find((perf) => perf.userId === userId);
        return userPerformance ? userPerformance.data : [];
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data.data;
    } catch (error) {
        console.error("Error fetching user performance data:", error);
    }
}

export async function apiUserAverage(userId, useMock = false) {
    if (useMock) {
        const userAverage = USER_AVERAGE_SESSIONS.find((avg) => avg.userId === userId);
        return userAverage ? userAverage.sessions : [];
    }
    try {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.data.sessions;
    } catch (error) {
        console.error("Error fetching user average sessions data:", error);
    }
}

export async function fetchUserData(userId) {
    const data = await apiUserData(userId);
    return data;
}

export async function fetchUserActivity(userId) {
    const sessions = await apiUserActivity(userId);
    return sessions;
}

export async function fetchUserPerf(userId) {
    const performance = await apiUserPerf(userId);
    return performance;
}

export async function fetchUserAverage(userId) {
    const averageSessions = await apiUserAverage(userId);
    return averageSessions;
}
