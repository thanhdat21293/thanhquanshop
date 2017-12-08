# Thành Quân Shop

**Thành viên:**
- Mạnh Linh
- Quang Tuyên
- Thành Đạt (Hỗ trợ đẩy tiến độ + đồ án)

**Công nghệ:**
- Backend: Node.js
- Frontend: React.js
- Database: MongoDB

## API

### Product

##### GET /api/productlatestproduct

Dữ liệu gửi

```
Không có
```

Dữ liệu trả về
```json
[
...
    {
        "_id": "5a279cc53e521a157646106f",
        "title": "Xiaomi Redmi Note 4X - 32GB - Ram 3 GB",
        "main_property": {
            "Bộ nhớ trong:": "32GB",
            "Chip xử lý (CPU):": "Qualcomm MSM8953 Snapdragon 625, Octa-core 2.0 GHz Cortex-A53,Adreno 506",
            "Dung lượng pin (mAh):": "4100 mAh",
            "Hãng sản xuất": "Xiaomi",
            "Hệ điều hành:": "Android 6.0 (Giao diện MIUI 8.0)",
            "Kích thước màn hình:": "5.5 inch",
            "Máy ảnh chính:": "13 MP, phụ 5 MP",
            "RAM:": "3 GB",
            "Độ phân giải màn hình:": "1080 x 1920 pixels"
        },
        "price": 3890000
    }
...
]
```

##### GET /api/hotproduct

Dữ liệu gửi

```
Không có
```

Dữ liệu trả về
```json
[
...
    {
        "_id": "5a279cc53e521a157646106f",
        "title": "Xiaomi Redmi Note 4X - 32GB - Ram 3 GB",
        "main_property": {
            "Bộ nhớ trong:": "32GB",
            "Chip xử lý (CPU):": "Qualcomm MSM8953 Snapdragon 625, Octa-core 2.0 GHz Cortex-A53,Adreno 506",
            "Dung lượng pin (mAh):": "4100 mAh",
            "Hãng sản xuất": "Xiaomi",
            "Hệ điều hành:": "Android 6.0 (Giao diện MIUI 8.0)",
            "Kích thước màn hình:": "5.5 inch",
            "Máy ảnh chính:": "13 MP, phụ 5 MP",
            "RAM:": "3 GB",
            "Độ phân giải màn hình:": "1080 x 1920 pixels"
        },
        "price": 3890000
    }
...
]
```

### Authenticate



## Mongo

#### Các kiểu dữ liệu trong MongoDB

```javascript
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays:   [[]]
  ofArrayOfNumbers: [[Number]]
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
})

// example use

var Thing = mongoose.model('Thing', schema);

var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.save(callback);
```

### Bộ chọn Query

[Xem thêm](https://docs.mongodb.com/manual/reference/operator/query/)

#### Tím kiếm so sánh
|Tên|Mô tả|
|:--|:-------:|
|$eq|Bằng|
|$gt|Lớn hơn|
|$gte|Lớn hơn hoặc bằng|
|$in|Phù hợp giá trị trong mảng|
|$lt|Nhỏ hơn|
|$lte|Nhỏ hơn hoặc bằng|
|$ne|Tìm khác giá trị được chỉ định|


### Truy vấn trong mongo

```javascript
Product.find(
    { status: 1, date: Date.now }, // Điều kiện truy vấn
    { title: 1, content: 1 } // Hiển thị những trường nào ra
    )
    .limit(10) // Giới hạn bản ghi
    .sort({created_at: 'desc'}); // Sắp xếp
    
// Tìm status = A hoặc = D
.find({ 
  status: { $in: ["A", "D"] }
});

// Tìm status = A và qty < 30
.find({ 
  status: "A", 
  qty: { $lt: 30 }
});
```

### Tham khảo

Viết theo Model - Controller của a Hải [Xem](https://github.com/haivx/connect-mongodb-express/tree/master/Example%203)

### Lưu ý

1) Mọi người làm phần nào thì nhớ viết docs nhé (Nhớ viết luôn đừng để làm xong đồ án mới viết)

