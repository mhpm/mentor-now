import React from 'react'
import styled from 'styled-components'
import {
  ActivityIndicator,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import theme from '../theme/LightTheme'
import { Row, Col } from 'react-native-responsive-grid-system'
import { space } from 'styled-system'
import Box from './Box'

const WrapperStyled = styled(SafeAreaView)`
  ${space}
  flex: 1;
  width: 100%;
`

const Spinner = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Wrapper = (props) => {
  const { children, loading, mdCol = 6, ...rest } = props
  return (
    <Row
      rowStyles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Col xs={12} sm={12} md={mdCol} lg={6}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <WrapperStyled {...rest}>
            {loading ? (
              <Spinner size="large" primary color={theme.colors.primary} />
            ) : (
              <Box flex={1} justifyContent="center" alignItems="center">
                {children}
              </Box>
            )}
          </WrapperStyled>
        </TouchableWithoutFeedback>
      </Col>
    </Row>
  )
}

export default React.memo(Wrapper)
