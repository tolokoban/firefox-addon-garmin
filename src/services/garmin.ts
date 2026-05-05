import { assertGarminActivitySummaryArray, type GarminActivitySummary } from "@/types"

class ServiceGarminClass {
    async getActivities(start = 0, limit = 20): Promise<GarminActivitySummary[]> {
        try {
            const url = `https://connect.garmin.com/gc-api/activitylist-service/activities/search/activities`
            const activities = await this.getJson(url, { limit: `${limit}`, start: `${start}` })
            console.log('🐞 [garmin@8] activities =', activities) // @FIXME: Remove this line written on 2026-05-05 at 10:10
            assertGarminActivitySummaryArray(activities)
            return activities
        } catch (error) {
            console.error("Error while fetching activities:", error)
            throw new Error("Failed to fetch activities!")
        }
    }

    async getActivity(id: number) {
        try {
            const url = `https://connect.garmin.com/gc-api/activity-service/activity/${id}`
            return this.getJson(url)
        } catch (error) {
            console.error(`Error while fetching activity #${id}:`, error)
        }
    }

    // async getActivityTCX(id: number) {
    //     try {
    //         const url = `/gc-api/download-service/export/tcx/activity/${id}`

    //     }
    // }

    async getJson(url: string, params: Record<string, string> = {}) {
        const text = await this.getText(url, params)
        const json = JSON.parse(text)
        return json
    }

    async getText(url: string, params: Record<string, string> = {}) {
        try {
            const token = this.getToken()
            const options = cloneInto(
                { headers: { "Connect-Csrf-Token": token } },
                window.wrappedJSObject
            )
            const resp = await window.wrappedJSObject.fetch(`${url}?${new URLSearchParams(params)}`, options)
            const text = await resp.text()
            return text
        } catch (error) {
            console.error(`Error while fetching "${url}":`, error)
            throw new Error(`Failed to fetch text from "${url}"!`)
        }
    }

    private getToken() {
        try {
            const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")
            console.log('🐞 [garmin@28] token =', token) // @FIXME: Remove this line written on 2026-05-04 at 19:25
            if (!token) throw new Error("CSRF token not found!")

            return token
        } catch (error) {
            console.error("Error while getting token", error)
        }
    }
}

export const ServiceGarmin = new ServiceGarminClass()