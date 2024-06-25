'use client';
import { useEffect } from "react";

const StatsView = ()=>{
    useEffect(() => {
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/younesaitouahdavercelapp.matomo.cloud/container_F1E1bSE1.js'; s.parentNode.insertBefore(g,s);
       }, [])
    return null
}
export default StatsView;