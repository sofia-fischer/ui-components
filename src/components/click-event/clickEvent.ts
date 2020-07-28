import moment from "moment";

export class ClickEvent
{
    public clickedUserId
    public timestamp
    public source

    constructor(userId, source)
    {
        this.clickedUserId = userId
        this.timestamp = moment().toISOString()
        this.source = source
    }
}
