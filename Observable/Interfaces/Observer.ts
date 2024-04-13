interface Observer{
    update(): void;
    shouldUpdate(): boolean;
}
export default Observer;