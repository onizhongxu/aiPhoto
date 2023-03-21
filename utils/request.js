const db = uniCloud.database();
// 获取首页列表
export const getIndexList = (data) => {
    return db.collection("ai-user-picture,uni-id-users")
        .field("picturePath,pictureDesc,pictureModel,pictureSize,user_id.nickname,user_id.avatar_file")
        .get()
}