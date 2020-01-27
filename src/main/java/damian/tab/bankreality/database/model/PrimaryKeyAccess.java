package damian.tab.bankreality.database.model;

/**
 *
 * Each SQL Entity must have its own unique ID. We want to specify different sequence to achieve it, that's why we need this interface to get ID.
 * We can't extend by class <- Then only one sequence for all !!!
 *
 */

public interface PrimaryKeyAccess {
    int receivePrimaryKey();
    void setPrimaryKey(int primaryKey);
}
