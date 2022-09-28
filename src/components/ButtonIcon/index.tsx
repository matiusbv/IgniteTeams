import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap; //serve para buscar os icones ao pesquisar 
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type} />
        </Container>
    )
}