import { withInstall } from '../utils'
import Container from './src/container.vue'
import Header from './src/header.vue'
import Footer from './src/footer.vue'
import Main from './src/main.vue'
import Aside from './src/aside.vue'

/**
 * CpContainer 页面布局容器
 *
 * @description 赛博朋克风格页面布局容器组件系列。
 * CpContainer 作为外层容器，内部可放置 CpHeader、CpAside、CpMain、CpFooter。
 *
 * @example
 * ```vue
 * <CpContainer>
 *   <CpHeader>HEADER</CpHeader>
 *   <CpContainer>
 *     <CpAside width="200px">侧边栏</CpAside>
 *     <CpMain>主内容</CpMain>
 *   </CpContainer>
 *   <CpFooter>FOOTER</CpFooter>
 * </CpContainer>
 * ```
 */
export const CpContainer = withInstall(Container)
export const CpHeader = withInstall(Header)
export const CpFooter = withInstall(Footer)
export const CpMain = withInstall(Main)
export const CpAside = withInstall(Aside)

export default CpContainer
export * from './src/container'
export type {
    CpContainerInstance,
    CpHeaderInstance,
    CpFooterInstance,
    CpMainInstance,
    CpAsideInstance,
} from './src/instance'
