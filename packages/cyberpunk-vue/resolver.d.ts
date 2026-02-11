export interface CyberpunkVueResolverResult {
  name: string
  from: string
  sideEffects?: string | string[]
}

export interface CyberpunkVueComponentResolver {
  type: 'component'
  resolve: (name: string) => CyberpunkVueResolverResult | undefined
}

export interface CyberpunkVueResolverOptions {
  importStyle?: boolean | 'css' | 'none'
}

export declare function CyberpunkVueResolver(options?: CyberpunkVueResolverOptions): CyberpunkVueComponentResolver
export default CyberpunkVueResolver
