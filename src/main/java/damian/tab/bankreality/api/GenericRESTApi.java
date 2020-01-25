package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.BaseModel;
import damian.tab.bankreality.database.model.PrimaryKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class GenericRESTApi<T extends BaseModel> {

    @Autowired
    private GenericDAO<T> dao;

    @GetMapping
    public List<T> list() {
        return dao.findAll();
    }

    @PostMapping
    public PrimaryKey create(@RequestBody T entity) {
        dao.saveAndFlush(entity);
        return entity.getKey();
    }
//
//    @PutMapping("/{id}")
//    public T update(@PathVariable(value = "id") long id, @RequestBody T entity) {
//        return dao.save(entity);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable(value = "id") long id) {
////        dao.delete(id);
//    }
//
//    @GetMapping("/{id}")
//    public T get(@PathVariable(value = "id") long id) {
////        return dao.getOne(id);
//        return null;
//    }
}
