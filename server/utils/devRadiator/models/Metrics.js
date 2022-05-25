const mongoose = require('mongoose')

const MetricsSchema = new mongoose.Schema({
  pageSpeed: {
    type: Object,
    default: {},
  },
  deploys: {
    type: Number,
    default: 0,
  },
  coverage: {
    type: Object,
    default: {},
  },
  eslintErrors: {
    type: Number,
    default: 0,
  },
}, { timestamps: { createdAt: 'created_at' } })

const Metrics = mongoose.model('Metrics', MetricsSchema)

module.exports = Metrics
