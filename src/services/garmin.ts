class ServiceGarminClass {
    async getActivities() {
        try {
            const url = `https://connect.garmin.com/gc-api/activitylist-service/activities/search/activities?${params}`
            return this.fetch(url, { limit: "20", start: "0" })
        } catch (error) {
            console.error("Error while fetching activities:", error)
        }
    }

    async getActivity(id: number) {
        try {
            const url = `https://connect.garmin.com/gc-api/activity-service/activity/${id}`
            return this.fetch(url)
        } catch (error) {
            console.error(`Error while fetching activity #${id}:`, error)
        }
    }

    // async getActivityTCX(id: number) {
    //     try {
    //         const url = `/gc-api/download-service/export/tcx/activity/${id}`

    //     }
    // }

    async fetch(url: string, params: Record<string, string> = {}) {
        try {
            const token = this.getToken()
            if (!token) return

            const url = `https://connect.garmin.com/gc-api/activitylist-service/activities/search/activities?${new URLSearchParams(params)}`
            const options = cloneInto(
                { headers: { "Connect-Csrf-Token": token } },
                window.wrappedJSObject
            )
            const resp = await window.wrappedJSObject.fetch(url, options)
            console.log('🐞 [garmin@14] resp =', resp) // @FIXME: Remove this line written on 2026-05-04 at 18:57
            const text = await resp.text()
            console.log('🐞 [garmin@16] text =', text) // @FIXME: Remove this line written on 2026-05-04 at 18:57
            const data = JSON.parse(text)
            console.log('🐞 [garmin@18] data =', data) // @FIXME: Remove this line written on 2026-05-04 at 18:57
            return data
        } catch (error) {
            console.error(`Error while fetching "${url}":`, error)
        }

    }

    private getToken() {
        try {
            const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")
            console.log('🐞 [garmin@28] token =', token) // @FIXME: Remove this line written on 2026-05-04 at 19:25
            return token
        } catch (error) {
            console.error("Error while getting token", error)
        }
    }
}

export const ServiceGarmin = new ServiceGarminClass()