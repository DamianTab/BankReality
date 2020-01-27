package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.PrimaryKeyAccess;
import damian.tab.bankreality.exception.EntityNotFoundException;
import damian.tab.bankreality.exception.RemovingNecessaryEntityException;
import lombok.RequiredArgsConstructor;
import org.hibernate.JDBCException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.RollbackException;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public abstract class GenericRESTApi<T extends PrimaryKeyAccess> {

    private final JpaRepository<T, Integer> dao;

    @GetMapping
    public List<T> list() {
        return dao.findAll();
    }

    @PostMapping
    public int create(@RequestBody T entity) {
        dao.saveAndFlush(entity);
        return entity.receivePrimaryKey();
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@PathVariable(value = "id") int id, @RequestBody T entity) {
        if (dao.findById(id).isEmpty()) {
            throw new EntityNotFoundException();
//            return ResponseEntity.notFound().build();
        }
        entity.setPrimaryKey(id);
        dao.save(entity);
        return ResponseEntity.status(200).build();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable(value = "id") int id) {
        if (dao.findById(id).isEmpty()) {
            throw new EntityNotFoundException();
        }
        try{
            dao.deleteById(id);
        }catch (DataIntegrityViolationException e){
            throw new RemovingNecessaryEntityException();
        }
    }

    @GetMapping("/{id}")
    public T get(@PathVariable(value = "id") int id) {
        Optional<T> entity = dao.findById(id);
        if (entity.isEmpty()) {
            throw new EntityNotFoundException();
        }
        return dao.getOne(id);
    }
}
