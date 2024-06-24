import {create} from 'zustand';

const useStore = create((set) => ({
    cords: [-1, 0.58, 4.22],
    cordsR: [-0.18, 0, 0] ,
    orbit:false,
    zoom: 1,
    setZoom:(n) =>set((state)=>({zoom:n})),
    reset: () => set((state) => ({ cords: [-1, 0.58, 4.22],cordsR:[-0.18, 0, 0] })),
    setOrbit:()=>set((state)=>({orbit:!state.orbit})),
    project: () => set((state) => ({ cords: [-0.3,0.6,1 ],cordsR:[-0.07 ,-0.6,-0.02] })),
    about: () => set((state) => ({ cords: [-1.79,0.93,1.24],cordsR:[ 0,0.97,0] })),
    setCors:(x,y,z)=>set((state)=>({cords :[x,y,z]})),
    setCorsR:(x,y,z)=>set((state)=>({cordsR :[x,y,z]})),
    
}));
export default useStore;