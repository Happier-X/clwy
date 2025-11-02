import express from 'express'
import getPagination from '../utils/pagination.js'
import { success } from '../utils/responses.js'
import searchService from '../services/search-service.js'
import { formatAttachments } from '../utils/attachments.js'

const router = express.Router()

/**
 * 搜索课程
 * GET /search/node
 */
router.get('/:query', async (req, res, next) => {
  const { query } = req.params
  const { page, limit, skip } = getPagination(req)

  const data = await searchService.searchCourses({
    query,
    page,
    limit,
    skip,
  })

  success(res, '查询课程列表成功。', formatAttachments(req, data))
})

export default router
