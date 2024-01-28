export const groupUsersWithCount = (arr) =>
    arr.reduce((res, curr) => {
        if (!(curr.userId in res)) {
            res[curr.userId] = { completedCount: 0, uncompletedCount: 0, items: [], userId: curr.userId };
        }

        if (curr.completed) {
            res[curr.userId].completedCount += 1;
        } else {
            res[curr.userId].uncompletedCount += 1;
        }

        res[curr.userId].items.push({ id: curr.id, title: curr.title });

        return res;
    }, {});

export const sortUsersGroups = (groups) =>
    Object.values(groups).sort((a, b) => {
        if (a.completedCount !== b.completedCount) {
            return b.completedCount - a.completedCount;
        }
        return a.userId - b.userId;
    });
