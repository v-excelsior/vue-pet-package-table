import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e')

const AS = client.initIndex('npm-search')

export default AS
