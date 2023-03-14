export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0,'clear'])
    )
    // multi-dimensional array which represents the grid
    // we build the array from something (hence the .from)
    // in this case it is another array which is created from
    // stage_height