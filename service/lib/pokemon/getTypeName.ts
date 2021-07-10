import { TYPE_URL } from "./url";

/**
 * 日本語のタイプ名を取得
 * @param {string} id 
 * @returns {string} タイプ名
 */
 const getTypeName = async (id: string): Promise<string> => {
  return await fetch (TYPE_URL + id)
    .then(res => res.json())
    .then(res => {
      const ja = res.names.find( _ => _.language.name === 'ja-Hrkt' );
      return ja.name;
    })
  ;
}
export default getTypeName;