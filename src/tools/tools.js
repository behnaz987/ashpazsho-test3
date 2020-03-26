// export const width = (a) => (a/1920)* window.innerWidth
// export const height = (a) =>(a/1080)* window.innerHeight
import useTheme from "@material-ui/styles/useTheme";

export function useWidth(size, targetRatio, baseRatio = 'xl') {
    const theme = useTheme();
    const initialRatio = theme.breakpoints.values[baseRatio];
    const finalRatio = theme.breakpoints.values[targetRatio];
    return size * finalRatio / initialRatio;
}


