import { ReactComponentLike } from "prop-types";

export type D3RenderFunction = (
    anchor: React.RefObject<unknown>,
    props: Props,
    state: State
) => void;

export type D3RenderHookFunction = (anchor: HTMLElement | null) => void;

export interface Props {
    x: number;
    y: number;
    component?: ReactComponentLike;
}

export interface State {
    [key: string]: any;
}
