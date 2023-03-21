// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "picture": {
    "rules": [
      {
        "format": "file"
      }
    ],
    "title": "图片文件",
    "label": "图片文件"
  },
  "picturePath": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "图片路径",
    "label": "图片路径"
  },
  "pictureDesc": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "画面描述",
    "label": "画面描述"
  },
  "pictureModel": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "画面模型",
    "label": "画面模型"
  },
  "pictureSize": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "图画大小-分辨率",
    "label": "图画大小-分辨率"
  },
  "pictureTopic": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "模型主题",
    "label": "模型主题"
  },
  "pictureStyle": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "title": "风格选择",
    "label": "风格选择"
  }
}

const enumConverter = {}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
