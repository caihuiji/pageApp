/**
 * override 组件
 * 
 * 如果 source 中存在 dest 中的 proprty ，覆盖掉
 * 
 * @name - module
 * @author caihuiji
 * @param dest -
 *            被需要覆盖的 object
 * @param source -
 *            需要需要的 object
 */

;
coconut.define('coconut.override', function(dest, source) {
	if (dest != null || source != null) {
		for ( var k in dest) {
			if (source[k] != null) {
				dest[k] = source[k];
			}
		}
	}
	return dest;
});

