import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from './styles'

interface Props {
    toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
    const { colors, title } = useContext(ThemeContext)
    return (
        <Container>
            Hello World

            <Switch 
                onChange={toogleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={11}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header