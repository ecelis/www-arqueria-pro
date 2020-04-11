import Typography from "typography"
//import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography({
    googleFonts: [
        {
          name: 'Fira Sans',
          styles: [
            '400',
            '400i',
            '700',
            '700i',
          ],
        }
      ],
})

export const { scale, rhythm, options } = typography
export default typography